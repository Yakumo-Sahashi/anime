function iniciarSesion(){

  if($('#usuario').val() == "" && $('#password').val() == ""){
    Swal.fire({
      html: "<div class='text-white'>No puedes dejar vacios los dos campos!</div>",
      imageUrl: "img/alerta/admiracion.png",
      imageWidth: '40%',
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }
      
    });
    return false;
  }else if($('#usuario').val() == ""){
    Swal.fire({
      html: "<div class='text-white'>Debes ingresar un nombre de usuario!</div>",
      imageUrl: "img/alerta/admiracion.png",
      imageWidth: '40%',
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if($('#password').val() == ""){
    Swal.fire({
      html: "<div class='text-white'>Debes ingresar un password!</div>",
      imageUrl: "img/alerta/admiracion.png",
      imageWidth: '40%',
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
    data: $('#login_inic').serialize(),
    url:'model/login.php',
    success: function(r){
      if(r==="2"){
        Swal.fire({
          title: "<div class='text-white'>Iniciando sesion...</div>",
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
          //grow:'fullscreen'
        }).then((value) => {
            window.location="home";
          });
      }else{
        //$('#login_inic')[0].reset();      
        Swal.fire({
          title: "<div class='text-white'>Upps</div>",
          html: "<div class='text-white'>Usuario o contraseña incorrectos! "+r+"</div>",
          icon: "error",
          imageUrl: "img/alerta/admiracion.png",
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


function cerrarSesion(accion){
  $.ajax({
    type: 'POST',
    data: 'funcion='+accion, 
    url:'model/login.php',
    success: function(r){
      if(r==="2"){
        Swal.fire({
          title: "<div class='text-white'>Cerrando sesion...</div>",
          //text: "Una vez que lo elimines, No se podrá recuperar la información.",
          //html: "<div class='text-danger'>Una vez que lo elimines, No se podrá recuperar la información.</div>",
          //icon: "warning",
          imageUrl: "img/alerta/sharingan.gif",
          imageWidth: '40%',
          imageAlt: 'sharingan',
          background: 'rgb(0,0,0,0.7)',
          showConfirmButton: false,
          allowOutsideClick: false,
	        allowEscapeKey: false,
          allowEnterKey:false,
          timer: 3000,
          timerProgressBar: true,
          value: true
          //grow:'fullscreen',
        }).then((value) => {
            window.location="login";
        });
      }else{
        alert(r);
      }
    }
  });
}
