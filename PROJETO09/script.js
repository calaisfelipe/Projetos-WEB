const inputTarefa = document.querySelector('#itarefa')
const btnAddTask = document.querySelector('.adicionar')
const inputPesquisa = document.querySelector('.ipesquisar')
const btnPesquisa = document.querySelector('.btnpesquisa')
const inputFilter = document.querySelector('#ifiltro')
const listUl = document.querySelector('.lista-tarefas')

btnAddTask.addEventListener('click', () =>{
 
   
    //Novo Li
    const newTask  = inputTarefa.value
    const newLi = document.createElement('li')
    listUl.appendChild(newLi)

    //div para texto do li 
    const divTextList = document.createElement('div')
    const textlist = document.createElement('p')
    newLi.appendChild(divTextList)
    divTextList.appendChild(textlist)


    textlist.innerText = newTask


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
 
    

})