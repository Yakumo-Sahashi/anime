<?php
	if (!isset($_SESSION['user'])) {
		echo '<script> window.location = "login";</script>';
	}
?>
<div class="container-fluid py-4">
    <div class="row justify-content-center">
        <div class="col">
            <img loading="lazy" src="img/usuarios/<?=$_SESSION['user']['id']?>/<?=$_SESSION['user']['id']?>.jpg" id="target" />				
        </div>
    </div>
</div>
<script src="<?=SERVIDOR?>/controller/funciones_recorte_imagen.js" type="module"></script>