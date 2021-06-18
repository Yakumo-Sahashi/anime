function buscarAnime(nombre_anime){
    $.ajax({
        type: 'POST',
        data:"anime=" + nombre_anime,
        url: 'sql/busqueda/busqueda_anime.php',
        success: function(r){
            if(r){
                document.getElementById('bus-drown').style.display = "block";
                $('#resultado_busqueda').html(r);        
            }else{                
                $('#resultado_busqueda').html("Error");
            }
        }
    });
}

function buscarUsuario(nombre_usuario){
    $.ajax({
        type: 'POST',
        data:"usuario=" + nombre_usuario,
        url: 'sql/usuario/mostrarDatosUsuario.php',
        success: function(r){
            if(r){
                $('#datos_usuario').html(r);
            }
        }
    });
}

$(document).on('keyup', '#buscador', function(){
    var dato= $(this).val();
    if(dato != ""){
        buscarAnime(dato);
    }else{
        buscarAnime();
    }
});

$(document).on('keyup', '#buscadorUss', function(){
    var dt= $(this).val();
    if(dt != ""){
        buscarUsuario(dt);
    }else{
        buscarUsuario();
    }
});