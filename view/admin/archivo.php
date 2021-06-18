<?php 
	if(isset($_POST['anime'])){
		$ani=$_POST['anime']; 
	}else{
		$ani='';
	}
?>
<div class="container py-4">
	<div class="row rounded justify-content-around py-4" style="background: rgb(0,0,0,0.5);">
		<div class="col-md-6">
			<form action="cargaArchivos" method="post" enctype="multipart/form-data"> 
				<!--enctype="multipart/form-data" entiende que se trabajara con carga de archivos-->
				<input type="hidden" name="id_anime" value="<?=$ani;?>">				
				<label for="imagen"><h4 class="text-white">Archivos...</h4></label>	
				<div class="input-group mb-3">
					<input <?php if($ani==''){ echo "disabled";}?> type="file" class="form-control" id="archivo[]" name="archivo[]" multiple="">
					<!--los corchetes indican que se cargaran multiples archivos-->
					<button <?php if($ani==''){ echo "disabled";}?> class="btn btn-primary" name="subir" type="submit" value="send">Subir</button>
				</div>	
			</form>
		</div>
		<div class="col-md-6 mt-2">
			<form action="cargaArchivo" method="post" enctype="multipart/form-data"> 
				<label for="anime" class="text-white h4">Anime</label>	
				<div class="input-group mb-3">
					<select name="anime" class="custom-select">
					<?php foreach ($conexion->query('SELECT * from anime_db ORDER BY titulo ASC') as $anime): ?>
						<option <?php if(isset($ani)){ if($ani==$anime['id_anime']){echo "Selected";} }?> value="<?=$anime['id_anime']; ?>"><?= $anime['titulo']; ?></option>
		            <?php endforeach ?>
		            </select>
		            <button class="btn btn-primary" name="ver" type="submit">Ver Archivos</button>
		        </div>
	        </form>
		</div>
	</div>

	<div class="row py-3 mt-3 text-white rounded" style="background: rgb(0,0,0,0.5);">
        <div class="col-md-12">
            <h4>Archivos Descargables</h4>
        </div>
    <?php 
        $path = "files/".$ani;//."/".$resul['titulo'];
    	if(file_exists($path)){//revisa si el archivo existe
            $directorio = opendir($path);//abre el directorio
            while ($archivo = readdir($directorio)){ //Devuelve el nombre de la entrada al directorio
                if (!is_dir($archivo)){//Indica si el nombre del archivo es un directorio
                    $validarTipo= strtolower(pathinfo($archivo, PATHINFO_EXTENSION));//validamos el tipo de archivo
                    //if ($validarTipo=='docx' || $validarTipo=='xlsx' || $validarTipo=='pptx' || $validarTipo=='pdf' || $validarTipo=='rar' ) {
                    if ($validarTipo=='jpg' || $validarTipo=='png') {
                            ?>
                        <div class="col-md-2 text-center">

                        	<div class="text-img">
                            	<p><?=$archivo;?></p>
                            </div>

                        	<a href="<?=$path?>/<?=$archivo?>">
                                <img class="img-fluid" src="<?=$path?>/<?=$archivo?>" title="<?=$archivo?>">
                            </a>

                        	<div class="text-right" data="<?=$path;?>/<?=$archivo?>">
                            <!--<?=$archivo;?>-->
                                <form action="eliminarArchivo" method="post">
                                	<input type="hidden" name="archi" value="<?= $path;?>/<?= $archivo; ?>">
                                	<div class="input-group">
	                                    <button class="btn btn-dark" type="submit" onclick="return confirmarEliminar()" title="Eliminar Archivo"><i class="fas fa-trash-alt"></i></button>
	                                    <a href="<?= $path;?>/<?= $archivo; ?>" class="btn btn-dark" title="Descargar" download ><i class="fas fa-arrow-alt-circle-down"></i></a>
	                                </div>
                                </form>
                            </div>
                        </div>    
    <?php                                                
                    }
                }
            }
        }                                    
    ?>
    </div>   
</div>

<script type="text/javascript">
   	function confirmarEliminar(){
       	var respuesta = confirm("¿Estas segur@ que quieres eliminar el archivo?");
       	if (respuesta == true) {
            return true;
       	}else {
            return false;
       	}
   	}
</script>