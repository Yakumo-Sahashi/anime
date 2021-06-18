<?php 
	require 'conector.php';

	$usuario = $_POST['usuario'];
	$password = $_POST['password'];
	$email=$_POST['email'];
	$sexo=$_POST['sexo'];
	if(isset($_POST['rol'])){
		$rol=$_POST['rol'];
	}else{
		$rol=3;
	}
    		
	$revisarUss = $conexion->prepare('SELECT * FROM usuario WHERE usuario = :usuario OR email= :email');
	$revisarUss->bindParam(':usuario',$usuario);
	$revisarUss->bindParam(':email',$email);
	$revisarUss->execute();
	$resultado = $revisarUss->fetch(PDO::FETCH_ASSOC);
	if (!$resultado) {
		$sql = "INSERT INTO usuario (usuario, password, email, sexo, rol) VALUES (:usuario, :password, :email, :sexo, :rol)";
		$stmt = $conexion->prepare($sql);
		$stmt->bindParam(':usuario',$usuario);
		$pass = password_hash($password, PASSWORD_BCRYPT);
		$stmt->bindParam(':password',$pass);
		$stmt->bindParam(':email', $email);
		$stmt->bindParam(':sexo',$sexo);
		$stmt->bindParam(':rol',$rol);

		if ($stmt->execute()) {
			echo '2';	
		} else {
			echo '1';	
		}
		
	}else {
		if ($resultado['usuario']== $usuario) {
			echo 'El nombre de usuario ya esta registrado!';	
		}else if($resultado['email']==$email){
			echo 'El email ya esta registrado!';	
		}			
	}	
?>