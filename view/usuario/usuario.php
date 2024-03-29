<?php
	if (isset($_SESSION['user'])) {
	}else {
		header("location:home");
	}
?>
<div class="container py-4">
	<div class="row rounded py-5 text-white" style="background-color: rgb(0,0,0,0.5);">
		<div class="col-md-12 text-center text-uppercase">
			<h1 class="mb-4">Bienvenid@ <?= $_SESSION['user']['usuario'] ?></h1>
			<hr class="bg-primary shadow">
		</div>
		<div class="col-md-4 text-right">
			<div class="rounded shadow py-2" style="background-color: rgb(0,0,0,0.5);">
				<button class="btn btn-dark mr-2" data-toggle="modal" data-target="#modal_img" title="Editar"><i class="far fa-edit"></i></button>
				<?php if ($_SESSION['user']['avatar']=='no asignado' && $_SESSION['user']['sexo']=='Masculino'): ?>
					<img loading="lazy" class="img img-fluid rounded" src="img/usuarios/kirito.jpg">
				<?php elseif ($_SESSION['user']['avatar']=='no asignado' && $_SESSION['user']['sexo']=='Femenino'): ?>
					<img loading="lazy" class="img img-fluid rounded" src="img/usuarios/waifu.jpg">	
				<?php else: ?>
					<img loading="lazy" class="img img-fluid rounded-circle" src="img/usuarios/<?=$_SESSION['user']['id'] ?>/<?=$_SESSION['user']['id']?>.jpg">				
				<?php endif ?>
				<hr class="bg-primary shadow">
				<b><p class="h4 text-center text-white"><?=$_SESSION['user']['usuario'] ?></p></b>
			</div>
		</div>
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">
					<p class="h2 text-uppercase">Datos de usuario</p>
				</div>
				<div class="card-body">
					<form id="actualizaUsuarioDT">
						<label>Nombre de usuario</label>
						<div class="input-group mb-1">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user-ninja"></i></span>
							</div>
							<input type="text" disabled class="form-control input" name="usuario" id="usuario" placeholder="Usuario" value="<?=$_SESSION['user']['usuario'] ?>">
						</div>
						<label>Correo Electronico</label>
						<div class="input-group mb-1">
							<div class="input-group-prepend">
								<span title="E-mail" class="input-group-text"><i class="fas fa-at"></i></span>
							</div>
							<input type="email" disabled class="form-control input" name="email" id="email" placeholder="Correo Electronico" value="<?=$_SESSION['user']['email'] ?>">
						</div>
						
						<label>Sexo</label>
						<div class="input-group mb-1">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user-alt"></i></span>
							</div>
							<input type="text" disabled class="form-control input" name="sexo" id="sexo" placeholder="Usuario" value="<?=$_SESSION['user']['sexo'];?>">
						</div>
					</form>
				</div>
				<div class="card-footer text-right">
				<button class="btn btn-purple" data-toggle="modal" data-target="#modal_pass" title="editar">Cambiar contraseña <i class="fas fa-pencil-alt"></i></button>
					<button class="btn btn-blue" data-toggle="modal" data-target="#modal_update" onclick="precargarUsuario(<?=$_SESSION['user']['id']?>)" title="editar">Editar datos <i class="fas fa-pencil-alt"></i></button>
				</div>
			</div>
		</div>
	</div>
</div>
<?php
	require_once "modal/usuario/imagen_usuario.php";
	require_once "modal/usuario/usuario_cuenta_update.php";
	require_once "modal/usuario/actualiza_pass.php";
?>