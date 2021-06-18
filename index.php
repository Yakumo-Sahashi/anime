<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require_once $SERVIDOR.'app/config.php'?>
    <?php require_once 'app/dependencias.php';?>
    <title>Anime Hikari</title>
</head>
<body>
    <?php 
        require_once 'view/cargar.php';
        require_once 'view/header.php';
        require_once 'view/nav.php';
        $direccion = array(
            'home' => 'view/home',
            'login' => 'view/login/login',
            'registro' => 'view/login/registro',
            'recuperar' => 'view/login/recuperar',
            'panel' => 'view/admin/panel',
            'usuario' => 'view/admin/usuarios',
            'anime' => 'view/admin/anime',
            'cuenta' => 'view/usuario/usuario',
            'lista' => 'view/anime/lista_anime',
            'ver' => 'view/anime/anime',
            );
            
        if(isset($_GET['view'])){
            $view = explode("/", $_GET['view']);
            $url = array_key_exists($view[0], $direccion) ? $direccion[$view[0]] : 'view/404';
            require_once ''.$url.'.php';
        }else{
            require_once 'view/home.php';
        }

        require_once 'view/footer.php';
    ?>
</body>
</html>