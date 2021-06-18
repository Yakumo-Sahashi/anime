<?php 
  require 'app/validarSesion.php';
  require 'app/config.php'; 
  require 'app/superior/aperturaDoc.php';
  
  if (isset($_SESSION['us_id'])) {
	}else {
		header("location:../index.php");
	}
?>
<div class="container py-4">
  <div class="row justify-content-end">
    <div class="col-md-4 align-self-center rounded" style="background: rgb(255,255,255,0.6);">
      <button class="btn btn-primary btn-block mt-2 mb-2" type="submit" onclick="enviar();">Finalizar</button>
    </div>
  </div>
	<div class="row rounded justify-content-around" style="background: rgb(255,255,255,0.6);">
		<div class="col-md-12 align-content-center align-self-center py-4">
			<img src="img/usuarios/<?= $user['id'] ?>/<?= $user['id']?>.jpg" id="target" />				
		</div>
	</div>
</div>

<?php 
  include_once 'app/inferior/cierreDoc.php';
?>
<script type="text/javascript">
	var x,y,w,h;
	function showCoords(c){
      // variables can be accessed here as
      // c.x, c.y, c.x2, c.y2, c.w, c.h
      //alert(c.x+' '+c.y+' '+c.w+' '+c.h);
      x=c.x;
      y=c.y;
      w=c.w;
      h=c.h;
  	};

    jQuery(function($) {
        $('#target').Jcrop({
            onSelect: showCoords,
            bgColor:'black',
            bgOpacity:.4,
            aspectRatio: 16 / 16
        });
    });

    function enviar(){
    	if (parseInt(w)) {
    		$.ajax({
	    		url:'usuario/cortar.php',
	    		type:'POST',
	    		data:'x='+x+'&y='+y+'&w='+w+'&h='+h+'&usser='+<?=$user['id'];?>,
	    		success:function(rpt){
            Swal.fire({
              title: "<div class='text-white'>La foto de perfil se ha recortado!</div>",
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
              window.location='uss'; 
            });	
	    		}
	    	});   
    	}else{
        Swal.fire({
          title: "<div class='text-white'>Upps</div>",
          html: "<div class='text-white'>Debes elegir un area de recorte!</div>",
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
</script>
