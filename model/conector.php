<?php 
	$server = 'localhost';
	$ussername = 'root';
	$password = '';
	$database = 'anime';

	try {
		$conexion = new PDO("mysql:host=$server;dbname=$database;",$ussername,$password);
	} catch (PDOException $e) {
		die('Connected falied: '.$getMessage());		
	}

 ?>