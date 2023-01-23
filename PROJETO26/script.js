const menuHamburguer = document.querySelector('.menu')
const menuNav = document.querySelector('.nav-menu')




menuHamburguer.addEventListener('click', ()=>{

    menuHamburguer.classList.toggle('active')
    menuNav.classList.toggle('active')
})