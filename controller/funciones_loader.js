export default class Loader {
    constructor() {
        
    }
 
    opening() {
        $('#contenedor2').css("visibility", 'visible');
        //carga.style.opacity = '0';
    }

    ending() {
        $('#contenedor2').css("visibility", 'hidden');
        $('#contenedor2').css("opacity", '0');
    }
}