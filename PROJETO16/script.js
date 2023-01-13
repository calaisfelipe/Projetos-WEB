//Modal

const myModal = document.querySelector('#staticBackdrop')
const modal = new bootstrap.Modal(myModal)

//modal.show()


//Seletores
const inputName = document.querySelector('#iname')
const inputEmail = document.querySelector('#iemail')
const inputSenha = document.querySelector('#ipass')
const inputJob = document.querySelector('#ijob')
const inputTextArea = document.querySelector('#imsg')
const btnSend = document.querySelector('#btn-enviar')
const progressBarStatus = document.querySelector('#progressBar')


var progress = []


//Eventos


inputName.addEventListener('keypress', (e) => {

    let userName = inputName.value
    let regexp = /[\d]/

    if ((e.key).match(regexp)) {
        e.preventDefault()
    }

    if (userName.length >= 5) {
        progress[0] = 20
    } else { progress[0] = 0 }
    progressBar(progress)
})

inputEmail.addEventListener('input', () => {

    let content = inputEmail.value
    console.log(content)
    let regexp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

    if (content.match(regexp)) {
        progress[1] = 20
    } else { progress[1] = 0 }
    progressBar(progress)
})

inputSenha.addEventListener('input', () => {

    if (inputSenha.value.length >= 6) {
        progress[2] = 20
    } else { progress[2] = 0 }
    progressBar(progress)
})

inputJob.addEventListener('input', () => {

    const options = document.querySelectorAll('option')
    console.log(options[1].selected)

    if (options[1].selected || options[2].selected) {
        progress[3] = 20
    } else { progress[3] = 0 }
    progressBar(progress)
})


inputTextArea.addEventListener('input', () => {

    if (inputTextArea.value.length >= 5) {
        progress[4] = 20
    } else { progress[4] = 0 }
    console.log(progress)

    progressBar(progress)

})

btnSend.addEventListener('click', (e) => {
    e.preventDefault()

    const resultado = progressBar(progress)
    if (resultado < 100) {
        modalMsg('Formulario incompleto','Por favor reveja os campos e os preencha corretamente.')
        
    } else {
        console.log('concluido')
        modalMsg('Formulario enviado','Sucesso!!')
        resetForm()
    }
})


//Funcões

function progressBar(status) {

    let totalPercent = status.reduce((total, percent) => total + percent, 0
    )

    progressBarStatus.style = `width:${totalPercent}%`

    return totalPercent
}


function modalMsg(title,body){
    const modaltitle = document.querySelector('#staticBackdropLabel')
    const modalBody = document.querySelector('.modal-body')
    

    modaltitle.textContent = title 
    modalBody.textContent = body

    modal.show()
    

}

function resetForm(){
    const formLogin = document.querySelector('#form-login')

    formLogin.reset()
    progressBarStatus.style = 'width:0%'
    progress = []
}


