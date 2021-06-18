<?php
	if ($_SESSION['user']['rol']==1 || $_SESSION['user']['rol']==2) {
	}else{
		header("location:home");
	}		
?>
<div class="container py-4">
	<div class="row justify-content-around py-4 rounded" style="background-color: rgb(0,0,0,0.6);">
		<div class="col-md-12">
			<div class="card shadow">
				<div class="card-header lead text-white">
					<h3>Animes Registrados</h3>
				</div>
				<div class="card-body">
					<div class="text-right">
						<a href="panel" class="btn btn-blue">Volver al Panel</a>
						<button class="btn btn-purple" data-toggle="modal" data-target="#modal_insert"><i class="fas fa-plus"></i> Añadir</button>
					</div>
					<div class="tableFixHead">
						<div id="datos_tabla"></div>			
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
    /* require_once "modal/anime_modal_insert.php";
	require_once "modal/anime_modal_update.php";
	require_once "modal/anime_modal_img.php"; */
?>
<script src="controller/funciones_anime.js"></script>
<script>
    $(document).ready(function(){
      mostrarDatos();
	});
</script>	
