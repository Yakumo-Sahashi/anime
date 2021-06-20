import Loader from './funciones_loader.js';
const loader = new Loader();

$(document).ready(() => {

  function iniciarSesion() {

    if ($('#usuario').val() == "" && $('#password').val() == "") {
      alertaLg("Desbes llenar todos los campos!");
      return false;
    } else if ($('#usuario').val() == "") {
      alertaLg("Debes ingresar un nombre de usuario!");
      return false;
    } else if ($('#password').val() == "") {
      alertaLg("Debes ingresar un password!");
      return false;
    } else {
      loader.opening();
    }

    $.ajax({
      type: 'POST',
      data: $('#frmLogin').serialize(),
      url: 'model/login.php',
      success: (r) => {
        if (r === "2") {
          setTimeout(() => {
            //ending();
            window.location = "home";
          }, 2000);
        } else {
          //$('#login_inic')[0].reset();    
          loader.ending();
          alertaLg("Usuario o contraseña incorrectos! ");
          return false;
        }
      }
    });
  }

  function alertaLg(msj) {
    Swal.fire({
      html: "<div class='text-white'>" + msj + "</div>",
      imageUrl: "img/alerta/admiracion.png",
      imageWidth: '40%',
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-lg btn-blue',
      }

    });
  }

  /* function opening(){
      $('#contenedor2').css("visibility",'visible');
      //carga.style.opacity = '0';
    }  
    
    function ending(){
      $('#contenedor2').css("visibility",'hidden');
      $('#contenedor2').css("opacity", '0');
    }  
   */

  $('#btnSesion').click(() => {
    iniciarSesion();
  });

  $("#frmLogin").keypress((e) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      iniciarSesion();
    }
  });

});