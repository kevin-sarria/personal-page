

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');


    window.onscroll = () => {
        
        let y = window.scrollY;

        if( y > 180 ) {

            header.classList.add('bg-slate-900');
            header.classList.remove('bg-transparent');
        
        } else if( y <= 179 ) {
            header.classList.add('bg-transparent');
            header.classList.remove('bg-slate-900');
        }

    }

});