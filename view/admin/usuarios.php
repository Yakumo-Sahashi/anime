<?php
	if (!$_SESSION['user']['rol']==1 || !$_SESSION['user']['rol']==2) {
		header("location:home");
	}		
?>
<div class="container py-4">
	<div class="row justify-content-around py-4 rounded" style="background-color: rgb(0,0,0,0.6);">
		<div class="col-md-12">
			<div class="card shadow">
				<div class="card-header lead text-white">
					<h2>Usuarios Registrados</h2>
				</div>
				<div class="card-body">
					<div class="row justify-content-around">
						<div class="order-md-2 col-md-5 mb-2">
							<div class="text-right">						
								<a href="panel" class="btn btn-blue">Volver al Panel</a>
								<button class="btn btn-purple" data-toggle="modal" data-target="#modal_insert"><i class="fas fa-plus"></i> Añadir</button>
							</div>
						</div>
						<div class="order-md-1 col-md-5 mb-2">
							<div class="input-group">
								<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-search"></i></span>
								</div>
								<input type="text" class="form-control input" name="buscadorUss" id="buscadorUss" placeholder="Buscar usuario">
							</div>
						</div>						
					</div>					
					<div class="tableFixHead">
						<div id="datos_usuario"></div>		
					</div>	
				</div>
				<div class="card-footer lead text-muted text-right">
					Anime Hikari By: Yakumo
				</div>
			</div>
		</div>
	</div>
</div>

<?php
    /* require_once "modal/usuario_modal_insert.php";
    require_once "modal/usuario_modal_update.php"; */
?>
<script src="controller/funciones_usuario.js"></script>
<script>
    $(document).ready(function(){
      mostrarDatos();
    });
</script>	
