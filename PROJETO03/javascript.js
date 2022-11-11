//SELETORES
var btntask = document.querySelector('#btnadd')
var list = document.querySelector('#lista')
var newtask = document.querySelector('#itask')



//Logica ao apertar botão de adicionar tarefa
btntask.addEventListener('click',function(){
    let nometask = newtask.value
    
    if(newtask.value != ''){
    let task = document.createElement('li')
    list.appendChild(task)
    task.innerText = nometask

    let taskbtndel = document.createElement('button')
    task.appendChild(taskbtndel)
    taskbtndel.id = "btndel"
    taskbtndel.textContent = `X`

    let taskbtnconfirm = document.createElement('button')
    task.appendChild(taskbtnconfirm)
    taskbtnconfirm.id = "btnok"
    taskbtnconfirm.textContent = `\u{2714}`

    newtask.focus()
    newtask.value=""

    taskbtnconfirm.addEventListener('click',function(){
        if(task.style.backgroundColor ===''){
            task.style.backgroundColor = 'lightgreen'}
            else {task.style.backgroundColor = ''}
    })

    taskbtndel.addEventListener('click',function(){
        task.remove()
    })} 
    
    else{ alert('Insira uma tarefa')}

})

