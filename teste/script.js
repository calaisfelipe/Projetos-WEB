const btn = document.querySelector('#btn')
const input = document.querySelector('#iresult')




btn.addEventListener('click', (e) =>{
    
       input.select()   
       document.execCommand('copy')
})