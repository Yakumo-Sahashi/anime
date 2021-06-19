<nav class="navbar navbar-expand-lg navbar-light  scrorev-nav-control menu" style="background-color: rgb(0,0,0,0.8)" ;>
  <div class="container-fluid text-center">

    <a class="navbar-brand" href="<?=SERVIDOR?>home"><img loading="lazy" src="<?=SERVIDOR?>img/Favico.png" width="30px"
        height="30px"> <img loading="lazy" src="<?=SERVIDOR?>img/logo.png" alt="" width="35%"></a>

    <!-- Boton de hamburgesa al cambiar el tamaño de pantalla -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars text-white"></i>
    </button>

    <!-- Opciones de barra de navegacion -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="btn btn-dark" href="<?=SERVIDOR?>home">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-dark" href="<?=SERVIDOR?>lista">Lista Animes</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-dark" href="<?=SERVIDOR?>ajusteImagen">Recortar img</a>
        </li>
        <li class="nav-item">

        </li>
        <li class="nav-item dropdown mx-auto d-block">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
            <input type="text" class="form-control input dropdown-toggle" name="buscador" id="buscador"
              placeholder="Buscar" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
          </div>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="bus-drown"
            style="background-color: rgb(0,0,0,0.4)">
            <div id="resultado_busqueda"></div>
          </div>
        </li>
      </ul>

      <ul class="navbar-nav mx-auto">
        <?php if (!empty($_SESSION['user']['usuario'])):?>
        <li class="nav-item dropdown">
          <a class="btn btn-dark dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <?php if ($_SESSION['user']['avatar']=='no asignado' && $_SESSION['user']['sexo']=='Masculino'): ?>
            <img loading="lazy" class="rounded-circle mr-1" width="25px" height="25px" src="img/usuarios/kirito.jpg"><?=$_SESSION['user']['usuario'] ?></a>
            <?php elseif ($_SESSION['user']['avatar']=='no asignado' && $_SESSION['user']['sexo']=='Femenino'): ?>
            <img loading="lazy" class="rounded-circle mr-1" width="25px" height="25px" src="img/usuarios/waifu.jpg"><?=$_SESSION['user']['usuario'] ?></a>
            <?php else: ?>
            <img loading="lazy" class="rounded-circle mr-1" width="25px" height="25px" src="img/usuarios/<?=$_SESSION['user']['id'] ?>/<?=$_SESSION['user']['id']?>.jpg"> <?=$_SESSION['user']['usuario'] ?></a>
            <?php endif ?>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown1" style="background-color: rgb(0,0,0,0.4)">
            <?php if ($_SESSION['user']['rol']==1 || $_SESSION['user']['rol']==2):?>
            <a href="<?=SERVIDOR?>cuenta" class="dropdown-item btn"><i class="fas fa-user-ninja mr-1"></i> Mi Cuenta</a>
            <a href="<?=SERVIDOR?>panel" class="dropdown-item btn"><i class="fas fa-user-cog"></i> Panel de Admin</a>
            <?php else: ?>
            <a href="cuenta" class="dropdown-item btn"><i class="fas fa-user-ninja mr-1"></i> Mi Cuenta</a>
            <?php endif; ?>
            <hr>
            <button type="button" class="dropdown-item btn btn-red text-white" id="btnCerrarSesion"><i class="fas fa-power-off mr-2"></i>Cerrar Sesion</button>
          </div>
      <?php else: ?>
        <li class="nav-item">
          <a class="btn btn-dark" href="<?=SERVIDOR?>login"><i class="fas fa-user-ninja mr-1"></i> Iniciar Sesion</a>
      <?php endif; ?>
        </li>
      </ul>
    </div>
  </div>
</nav>