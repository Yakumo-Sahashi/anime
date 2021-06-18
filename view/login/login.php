<?php
	if (isset($_SESSION['user'])) {
		//header("location:home");
		echo '<script> window.location="home" </script>';
	}
?>
<div class="container py-4 text-white">
	<div class="row justify-content-around text-center">
		<div class="col-md-5 py-2 rounded" style="background-color: rgb(0,0,0,0.6);">
			<h1 class="mt-3 text-uppercase">Login</h1>
			<hr class="bg-primary">
			<img class="mb-2" src="img/Favico.png" width="250px" height="250px">
			<form id="login_inic" class="form-grup mb-3 ml-3 mr-3">
				<input type="text" value="1" name="funcion" hidden>
				<div class="input-group mb-2">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-user-alt"></i></span>
					</div>
					<input type="text" class="form-control input" name="usuario" id="usuario" required  placeholder="Usuario">
				</div>
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-lock"></i></span>
					</div>
					<input type="password" class="form-control input" name="password" id="password" required  placeholder="Contraseña">
				</div>
				 
				<div class="py-1">
					<button type="button" class="btn btn-blue btn-block " id="log" onclick="iniciarSesion()">Iniciar Sesion</button>
					<a href="registro" class="btn btn-blue btn-block ">Registrarse</a>
					<a href="recuperar" class="btn btn-link btn-block">¿Olvidaste tu contraseña?</a>
				</div>
			</form>
		</div>
	</div>
</div><!-- 
<script src="controller/funciones_sesion.js"></script> -->