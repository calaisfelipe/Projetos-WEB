const check = document.querySelector('#icheck')

console.log(check.checked)



const div = document.querySelector('#copiediv')
const result = document.querySelector('#textarea')
const paragraf = document.querySelector('#parag')



paragraf.addEventListener('click', (e) =>{
    
       const texto = 'blablabla'
       result.innerHTML = texto
       result.select()   
       document.execCommand('copy')
})