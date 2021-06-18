<?php 
	require_once 'model/conector.php';
	$ani = explode("/", $_GET['view']);
	$sql = $conexion->prepare('SELECT * FROM anime_db WHERE titulo = :titulo');
	$sql->bindParam(':titulo',$ani[1]);
	$sql->execute();
	$anime = $sql->fetch(PDO::FETCH_ASSOC);
	$conexion = null;
	if(!$anime){
		echo '<script> window.location = "'.SERVIDOR.'error"; </script>';
	}
?>
<div class="container mt-1 mb-4">
	<div class="row" style="background: rgb(0,0,0,0.5);">
		<div class="col-md-12 mt-2">
			<div class="fondo" style="background: url('<?=SERVIDOR?>img/banner/<?=$anime['id_anime']?>/portada.jpg'); height: 45vh; background-position: center;
			background-size: cover;">
				<div class="container-fluid fon2">
					<div class="container d-flex flex-column justify-content-center h-100 text-white text-center">
						<div class="row align">
							<div class="col-md-2"></div>
							<div class="col-md-8 ">
								<h1><?=$anime['titulo'] ?></h1>
							</div>
							<div class="col-md-2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row rounded py-5 text-white" style="background-color: rgb(0,0,0,0.5);">
		<div class="col-md-4">
			<div class="rounded shadow py-2" style="background-color: rgb(0,0,0,0.5);">
				<?php if ($anime['img']=='no asignado'): ?>
					<img class="img img-fluid rounded mx-auto d-block" src="img/banner/perfil.jpg">
				<?php else: ?>
					<img class="img img-fluid rounded mx-auto d-block" src="<?=SERVIDOR?>img/banner/<?=$anime['id_anime']?>/perfil.jpg">
				<?php endif ?>			
				<hr class="bg-primary shadow">
				<b><p class="h4 text-center text-white"><?= $anime['titulo'] ?></p></b>
			</div>
			<?php if($anime['estado']=='En emision'):?>	
			<button class="btn btn-block btn-blue py-3 mt-2">
				<i class="far fa-play-circle"></i> <b><?= $anime['estado'] ?></b>
			</button>	
			<?php elseif($anime['estado']=='Finalizado'):?>
			<button class="btn btn-block btn-red py-3 mt-2">
				<i class="far fa-stop-circle fa-1x"></i> <b><?= $anime['estado'] ?></b>
			</button>	
			<?php else:?>
			<button class="btn btn-block btn-purple py-3 mt-2">
				<i class="far fa-pause-circle"></i> <b><?= $anime['estado'] ?></b>
			</button>	
			<?php endif?>	
		</div>
		<div class="col-md-8 ">
			<div class="card shadow py-2" style="background-color: rgb(0,0,0,0.6);">
				<div class="card-header">
					<div class="h5">
						Generos:
					<?php 
						$genero=explode(",",$anime['genero']);
						foreach ($genero as $key): ?>
						<a href="#" class="badge badge-pill badge-primary"> <?=$key?></a>
					<?php endforeach ?>
					</div>
				</div>
				<div class="card-body">
					<h3>Sinopsis</h3>
					<hr class="bg-primary">
					<p class="lead text-justify">
						<?=$anime['descripcion']?>
					</p>					
				</div>
				<div class="card-footer text-right">
					<b>Fecha de emision: </b><?=$anime['fecha_estreno'];?>
				</div>
			</div>
			<hr class="bg-primary">
			<div class="card shadow py-2" style="background-color: rgb(0,0,0,0.6);">
				<div class="card-header">
					<div class="h5">
						Lista de capitulos
						<button class="btn btn-secondary">
							Cantidad: <span class="badge badge-light"><?=$anime['capitulos']?></span>	
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="" style="overflow:auto; height:550px;">
					<?php for ($i=1; $i <=$anime['capitulos']; $i++) :?>
						<div class="card text-white" style="background-color: rgb(0,0,0,0.4); border: 1px solid rgba(0, 72, 131, 0.5);">
							<a href="add_anime" class="card-body">
								<div class="row">
									<div class="col-md-4 align-self-center">
										<img src="<?=SERVIDOR?>img/banner/<?=$anime['id_anime']?>/prev.jpg" class="img img-fluid rounded mx-auto d-block">									
									</div>
									<div class="col-md-5 text-left align-self-center">
										<p class=""><b><?=$anime['titulo']?></b><br>Episodio <?=$i?></p>							
									</div>
									<div class="col-md-3 align-self-center">				
										<i class="fas fa-eye-slash fa-1x" title="NO VISTO"></i>
									</div>
								</div>
							</a>
						</div>							
					<?php endfor ?>
					</div>				
				</div>
			</div>
		</div>
	</div>
</div>