

document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.querySelector('.header');
    const menuBurger = document.querySelector('.menu-burger');
    const barraLinks = document.querySelector('.navegacion');
    const links = document.querySelectorAll('.link-navegacion');
    const botonVolverArriba = document.querySelector('.boton-volver-arriba');


    window.onscroll = () => {
        
        let positionY = window.scrollY;

        if( positionY > 180 ) {

            header.classList.add('bg-slate-900');
            header.classList.remove('bg-transparent');
            header.classList.add('border-b-4', 'border-b-slate-700');

        } else if( positionY <= 179 ) {
            header.classList.add('bg-transparent');
            header.classList.remove('bg-slate-900');
            header.classList.remove('border-b-4', 'border-b-slate-700');
        }


        if( positionY >= 677 ) {
            botonVolverArriba.classList.add('block');
        }else {
            botonVolverArriba.classList.remove('block');
        }

    }

    menuBurger.addEventListener('click', () => {

        menuBurger.classList.toggle('active');
        barraLinks.classList.toggle('active-menu');


    });

    // Este codigo verifica si se le dio click a un link de la barra de navegacion
    links.forEach( link => hizoClick(link) )
   
    // Esta function hace que el menu vuelva a su estado comprimido en el modo pantalla pequeña si se da click sobre un link de la barra de navegacion
    function hizoClick( boton ) {

        boton.addEventListener('click', () => {

            if( menuBurger.classList.contains('active') ) {
                menuBurger.classList.toggle('active');
                barraLinks.classList.toggle('active-menu');
            }

        })

    }


});