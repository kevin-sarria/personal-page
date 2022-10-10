
document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos toodos los overlays del apartado de proyectos
    const overlayProject = document.querySelectorAll('.overlay-proyecto');

    // Hacemos un foreach para pasar cada uno de los overlays a una funcion la cual reconocera si el mouse pasa por encima o deja de estarlo, 
    overlayProject.forEach( overlay => hoverOverlay(overlay) );
    
    
    function hoverOverlay(overlay) {

        overlay.addEventListener('mouseover', () => {
            
            overlay.classList.add('overlay-activo');
            overlay.childNodes[3].classList.add('overlay-activo');
            
        });

        overlay.addEventListener('mouseout', () => {
            overlay.classList.remove('overlay-activo');
            overlay.childNodes[3].classList.remove('overlay-activo');
        });

    }


});

