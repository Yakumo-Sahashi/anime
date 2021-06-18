function mostrarDatos(){
	$.ajax({
	    url:'model/panel/mostrarDatos.php',
	    success: function(r){
	      $('#datos_tabla').html(r);
	    }
  	});
}


function eliminarAnime(id_anime){
  Swal.fire({
    title: "<div class='text-white'>Seguro que quieres borrar este anime?</div>",
    imageUrl: "img/alerta/admiracion.png",
	  imageWidth: '40%',
    showConfirmButton: true,
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    buttonsStyling:false,
    customClass:{
      confirmButton:'btn btn-lg btn-blue mr-1',
	   	cancelButton:'btn btn-lg btn-purple ml-1',
    },
    background: 'rgb(0,0,0,0.7)',
    footer: "<div class='text-danger'>Una vez que lo elimines, No se podrá recuperar la información.</div>"
  }).then((result) => {
    if (result.value) {
      $.ajax({
        type: 'POST',
        data: 'anime='+id_anime,
        url: 'sql/anime/eliminarAnime.php',
        success: function(r){
          //console.log(r);
          if(!r){
            mostrarDatos();
            Swal.fire({
              title: "<div class='text-white'>Perfecto</div>",
              html: "<div class='text-white'>El anime ha sido eliminado permanentemente</div>",
              imageUrl: "img/alerta/succs.png",
              imageWidth: '40%',
              background: 'rgb(0,0,0,0.7)',
              buttonsStyling:false,
              customClass:{
                confirmButton:'btn btn-lg btn-blue',
              }      
            });
          }else{
            Swal.fire({
              title: "<div class='text-white'>Upps</div>",
              html: "<div class='text-white'>No logramos eliminar el anime</div>",
              imageUrl: "img/alerta/error.png",
              imageWidth: '40%',
              background: 'rgb(0,0,0,0.7)',
              buttonsStyling:false,
              customClass:{
                confirmButton:'btn btn-lg btn-blue',
              }      
            });
          }
        }
      });
    }
  });
}

function crearAnime(){

  //Validacion de campos vacios
  if($('#crear_titulo').val() == ""){
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>El titulo no puede quedar vacio</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });    
    return false;
  }else if($('#crear_genero').val() == ""){
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>El genero no puede quedar vacio</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if($('#descripcion').val() == ""){
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>La descripcion no puede quedar vacia</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if($('#crear_capitulo').val() == ""){
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>La cantidad de capitulos no puede quedar vacia</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else{
    
  }

  $.ajax({
    type: 'POST',
    data: $('#crear_anime').serialize(),
    url:'sql/anime/crearAnime.php',
    success: function(r){
      if(r==="2"){
        $('#crear_anime')[0].reset();
        mostrarDatos();
        Swal.fire({
          title: "<div class='text-white'>Perfecto</div>",
          html: "<div class='text-white'>Se agregó un nuevo anime a la lista!</div>",
          //icon: "success",
          imageUrl: "img/alerta/success.png",
          imageWidth: '40%',
          showConfirmButton: true,
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue mr-1'
          },
          background: 'rgb(0,0,0,0.7)'
        });
      }else{
        Swal.fire({
          title: 'Upps',
          imageUrl: "img/alerta/error.png",
          imageWidth: '40%',
          html: "<div class='text-white'>Error al intentar añadir un nuevo anime a la lista\n\n"+r+"</div>",
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue',
          }      
        });
      }
    }
  });
}


function precargarAnime(id_anime){
  $.ajax({
    type: 'POST',
    data:"anime=" + id_anime,
    url: 'sql/anime/precargarAnime.php',
    success: function(r){

      //convertimos r a un objeto json valido
      datos_precarga = jQuery.parseJSON(r);

      $('#actualiza_id').val(datos_precarga['id_anime']);
      $('#actualiza_tipo').val(datos_precarga['tipo']);
      $('#actualiza_titulo').val(datos_precarga['titulo']);
      $('#actualiza_genero').val(datos_precarga['genero']);
      $('#actualiza_descripcion').val(datos_precarga['descripcion']);
      $('#actualiza_fecha').val(datos_precarga['fecha_estreno']);
      $('#actualiza_estado').val(datos_precarga['estado']);
      $('#actualiza_capitulo').val(datos_precarga['capitulos']);
    }
  });
}

function precargarImgAnime(id_anime){
  $.ajax({
    type: 'POST',
    data:"anime=" + id_anime,
    url: 'sql/anime/precargarAnime.php',
    success: function(r){

      //convertimos r a un objeto json valido
      datos_precarga = jQuery.parseJSON(r);

      $('#actualiza_idIMG').val(datos_precarga['id_anime']);
      $('#actualiza_tituloIMG').val(datos_precarga['titulo']);
      $('#img_perfil').val(datos_precarga['img']); 
      $('#img_portada').val(datos_precarga['portada']);          
    }
  });
}


function actualizarAnime(){

  va= /[a-zA-Z]/;

  if($('#actualiza_titulo').val() == ""){
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>El titulo no puede quedar vacio</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if($('#actualiza_genero').val()==""){
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>El genero no puede quedar vacio</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if ($('#actualiza_descripcion').val()==""){
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>La descripcion no puede quedar vacia</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if($('#actualiza_capitulo').val() == ""){
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>La cantidad de capitulos no puede quedar vacia</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else{
      
  }

  $.ajax({
    type: 'POST',
    data: $('#actualizaAnime').serialize(),
    url:'sql/anime/actualizarAnime.php',
    success: function(r){
      if(r==2){
        mostrarDatos();
        Swal.fire({
          title: "<div class='text-white'>Perfecto</div>",
          html: "<div class='text-white'>Se actualizó la información del anime!</div>",
          //icon: "success",
          imageUrl: "img/alerta/success.png",
          imageWidth: '40%',
          imageAlt: 'Thoru',
          showConfirmButton: true,
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue mr-1'
          },
          background: 'rgb(0,0,0,0.7)'
        });
      }else{
        Swal.fire({
          title: 'Upps',
          imageUrl: "img/alerta/error.png",
          imageWidth: '40%',
          html: "<div class='text-white'>Error al intentar actualizar la información del anime\n\n"+r+"</div>",
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue',
          }      
        });
      }
    }
  });
}


function subir(){
  var Form = new FormData($('#filesForm')[0]);

  $.ajax({
    url: 'sql/cargaBanner.php',
    type: 'post',
    data: Form,
    processData: false,
    contentType: false,
    success: function(r){
      if(r==="2"){
        $('#filesForm')[0].reset();
        mostrarDatos();
            Swal.fire("Perfecto", "Se ha subido la imagen con exito!", "success");
          }else{
            $('#filesForm')[0].reset();
            mostrarDatos();
            Swal.fire("Upps", "Error al intentar subir archivo! \n"+r, "error");
        }
    }
  });   
}

function sigPagina(pagina){
  $.ajax({
    type: 'POST',
    data: 'pagina='+pagina,
    url:'sql/anime/mostrarDatos.php',
    success: function(r){
      if(r){
        $('#datos_tabla').html(r);        
      }
    }
  });
}