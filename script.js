bars=document.querySelector('.header  .fa-bars-staggered');
times=document.querySelector('.header  .fa-circle-xmark');
navbar=document.querySelector('.header .navbar');
bars.onclick=()=>{
    navbar.classList.add('show');
    bars.classList.add('hide');
    times.classList.add('show')
}

times.onclick=()=>{
    navbar.classList.remove('show');
    bars.classList.remove('hide');
    times.classList.remove('show')
}
