function iniciarSesion(){

  //Validacion de campos vacios
  if($('#usuario').val() == ""){
    swal("Debes ingresar un nombre usuario!");
    return false;
  }else if($('#password').val() == ""){
    swal("Debes ingresar un password!");
    return false;
  }else{
    
  }

  $.ajax({
    type: 'POST',
    data: $('#login_inic').serialize(),
    url:'sql/crearAnime.php',
    success: function(r){
      if(r==="2"){
        swal("Perfecto", "Iniciando sesion", "success");
        window.open('home');
      }else{
        $('#login_inic')[0].reset();
        swal("Upps", "Usuario o contraseña incorrectos!", "error");
      }
    }
  });
}


function precargarAnime(id_anime){
  $.ajax({
    type: 'POST',
    data:"anime=" + id_anime,
    url: 'sql/precargarAnime.php',
    success: function(r){

      //convertimos r a un objeto json valido
      datos_precarga = jQuery.parseJSON(r);

      $('#actualiza_id').val(datos_precarga['id_anime']);
      $('#actualiza_tipo').val(datos_precarga['tipo']);
      $('#actualiza_titulo').val(datos_precarga['titulo']);
      $('#actualiza_genero').val(datos_precarga['genero']);
      $('#actualiza_descripcion').val(datos_precarga['descripcion']);
      $('#fecha').val(datos_precarga['fecha_estreno']);
      $('#actualiza_estado').val(datos_precarga['estado']);
      $('#actualiza_capitulo').val(datos_precarga['capitulos']);
    }
  });
}


function actualizarAnime(){

  va= /[a-zA-Z]/;

  if($('#actualiza_titulo').val() == ""){
    swal("El titulo no puede quedar vacio");
    return false;
  }else if($('#actualiza_genero').val()==""){
    swal("El genero no puede quedar vacio");
    return false;
  }else if ($('#actualiza_descripcion').val()==""){
    swal("La descripcion no puede quedar vacia");
    return false;
  }else if($('#actualiza_capitulo').val() == ""){
    swal("La descripcion no puede quedar vacia");
    return false;
  }else{
      
  }

  //alert($('#formulario_actualiza_estudiante').serialize());
  $.ajax({
    type: 'POST',
    data: $('#actualizaAnime').serialize(),
    url:'sql/actualizarAnime.php',
    success: function(r){
      //console.log(r);
      if(r==2){
        mostrarDatos();
        swal("Perfecto", "Se actualizó la información del anime!", "success");
      }else{
        swal("Upps", "Error al intentar actualizar la información del anime"+r, "error");
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
      if(r==="1"){
        $('#filesForm')[0].reset();
        mostrarDatos();
            swal("Perfecto", "Se ha subido la imagen con exito!", "success");
          }else{
            $('#filesForm')[0].reset();
            mostrarDatos();
            swal("Upps", "Error al intentar subir archivo! \n"+r, "error");
        }
    }
  });   
}