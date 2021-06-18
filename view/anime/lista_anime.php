<div class="container mt-1 mb-4">
	<div class="row text-white" style="background: rgb(0,0,0,0.5);">
		<div class="col-md-12 mt-2">
            <h1 class="">Lista de animes</h1>
            <hr class="bg-primary">
            <button class="btn btn-blue">Filtrar</button>
        </div>
    </div>
	<div id="anime_li"></div>
</div>

<script>
    function sigPagina(pagina){
        $.ajax({
        type: 'POST',
        data: 'pagina='+pagina,
        url:'sql/anime/mostrarLista.php',
        success: function(r){
            if(r){
            $('#anime_li').html(r);        
            }
        }
        });
    }

    function mostrarDatos(){
        $.ajax({
            url:'sql/anime/mostrarLista.php',
            success: function(r){
            $('#anime_li').html(r);
            }
        });
    }

    $(document).ready(function(){
      mostrarDatos();
	});
</script>