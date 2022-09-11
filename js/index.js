let nav_scroll = document.getElementById('nav-section'); 
let toggler = document.querySelector('.nav-btn');
let nav = document.querySelector('.nav-list');

// sticky nav
window.addEventListener('scroll', ()=>{
    nav_scroll.classList.toggle('sticky', window.scrollY > 60);
});

// nav toggler
toggler.addEventListener('click', ()=>{
    toggler.classList.toggle('active');
    nav.classList.toggle('active');
});