import Loader from './funciones_loader.js';
const loader = new Loader();
$(document).ready(() => {
    boton();
    var x, y, w, h;

    function showCoords(c) {
        // variables can be accessed here as
        // c.x, c.y, c.x2, c.y2, c.w, c.h
        //alert(c.x+' '+c.y+' '+c.w+' '+c.h);
        x = c.x;
        y = c.y;
        w = c.w;
        h = c.h;
    };

    jQuery(($)=> {
        $('#target').Jcrop({
            onSelect: showCoords,
            bgColor: 'black',
            bgOpacity: .4,
            aspectRatio: 16 / 16
        });
    });

    function recortarImagen() {
        if (parseInt(w)) {
            Swal.fire({
                title: "<div class='text-white mt-2'>Recortando imagen</div>",
                html: "<div class='text-white mt-2 mb-2'>Espera un poco...<br>Al terminar el proceso seras redirigiro de manera automatica.</div>",
                background: 'rgb(0,0,0,0.7)',
                showConfirmButton: false,
                allowOutsideClick: false,
                  allowEscapeKey: false,
                allowEnterKey:false,
                timer: 3000,
                timerProgressBar: true,
                value: true
              }).then((value) => {
                loader.opening();
                $.ajax({
                    url: 'model/cortar.php',
                    type: 'POST',
                    data: 'x=' + x + '&y=' + y + '&w=' + w + '&h=' + h,
                    success: (r)=> {                        
                        setTimeout(()=>{
                            //loader.ending();
                            window.location="cuenta";
                        },1000); 
                    }
                });
              });
        } else {
            Swal.fire({
                title: "<div class='text-white'>Upps</div>",
                html: "<div class='text-white'>Debes elegir un area de recorte!</div>",
                imageUrl: "img/alerta/error.png",
                imageWidth: '40%',
                background: 'rgb(0,0,0,0.7)',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-lg btn-blue mr-1',
                },
            }).then((value) => {
                boton();
            });
        }
    }

    function boton(){
        Swal.fire({/* 
            title: "Recortar Imagen", */
            showConfirmButton: true,
            confirmButtonText: 'Recortar seleccion',
            toast: true,
            position:'center-end',
            background: 'rgb(0,0,0,0.7)',
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,
        }).then((result) => {
            if (result.value) {
                recortarImagen();
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
    } */
});