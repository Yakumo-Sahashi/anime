<?php 
	session_start();
	$weight = 400;
	$height = 400;
	$calidad = 100;
	$img=$_SESSION['user']['id'];
	$archivo ='../img/usuarios/'.$img.'/'.$img.'.jpg';
	
	recortarImg($archivo, $weight, $height, $calidad);
	
	function recortarImg($archivo, $weight, $height, $calidad){
	
		$img_r = imagecreatefromjpeg($archivo);
	
		if(!$img_r){
			convertir($archivo, $calidad);
			//recortarImg($archivo, $weight, $height, $calidad);
			$img_r = imagecreatefromjpeg($archivo);
		}

		$dst_r = ImageCreateTrueColor($weight, $height);

		imagecopyresampled($dst_r,$img_r,0,0,$_POST['x'],$_POST['y'],$weight,$height,$_POST['w'],$_POST['h']);

		//header('Content-type: image/jpeg');
		imagejpeg($dst_r, $archivo, $calidad);
	}

	function convertir($original, $calidad){
		$im = imagecreatefrompng($original);
		// Convertirla a un fichero jpeg con la calidad al 100%
		imagejpeg($im, $original, $calidad);
	}
?>