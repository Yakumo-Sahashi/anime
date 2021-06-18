<div class="container py-4 text-white">
    <div class="row justify-content-between mt-3 rounded" style="background-color: rgb(0,0,0,0.6);">
        <div class="col-md-3 mt-4">         
            <?php //include_once 'view/nav2.php';?>
        </div>
        <div class="col-md-9 mt-3 mb-5">
            <h1>Animes Recientes</h1>
            <hr class="bg-primary">
            <div class="row">
            <?php require_once 'model/conector.php';?>
            <?php foreach ($conexion->query("SELECT * from anime_db LIMIT 12") as $infAnime):?>
                <div class="col-md-3 py-2">  			
                    <div class="card acercamiento-img contenerdor-img  hidden"  style="border: 1px solid rgba(0, 72, 131, 0.8);">    
                        <a href="ver/<?=$infAnime['titulo']?>"><img loading="lazy" src="img/banner/<?=$infAnime['id_anime']?>/perfil.jpg" class="img img-fluid rounded" title="<?=$infAnime['titulo']?>"></a>
                        <div class="texto-emergente text-right">
                            <a href="#" class="" title="Reproducir"><i class="far fa-play-circle fa-2x text-primary"></i></a>
                        </div>                     
                    </div>                        
                </div>                  
            <?php endforeach?>              
            <?php $conexion = null;?>
            </div>
        </div>
    </div>
</div>
