function mostrarDatos(){
	$.ajax({
	    url:'model/panel/mostrarDatosUsuario.php',
	    success: function(r){
        $('#datos_usuario').html(r);
	    }
  	});
}

function actualizarImagen(){

  var Form = new FormData($('#actuliza_imagen')[0]);

  $.ajax({

    url: 'sql/usuario/cargarImagen.php',
    type: 'post',
    data: Form,
    processData: false,
    contentType: false,
    success: function(r){
      if(r==="2"){
        $('#actuliza_imagen')[0].reset();
        Swal.fire({
          title: "<div class='text-white'>Perfecto</div>",
          html: "<div class='text-white'>\n\n Cargado la nueva imagen de perfil...\n</div>",
          imageUrl: "img/alerta/sharingan.gif",
          imageWidth: '40%',
          showConfirmButton: false,
          background: 'rgb(0,0,0,0.7)',
          timer: 3000,
          timerProgressBar: true  
        }).then((value) => {
          window.location="recorte.php";
        });
      }else{
        $('#actuliza_imagen')[0].reset();
        Swal.fire({
          title: "<div class='text-white'>Upps</div>",
          html: "<div class='text-white'>Error al intentar subir archivo! \n\n"+r+"</div>",
          imageUrl: "img/alerta/error.png",
          imageWidth: '40%',
          showConfirmButton: true,
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue'
          },
          background: 'rgb(0,0,0,0.7)'
        });
      }
    }
  }); 
}

function registroUsuario(){

  var usuario, password, expresionPass;
  expresionEmail = /\w+@\w+\.+[a-z]/;
  expresionPass = /[a-zA-Z]+[0-9]|[0-9]+[a-zA-Z]/;

  if ($('#usuario').val()=== "" && $('#password').val()==="" && $('#email').val()==="") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacios los campos!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if ($('#usuario').val() === "") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacio el campo usuario!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if ($('#password').val()=== "") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacio el campo contraseña!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if ($('#email').val()=== "") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacio el campo email!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else{

    if ($('#usuario').val().length>30 || $('#usuario').val().length<4) {
      Swal.fire({
        icon: 'error',
        html: "<div class='text-white'>El nombre de usuario debe tener entre 4 y 30 letras como maximo.</div>",
        background: 'rgb(0,0,0,0.7)',
        buttonsStyling:false,
        customClass:{
          confirmButton:'btn btn-lg btn-blue',
        }      
      });
      return false;
    }else if ($('#password').val().length>30 || $('#password').val().length<8) {
      Swal.fire({
        icon: 'error',
        html: "<div class='text-white'>La contraseña debe tener entre 8 y 30 caracteres como maximo.</div>",
        background: 'rgb(0,0,0,0.7)',
        buttonsStyling:false,
        customClass:{
          confirmButton:'btn btn-lg btn-blue',
        }      
      });
      return false;
    }else {
      
      if (!expresionPass.test($('#password').val())) {
        Swal.fire({
          icon: 'error',
          html: "<div class='text-white'>La contraseña debe llevar almenos un numero.</div>",
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue',
          }      
        });
        return false;
      }

      if (/^([a-z])*$/.test($('#usuario').val()) || /^([a-z]+[0-9]+)|([0-9]+[a-z]+)/i.test(usuario)) {
        
      }else{
        Swal.fire({
          icon: 'error',
          html: "<div class='text-white'>El nombre de usuario solo puede llevar letras y numeros.</div>",
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue',
          }      
        });
        return false;
      }

      if (!expresionEmail.test($('#email').val())){
        Swal.fire({
          icon: 'error',
          html: "<div class='text-white'>Estrucutura de correo electronico no valido!</div>",
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue',
          }      
        });
        return false;
      }

    }

  }

  $.ajax({
    type: 'POST',
    data: $('#regis_usuario').serialize(),
    url:'sql/usuario/registroUsuario.php',
    success: function(r){
      if(r==="2"){
        $('#regis_usuario')[0].reset();
        mostrarDatos();
        Swal.fire({
          title: "<div class='text-white'>Perfecto</div>",
          html:"<div class='text-white'>Se registro al nuevo usuario con exito!</div>",
          imageUrl: "img/alerta/succs.png",
          imageWidth: '40%',
          showConfirmButton: true,
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue'
          },
          background: 'rgb(0,0,0,0.7)'
        });
      }else{
        Swal.fire({
          title: "<div class='text-white'>Upps</div>",
          html: "<div class='text-white'>Se ha producido un problema con el registro!\n"+r+"</div>",
          imageUrl: "img/alerta/error.png",
          imageWidth: '40%',
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue mr-1',
          },
        });
      }
    }
  });
}

