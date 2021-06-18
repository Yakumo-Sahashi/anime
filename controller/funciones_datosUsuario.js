

/*function habilitarEdicion(){
    
    document.getElementById('usuario').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('edit').style.display = 'none';
    guardar=document.getElementById("btn-guardar");
    guardar.innerHTML=` <button type="button" class="btn btn-blue" id="act_Usuario" onclick="act_Usuario()"> Guardar cambios <i class="fas fa-pencil-alt"></i></button>`;
    cancelar=document.getElementById("btn-cancelar");
    cancelar.innerHTML=` <button type="button" class="btn btn-blue" id="cancelar" onclick="cancelar()"> Guardar cambios <i class="fas fa-pencil-alt"></i></button>`;

}

function cancelar(){
    document.getElementById('edit').style.display = 'true';
    guardar=document.getElementById("btn-guardar");
    guardar.innerHTML=``;
    cancelar=document.getElementById("btn-cancelar");
    cancelar.innerHTML=``;

}

*/
function act_Usuario(){

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
        url:'sql/usuario/actUsuario.php',
        success: function(r){
          if(r==="2"){
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

            }).then((value) => {
                window.location="uss";
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


function actPassword(){
  var password, expresionPass;

  expresionPass = /[a-zA-Z]+[0-9]|[0-9]+[a-zA-Z]/;

  if ($('#password').val()=== "" && $('#passwordUdt').val()=== "") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacio ningun campo!</div>",
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
      html: "<div class='text-white'>No puedes dejar vacio el campo contraseña actual!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else if ($('#passwordUdt').val()=== "") {
    Swal.fire({
      icon: 'error',
      html: "<div class='text-white'>No puedes dejar vacio el campo contraseña nueva!</div>",
      background: 'rgb(0,0,0,0.7)',
      buttonsStyling:false,
      customClass:{
        confirmButton:'btn btn-lg btn-blue',
      }      
    });
    return false;
  }else{
    if ($('#passwordUdt').val().length>30 || $('#passwordUdt').val().length<8) {
      Swal.fire({
        icon: 'error',
        html: "<div class='text-white'>La contraseña nueva debe tener entre 8 y 30 caracteres como maximo.</div>",
        background: 'rgb(0,0,0,0.7)',
        buttonsStyling:false,
        customClass:{
          confirmButton:'btn btn-lg btn-blue',
        }      
      });
      return false;
    }else {
      
      if (!expresionPass.test($('#passwordUdt').val())) {
        Swal.fire({
          icon: 'error',
          html: "<div class='text-white'>La contraseña nueva debe llevar almenos un numero.</div>",
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
    data: $('#actualizar_pass').serialize(),
    url:'sql/usuario/actualiza_pass.php',
    success: function(r){
      if(r==="2"){
        Swal.fire({
          title: "<div class='text-white'>Perfecto</div>",
          html:"<div class='text-white'>Se actualizo con exito la contraseña de usuario</div>",
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
        $('#actualizar_pass')[0].reset();
        Swal.fire({
          title: "<div class='text-white'>Upps</div>",
          html: "<div class='text-white'>Se ha producido un problema!\n"+r+"</div>",
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