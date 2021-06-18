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
    url:'model/registro_usuario.php',
    success: function(r){
      if(r==="2"){
        Swal.fire({
          title: "<div class='text-white'>Usuario registrado con exito!</div>",
          html:"<div class='text-white'>\n\n Redirigiendo... Por favor espere.</div>",
          imageUrl: "img/alerta/sharingan.gif",
          imageWidth: '40%',
          background: 'rgb(0,0,0,0.7)',
          showConfirmButton: false,
          allowOutsideClick: false,
	        allowEscapeKey: false,
          allowEnterKey:false,
          timer: 3000,
          timerProgressBar: true,
          value: true
        }).then((value) => {
          window.location="login";
        });
      }else{
        $('#regis_usuario')[0].reset();
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