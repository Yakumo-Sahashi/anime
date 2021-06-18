<?php 
	session_start(); 
	require '../conector.php'; 
	$usuario="";

	if(isset($_POST['usuario'])){
		$usuario=$_POST['usuario'];
	}

	if($usuario=='undefined'){
		$usuario="";
	}
?>

<table class="table table-hover table-sm table-responsive-lg aling mt-3 text-white">
	<thead>
	   	<tr class="text-center">
	   		<th>ID</th>
	        <th>Usuario</th>
	        <th>Email</th>
	        <th>Sexo</th>
	        <th>Estado</th>
	        <th>Editar</th>
	        <th>Eliminar</th>
		</tr>
	</thead>
<?php foreach ($conexion->query("SELECT * from usuario where usuario LIKE '%".$usuario."%'") as $us):?>
	<tr class="text-center">
		<td><?=$us['id']?></td>
		<td><?=$us['usuario']?></td>
		<td><?=$us['email']?></td>
		<td><?=$us['sexo']?></td>
	<?php if ($us['estado']=='conectado') : ?>
	<td class="text-success"><?=$us['estado']?></td>
	<?php else: ?>
	<td class="text-danger"><?=$us['estado']?></td>
	<?php endif ?>
	<?php if($us['id']!=1 ):?>
		
		<td>
		<?php if($us['id'] != $_SESSION['user']['id']):?>
			<span class="btn btn-blue" data-toggle="modal" data-target="#modal_update" onclick="precargarUsuario(<?=$us['id']?>)" title="editar"><i class="fas fa-edit"></i>
        	</span>
			<?php endif ?>
		</td>
		<td>
		<?php if($us['id'] != $_SESSION['user']['id']):?>
			<span class="btn btn-red" title="Eliminar" type="button" onclick="eliminarUsuario(<?=$us['id']?>)"><i class="fas fa-trash-alt"></i></span>
        </span>
		<?php endif ?>
		</td>		
	<?php endif ?>
	</tr>							
<?php endforeach ?>	
</table>

