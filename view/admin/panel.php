<?php	
	if ($_SESSION['user']['rol']==1 || $_SESSION['user']['rol']==2) {			
		require_once 'model/conector.php';
	}else{
		header("location:home");
	}	
?>
<div class="container py-4">
	<div class="row py-4 rounded" style="background-color: rgb(0,0,0,0.6);">
		<div class="col-md-12 text-center">
			<h1 class="mb-4 text-white text-uppercase">Panel de Administrador</h1>
			<hr class="bg-primary shadow">
		</div>
		<div class="col-md-3">
			<div class="rounded shadow py-1 " style="background-color: rgb(0,0,0,0.5);">
				<img class="w-100 " src="img/Favico.png">
				<hr class="bg-primary shadow">
				<b><p class="text-uppercase text-center text-white">Administracion Anime Hikari</p></b>
			</div>				
		</div>
		<div class="col-md-9 align-self-start">
			<div class="row">
				<div class="col-md-4">
					<div class="card text-white" style="background-color: rgb(0,0,0,0.4); border: 1px solid rgba(0, 72, 131, 0.5);">
						<a href="usuario" class="card-header text-center" style="background-color: rgb(0,0,0,0.7);">
							Usuarios
						</a>
						<a href="usuario" class="card-body">
							<?php $i=0; foreach ($conexion->query('SELECT * from usuario') as $anime){ $i++;}?>
							<div class="input-group">
								<i class="fas fa-user fa-5x mx-auto d-block" ></i>
								<p class="display-4 mx-auto d-block"><?=$i?></p>
							</div>	
						</a>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card text-white" style="background-color: rgb(0,0,0,0.4); border: 1px solid rgba(0, 72, 131, 0.5);">
						<a href="anime" class="card-header text-center" style="background-color: rgb(0,0,0,0.7);">
							Animes
						</a>
						<a href="anime" class="card-body">
							<?php $i=0; foreach ($conexion->query('SELECT * from anime_db') as $anime){ $i++;}?>
							<div class="input-group">
								<i class="fas fa-user-ninja fa-5x mx-auto d-block"></i>	
								<p class="display-4 mx-auto d-block"><?=$i?></p>
							</div>							
						</a>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card text-white" style="background-color: rgb(0,0,0,0.4); border: 1px solid rgba(0, 72, 131, 0.5);">
						<a href="#" class="card-header text-center" style="background-color: rgb(0,0,0,0.7);">
							Mangas
						</a>
						<div class="card-body">
							<div class="input-group">
								<i class="fas fa-book-open fa-5x mx-auto d-block"></i>	
								<p class="display-4 mx-auto d-block">0</p>							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php $conexion = null;?>