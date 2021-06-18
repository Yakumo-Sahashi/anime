<?php
	if (isset($_SESSION['user'])) {
		//header("location:home");
		echo '<script> window.location="home" </script>';
	}
?>
<script src="<?=SERVIDOR;?>js/funciones_recuperacion.js"></script>
<div class="container py-5">
	<div class="row py-5 rounded justify-content-around">
		<div class="col-md-5 py-2 text-center" style="background-color: rgb(0,0,0,0.5);">
			<h1 class="mt-3 text-white">Recuperacion de cuenta</h1>
			<img src="img/Favico.png" width="250px" height="250px">
			<form id="recup_cuenta" class="form-grup mb-3 ml-3 mr-3">
				<h4 class="text-white">Ingresa tu direccion de correo electronico</h4>
				<div class="input-group py-2">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="fas fa-at"></i></span>
					</div>
					<input type="email" class="form-control input" name="email" id="email" required placeholder="E-mail">
				</div>
				<div class="py-2 text-center">
					<button type="button" class="btn btn-blue btn-block " id="recup" onclick="iniciarRecuperacion()">Recuperar cuenta</button>
					<a href="login" class="btn btn-link btn-block mb-2">Inicia sesion ó Registrate</a>							
				</div>
			</form>
		</div>
	</div>
</div>