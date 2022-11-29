const openBtn = document.querySelector('#openbtn')
const fadeEfect = document.querySelector('#fade')
const modalContainer = document.querySelector('#modal')
const exitBtn = document.querySelector('#exit')

function Classtoggle(){
    fadeEfect.classList.toggle("hide")
    modalContainer.classList.toggle("hide")
}


[openBtn,exitBtn,fadeEfect].forEach((el) => {
    el.addEventListener('click', () => Classtoggle())

    })

