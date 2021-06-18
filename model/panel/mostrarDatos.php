<?php require '../conector.php';
	if(!isset($_POST['pagina'])){
		$pagi=1;
	}else{
		$pagi=$_POST['pagina']; 
	}
	$inicio=($pagi-1)*5;
?>

<table class="table table-hover table-sm table-responsive-lg aling mt-3 text-white">
	<thead>
	   	<tr class="text-center">
	   		<th>ID</th>
	        <th>Titulo</th>
	        <th>Generos</th>
	        <th>Descripcion</th>
	        <th>Fecha Registro</th>
	        <th>Ver</th>
			<th>Imagen</th>
	        <th>Editar</th>
	        <th>Eliminar</th>
		</tr>
	</thead>
<?php 
	$total=$conexion->query('SELECT * from anime_db');
	$resulta=$total->rowCount();
?>
<?php foreach ($conexion->query("SELECT * from anime_db LIMIT $inicio,5") as $anime):?>
	<tr class="text-center">
		<td><?=$anime['id_anime']?></td>
		<td><?=$anime['titulo']?></td>
		<td><div class="text-sus"><?=$anime['genero']?></div></td>
		<td><div class="text-sus"><?=$anime['descripcion']?></div></td>
		<td><?=$anime['fecha_registro']?></td>
		<td>
			<form action="vista_anime" target="_blank" method="post">
				<input type="text" hidden name="id_ani" value="<?=$anime['id_anime']?>">
				<button class="btn btn-blue" type="submit" title="Ver"><i class="fas fa-eye"></i></button>
			</form>
		</td>
		<td>			
			<span class="btn btn-blue" data-toggle="modal" data-target="#modal_img" onclick="precargarImgAnime(<?=$anime['id_anime']?>)" title="Imagenes"><i class="fas fa-images"></i></span>
		</td>
		<td>
			<span class="btn btn-purple" data-toggle="modal" data-target="#modal_update" onclick="precargarAnime(<?=$anime['id_anime']?>)" title="editar"><i class="fas fa-edit"></i>
        	</span>
		</td>		
		<td>
			<span class="btn btn-red" title="Eliminar" type="button" onclick="eliminarAnime(<?=$anime['id_anime']?>)"><i class="fas fa-trash-alt"></i></span>
        </span>
		</td>
	</tr>							
<?php endforeach ?>	
</table>

<div class="col text-center">
	<?php $paginasTotal=round($resulta/5);?>	
	<div class="btn-group">	
		<?php for ($i=1; $i <=$paginasTotal+1 ; $i++) :?>
			<button class="btn btn-secondary" title="Pagina <?=$i;?>" type="button" onclick="sigPagina(<?=$i?>)"><?=$i;?></button>
		<?php endfor ?>
	</div>
</div>
