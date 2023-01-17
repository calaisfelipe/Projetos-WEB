//seletores
const btnred = document.querySelector('#btn-red')
const btnBlack = document.querySelector('#btn-black')
const btnBlue = document.querySelector('#btn-blue')
const btnSkin = document.querySelector('#btn-skin')
const btnDarkGreen = document.querySelector('#btn-darkgreen')
const btnWhite = document.querySelector('#btn-white')

const circle = document.querySelector('#circle')

const imgIphone = document.querySelector('#iphone-img')


btnred.addEventListener('click', () =>{
    imgIphone.setAttribute('src','img/red.png')
    circle.style.backgroundColor = '#A61514'
})

btnBlack.addEventListener('click', () =>{
    imgIphone.setAttribute('src','img/black.png')
    circle.style.backgroundColor = '#171E26'
})

btnBlue.addEventListener('click', () =>{
    imgIphone.setAttribute('src','img/blue.png')
    circle.style.backgroundColor = '#194F6D'
})

btnWhite.addEventListener('click', () =>{
    imgIphone.setAttribute('src','img/white.png')
    circle.style.backgroundColor = '#F7F2EE'
})

btnDarkGreen.addEventListener('click', () =>{
    imgIphone.setAttribute('src','img/green.png')
    circle.style.backgroundColor = '#425842'
})

btnSkin.addEventListener('click', () =>{
    imgIphone.setAttribute('src','img/pink.png')
    circle.style.backgroundColor = '#DEC5BA'
})