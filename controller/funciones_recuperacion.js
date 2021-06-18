function iniciarRecuperacion(){
        var expresionPass;
        expresionEmail = /\w+@\w+\.+[a-z]/;

        if ($('#email').val()=== "") {
          Swal.fire({
            html: "<div class='text-white'>No puedes dejar vacio el campo email!</div>",
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
          if (!expresionEmail.test($('#email').val())){
            Swal.fire({
              html: "<div class='text-white'>Estrucutura de correo electronico no valido!</div>",
              imageUrl: "img/alerta/admiracion.png",
              imageWidth: '40%',
              background: 'rgb(0,0,0,0.7)',
              buttonsStyling:false,
              customClass:{
                confirmButton:'btn btn-lg btn-blue'
              }      
            });
            return false;
          }else{

          }    
        }
      
        $.ajax({
          type: 'POST',
          data: $('#recup_cuenta').serialize(),
          url:'sql/sesion/recuperacion.php',
          success: function(r){
            if(r==="2"){
              Swal.fire({
                title: "<div class='text-white'>Usuario localizado!</div>",
                html:"<div class='text-white'>Se ha enviado un correo electronico con tus datos de recuperacion a la siguiente direccion\n\n</div>"+"<div class='text-white'>"+$('#email').val()+"</div>"+"\n <div class='text-white'>No olvides cambiar tu passoword al acceder a tu cuenta'</div>",
                imageUrl: "img/alerta/succs.png",
                imageWidth: '40%',
                background: 'rgb(0,0,0,0.7)',
                showConfirmButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey:false,
                timer: 10000,
                timerProgressBar: true,
                value: true
              }).then((value) => {
                window.location="sesion";
              });
            }else{
              $('#recup_cuenta')[0].reset();
              Swal.fire({
                title: "Upps",
                html: "<div class='text-white'>Ha ocurrido un error...\n</div>"+"<div class='text-white'>"+r+"</div>",
                icon:'error',
                imageUrl: "img/alerta/admiracion.png",
                imageWidth: '40%',
                background: 'rgb(0,0,0,0.7)',
                buttonsStyling:false,
                customClass:{
                  confirmButton:'btn btn-lg btn-blue'
                }      
              });
            }
          }
        });
    }      