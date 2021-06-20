import Loader from './funciones_loader.js';
const loader = new Loader();
$(document).ready(() => {

    function actualizarImagen() {
        loader.opening();
        var Form = new FormData($('#frmImagen')[0]);

        $.ajax({
            url: 'model/cargarImagen.php',
            type: 'post',
            data: Form,
            processData: false,
            contentType: false,
            success: function (r) {
                if (r === "2") {
                    $('#frmImagen')[0].reset();
                    setTimeout(() => {
                        //ending();
                        window.location = "ajusteImagen";
                    }, 2000);
                } else {
                    $('#frmImagen')[0].reset();
                    loader.ending();
                    Swal.fire({
                        title: "<div class='text-white'>Upps</div>",
                        html: "<div class='text-white'>Error al intentar subir archivo! \n\n" + r + "</div>",
                        imageUrl: "img/alerta/error.png",
                        imageWidth: '40%',
                        showConfirmButton: true,
                        buttonsStyling: false,
                        customClass: {
                            confirmButton: 'btn btn-lg btn-blue'
                        },
                        background: 'rgb(0,0,0,0.7)'
                    });
                }
            }
        });
    }

    /* function opening() {
        $('#contenedor2').css("visibility", 'visible');
        //carga.style.opacity = '0';
    }

    function ending() {
        $('#contenedor2').css("visibility", 'hidden');
        $('#contenedor2').css("opacity", '0');
    }
 */

    $('#btnImgUsuario').click(() => {
        actualizarImagen();
    });
});