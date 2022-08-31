const mobileToggle = document.querySelector('#mobileToggle');
const mobileToggleClose = document.querySelector('#mobileToggleClose');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('#mobileMenu');

const cartToggle = document.querySelector('#cart-toggle');
const cartContainer = document.querySelector('#cart-container');



mobileToggle.addEventListener('click', function(){

    if(!header.classList.contains('open')){

        header.classList.add('open');
        overlay.classList.remove('has-fade');
        body.classList.add('scroll');
        mobileMenu.classList.add('translate');
      
    }
});



mobileToggleClose.addEventListener('click', function(){
    if(header.classList.contains('open')){

        header.classList.remove('open');
        overlay.classList.add('has-fade');
        body.classList.remove('scroll');
        mobileMenu.classList.remove('translate');
    }
   
});


cartToggle.addEventListener('click', function(){
    
    cartContainer.classList.toggle('show');
   
});