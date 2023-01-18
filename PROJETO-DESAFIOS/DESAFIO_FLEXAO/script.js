const allLis = document.querySelectorAll('li')

doneSave()

//Eventos
allLis.forEach((el) =>{
    el.addEventListener('click', () =>{
        el.classList.toggle('done')
        
        isDone()
    
    })
})


function isDone(){

    for(let i = 0; i < allLis.length ; i++){
        if(allLis[i].classList.contains('done')){
            localStorage.setItem(`El: ${i}`, 'done')
        } else{
            localStorage.removeItem(`El: ${i}`)
        }
    }

}


function doneSave(){

    for(let i = 0; i < allLis.length ; i++){
        if(localStorage.getItem(`El: ${i}`) === 'done'){
            allLis[i].classList.add('done')
        }
        
       
    }


}