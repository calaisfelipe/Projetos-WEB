const dayItem = document.querySelectorAll('.day-item')
console.log(dayItem)

isMarked()

dayItem.forEach((el) => {
    el.addEventListener('click' , () =>{
        el.classList.toggle('done')

        isDone()

    })
})

function isDone(){
    for (let i = 0 ; i< dayItem.length; i++){
        if(dayItem[i].classList.contains('done')){
            localStorage.setItem(`Prancha: ${i}`, 1)
        }else
        {   localStorage.removeItem(`Prancha: ${i}`)}
    }

}


function isMarked(){
    for(i = 0; i< dayItem.length; i++){
        if(localStorage.getItem(`Prancha: ${i}`) === '1')
        {
            dayItem[i].classList.add('done')
        }else{
            console.log('erro')
        }
    }



}