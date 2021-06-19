<?php
	require 'conector.php';
	session_start();
	$id_ruta = $_SESSION['user']['id'];

	if($_FILES["archivo"]["name"]){

		$limite_kb =2000;

		if($_FILES["archivo"]["size"] <= 2000*1024){
				
			$ruta = '../img/usuarios/'.$id_ruta.'/';
			$archivo = $ruta.$_FILES["archivo"]["name"];

			$validarTipo= strtolower(pathinfo($archivo, PATHINFO_EXTENSION));

			if ($validarTipo=='jpg' || $validarTipo=='png' || $validarTipo=='jpeg') {
				$archivo = $ruta.$id_ruta.'.jpg';
				if(!file_exists($ruta)){
					mkdir($ruta);
				}				

				$resultado = @move_uploaded_file($_FILES["archivo"]["tmp_name"], $archivo);

				if ($resultado) {
					$sql = "UPDATE usuario SET avatar='asignado' WHERE id ='$id_ruta'";
					$stmt = $conexion->prepare($sql);
					
					if ($stmt->execute()){
						echo "2";
					}else{
						echo "No se ha cargado la nueva imagen de perfil";
					}	
				}

			}else{
				echo "El formato de imagen no es valido. Solo es permitido JPG y PNG";
			}
			
		}else{
			echo "La imagen subida es demasiado pesada el peso maximo es de 2MB!";
		}	
	}else {
		echo "Debes subir un archivo";
	}	
?>