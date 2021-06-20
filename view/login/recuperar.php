<?php
	if (isset($_SESSION['user'])) {
		//header("location:home");
		echo '<script> window.location="home" </script>';
	}
?>
<div class="container py-2 mt-4">
	<div class="row justify-content-around">
		<div class="col-md-5 rounded" style="background-color: rgb(0,0,0,0.5);">
			<h1 class="mt-3 text-center text-white">Recuperacion de cuenta</h1>
			<hr class="bg-primary">
			<img class="mx-auto d-block" src="img/Favico.png" width="250px" height="250px">
			<form id="recup_cuenta" class="form-grup mb-3 ml-3 mr-3">
				<h4 class="text-white">Ingresa tu direccion email</h4>
				<div class="input-group input-group-lg py-2">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-at"></i></span>
					</div>
					<input type="email" class="form-control input" name="email" id="email" required placeholder="E-mail">
				</div>
				<div class="py-2 text-center">
					<button type="button" class="btn btn-blue btn-block btn-lg" id="recup" onclick="iniciarRecuperacion()">Recuperar cuenta</button>
					<a href="login" class="btn btn-link btn-block mb-2">Inicia sesion ó Registrate</a>							
				</div>
			</form>
		</div>
	</div>
</div>
<script src="<?=SERVIDOR;?>controller/funciones_recuperacion.js" type="module"></script>