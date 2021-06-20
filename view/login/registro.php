<?php
	if (isset($_SESSION['user'])) {
		//header("location:home");
		echo '<script> window.location="home" </script>';
	}
?>
<div class="container py-4 text-white">
	<div class="row justify-content-around text-center rounded" style="background-color: rgb(0,0,0,0.6);">
		<div class="col-md-12 mt-4">
			<h1 class="text-uppercase">Registro de usuario</h1>
			<hr class="bg-primary">
		</div>
		<div class="col-md-5 align-self-center">
			<p class="anim">Se bienvenid@</p>
			<img src="img/Favico.png" width="250px" height="250px">
			<p class="anim">ANIME HIKARI 光</p>
		</div>
		<div class="col-md-6 align-self-center">
			<form id="frmRegistroUsuario" class="form-grup mb-3 ml-3 mr-3">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-user-alt"></i></span>
					</div>
					<input type="text" class="form-control input" name="usuario" id="usuario" required
						placeholder="Usuario">
				</div>

				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-lock"></i></span>
					</div>
					<input type="password" class="form-control input" name="password" id="password" required
						placeholder="Contraseña">
				</div>

				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span title="E-mail" class="input-group-text"><i class="fas fa-at"></i></span>
					</div>
					<input type="email" class="form-control input" name="email" id="email" required
						placeholder="Correo Electronico">
				</div>

				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span title="sexo" class="input-group-text">Sexo</span>
					</div>
					<select name="sexo" id="sexo" class="custom-select input">
						<option value="Indefinido"> Indefinido</option>
						<option value="Masculino"> Masculino</option>
						<option value="Femenino"> Femenino</option>
					</select>
				</div>

				<div class="py-1">
					<button class="btn btn-blue btn-block" type="button" id="btnRegistroUsuario">Registrar</button>
					<a href="login" class="btn btn-link btn-block">¿Ya tienes una cuenta? Inicia sesion</a>
				</div>
			</form>
		</div>
		<div class="col-md-12">
			<br>
		</div>
	</div>
</div>
<script src="<?=SERVIDOR?>controller/funciones_registro_usuario.js" type="module"></script>