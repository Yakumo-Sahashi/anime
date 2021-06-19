$(document).ready(()=> {

  function cerrarSesion(accion){
    opening();
    $.ajax({
      type: 'POST',
      data: 'funcion='+accion, 
      url:'model/login.php',
      success: (r)=>{
        if(r==="2"){
          setTimeout(()=>{
            //ending();
            window.location="login";
          },3000); 
        }
      }
    });
  }

  function opening(){
    $('#contenedor2').css("visibility",'visible');
    //carga.style.opacity = '0';
  }  
  
  function ending(){
    $('#contenedor2').css("visibility",'hidden');
    $('#contenedor2').css("opacity", '0');
  }  

  $('#btnCerrarSesion').click(()=> {
    cerrarSesion(3);
  });
});