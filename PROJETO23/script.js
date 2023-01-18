const btnLeft = document.querySelector('#btn-left')
const btnRight = document.querySelector('#btn-right')

const tenis1 = document.querySelector('#tenis1')
const tenis2 = document.querySelector('#tenis2')

btnRight.addEventListener('click', () =>{

    tenis1.style = 'left: -30%'
    tenis2.style = 'left: 120%'



})

btnLeft.addEventListener('click', () =>{

    tenis1.style = 'left: -180%'
    tenis2.style = 'left: -30%'
    
})