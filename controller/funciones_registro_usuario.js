import Loader from './funciones_loader.js';
const loader = new Loader();

$(document).ready(() => {
  const usuario = /^[a-zA-Z]+[0-9]*/;
  const expresionEmail = /\w+@\w+\.+[a-z]/;
  const expresionPass = /[a-zA-Z]+[0-9]|[0-9]+[a-zA-Z]/;

  
  function registroUsuario() {
    loader.opening();
    $.ajax({
      type: 'POST',
      data: $('#frmRegistroUsuario').serialize(),
      url: 'model/registro_usuario.php',
      success: function (r) {
        loader.ending();
        if (r === "2") {
          Swal.fire({
            title: "<div class='text-white'>Usuario registrado con exito!</div>",
            html: "<div class='text-white'>\n\n Redirigiendo... Por favor espere.</div>",
            background: 'rgb(0,0,0,0.7)',
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            timer: 3000,
            timerProgressBar: true,
            value: true
          }).then((value) => {
            window.location = "login";
          });
        } else {
          //$('#regis_usuario')[0].reset();
          alertaRg("Se ha producido un problema con el registro!\n\n" + r);
        }
      }
    });
  }

  function validarVacios(){
    if ($('#usuario').val() === "" && $('#password').val() === "" && $('#email').val() === "") {
      
      alertaRg("No puedes dejar vacios los campos!");
      return false;
    } else if ($('#usuario').val() === "") {
      
      alertaRg("No puedes dejar vacio el campo usuario!");
      return false;
    } else if ($('#password').val() === "") {
      
      alertaRg("No puedes dejar vacio el campo contraseña!");
      return false;
    } else if ($('#email').val() === "") {
      
      alertaRg("No puedes dejar vacio el campo email!");
      return false;
    } else {
      validarLongitud();
    }
  }

  function validarLongitud(){
    if ($('#usuario').val().length > 30 || $('#usuario').val().length < 4) {
      
      alertaRg("El nombre de usuario debe tener entre 4 y 30 letras como maximo.");
      return false;
    } else if ($('#password').val().length > 30 || $('#password').val().length < 8) {
      
      alertaRg("La contraseña debe tener entre 8 y 30 caracteres como maximo.");
      return false;
    } else {
      validarCaracteres();
    }
  }

  function validarCaracteres(){
    if (!expresionPass.test($('#password').val())) {
      
      alertaRg("La contraseña debe llevar almenos un numero.");
      return false;
    }else if (!usuario.test($('#usuario').val())) {

      alertaRg("El nombre de usuario solo puede llevar letras y numeros.");
      return false;
    }else if (!expresionEmail.test($('#email').val())) {
      
      alertaRg("Estrucutura de correo electronico no valido!");
      return false;
    }else{
      registroUsuario();
    }
  }

  function alertaRg(msj) {
    Swal.fire({
      icon: 'warning',
      html: "<div class='text-white'>"+msj+"</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-lg btn-blue',
      }
    });
  }
  

  $('#btnRegistroUsuario').click(() => {
    alert("funciono");
    validarVacios();
  });

  $("#frmRegistroUsuario").keypress((e) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      validarVacios();
    }
  });
  
});