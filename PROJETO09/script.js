const inputTarefa = document.querySelector('#itarefa')
const btnAddTask = document.querySelector('.adicionar')
const inputPesquisa = document.querySelector('.ipesquisar')
const btnPesquisa = document.querySelector('.btnpesquisa')
const inputFilter = document.querySelector('#ifiltro')
const listUl = document.querySelector('.lista-tarefas')


btnAddTask.addEventListener('click', () =>{
    const newTask  = inputTarefa.value
    inputTarefa.value = ''
    inputTarefa.focus()

   if(newTask === ''){
    alert('ERRO - escreva alguma tarefa')
   }else{
    //Novo Li
    
    const newLi = document.createElement('li')
    listUl.appendChild(newLi)

    //div para texto do li 
    const divTextList = document.createElement('div')
    divTextList.classList.add('list-text')
    const textlist = document.createElement('input')
    textlist.type = 'text'
    textlist.setAttribute('disabled', 'disabled')
    newLi.appendChild(divTextList)
    divTextList.appendChild(textlist)


    textlist.value = newTask

    const divBtns = document.createElement('div')
    newLi.appendChild(divBtns)  

    //Criando botoes taks
    const btnCheck = document.createElement('button')
    btnCheck.classList.add('btnCheck')
    divBtns.appendChild(btnCheck)
    btnCheck.innerHTML = '<i class="bi bi-check-circle"></i>'

    const btnEdit = document.createElement('button')
    btnEdit.classList.add('btnEdit')
    divBtns.appendChild(btnEdit)
    btnEdit.innerHTML = '<i class="bi bi-pencil"></i>'

    const btnCancel = document.createElement('button')
    btnCancel.classList.add('btnCancel')
    divBtns.appendChild(btnCancel)
    btnCancel.innerHTML = '<i class="bi bi-x-circle"></i>'


    //FUNÇÃO TOGGLE
    function checkFunction(){
        newLi.classList.toggle('checked')
            textlist.classList.toggle('checked')
            btnEdit.classList.toggle('checked')
            btnCheck.classList.toggle('checked')
            btnCancel.classList.toggle('checked')
    }
    
    // BOTAO MARCAR COMO FEITO
    btnCheck.addEventListener('click', ()=>{
        checkFunction()
    })

    //BOTAO EDITAR TAREFA
    btnEdit.addEventListener('click', () =>{
        
        if(newLi.classList.contains('checked') === true){
        checkFunction()
        textlist.removeAttribute('disabled')
        textlist.focus()}
        else{
        textlist.removeAttribute('disabled')
        textlist.focus()
        }
    })

    //BOTAO REMOVER TAREFA
    btnCancel.addEventListener('click', () =>{

        newLi.remove()
    })



   }
    

})