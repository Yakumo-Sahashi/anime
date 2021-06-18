<?php 
	//print_r($_POST);
	$targ_w = 400;
	$targ_h = 400;
	$jpeg_quality = 100;
	$img=$_POST['usser'];
	$output_filename='../img/usuarios/'.$img.'/'.$img.'.jpg';

	$src = '../img/usuarios/'.$img.'/'.$img.'.jpg';
	$img_r = imagecreatefromjpeg($src);
	$dst_r = ImageCreateTrueColor($targ_w, $targ_h);

	imagecopyresampled($dst_r,$img_r,0,0,$_POST['x'],$_POST['y'],$targ_w,$targ_h,$_POST['w'],$_POST['h']);

	//header('Content-type: image/jpeg');
	imagejpeg($dst_r, $output_filename, $jpeg_quality);
?>