function precargarUsuario(id_usuario){
  $.ajax({
    type: 'POST',
    data:"usuario=" + id_usuario,
    url: 'sql/usuario/precargarUsuario.php',
    success: function(r){

      //convertimos r a un objeto json valido
      datos_precarga = jQuery.parseJSON(r);

      $('#actualiza_id').val(datos_precarga['id']);
      $('#actualiza_usuario').val(datos_precarga['usuario']);
      $('#actualiza_email').val(datos_precarga['email']);
      $('#actualiza_rol').val(datos_precarga['rol']);
      $('#actualiza_sexo').val(datos_precarga['sexo']);
    }
  });
}

function actualizarUsuario(){

  var usuario, password, expresionPass;
  expresionEmail = /\w+@\w+\.+[a-z]/;
  expresionPass = /[a-zA-Z]+[0-9]|[0-9]+[a-zA-Z]/;

  if ($('#actualiza_usuario').val()=== "" && $('#actualiza_email').val()==="") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacios los campos!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if ($('#actualiza_usuario').val() === "") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacio el campo usuario!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if ($('#actualiza_email').val()=== "") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacio el campo email!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else{

    if ($('#actualiza_usuario').val().length>30 || $('#actualiza_usuario').val().length<4) {
      Swal.fire({
        icon: 'error',
        html: "<div class='text-white'>El nombre de usuario debe tener entre 4 y 30 letras como maximo.</div>",
        background: 'rgb(0,0,0,0.7)',
        buttonsStyling:false,
        customClass:{
          confirmButton:'btn btn-lg btn-blue',
        }      
      });
      return false;
    }else {
      
      if (/^([a-z])*$/.test($('#actualiza_usuario').val()) || /^([a-z]+[0-9]+)|([0-9]+[a-z]+)/i.test(usuario)) {
        
      }else{
        Swal.fire({
          icon: 'error',
          html: "<div class='text-white'>El nombre de usuario solo puede llevar letras y numeros.</div>",
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue',
          }      
        });
        return false;
      }

      if (!expresionEmail.test($('#actualiza_email').val())){
        Swal.fire({
          icon: 'error',
          html: "<div class='text-white'>Estrucutura de correo electronico no valido!</div>",
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue',
          }      
        });
        return false;
      }

    }

  }

  $.ajax({
    type: 'POST',
    data: $('#actualizar_usuario').serialize(),
    url:'sql/usuario/actualizarUsuario.php',
    success: function(r){
      if(r==="2"){
        $('#regis_usuario')[0].reset();
        document.getElementById("buscadorUss").value = "";
        mostrarDatos();
        Swal.fire({
          title: "<div class='text-white'>Perfecto</div>",
          html:"<div class='text-white'>Se actualizaron los datos del usuario con exito!</div>",
          imageUrl: "img/alerta/succs.png",
          imageWidth: '40%',
          showConfirmButton: true,
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue'
          },
          background: 'rgb(0,0,0,0.7)'
        });
      }else{
        Swal.fire({
          title: "<div class='text-white'>Upps</div>",
          html: "<div class='text-white'>Se ha producido un problema al actualizar los datos del usuario!\n"+r+"</div>",
          imageUrl: "img/alerta/error.png",
          imageWidth: '40%',
          background: 'rgb(0,0,0,0.7)',
          buttonsStyling:false,
          customClass:{
            confirmButton:'btn btn-lg btn-blue mr-1',
          },
        });
      }
    }
  });
}

function eliminarUsuario(id_usuario){
  Swal.fire({
    title: "<div class='text-white'>Seguro que quieres borrar a este usuario?</div>",
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
        data: 'usuario='+id_usuario,
        url: 'sql/usuario/eliminarUsuario.php',
        success: function(r){
          if(!r){
            document.getElementById("buscadorUss").value = "";
            mostrarDatos();
            Swal.fire({
              title: "<div class='text-white'>Perfecto</div>",
              html: "<div class='text-white'>El usuario ha sido eliminado permanentemente</div>",
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
              html: "<div class='text-white'>No logramos eliminar al usuario</div>",
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