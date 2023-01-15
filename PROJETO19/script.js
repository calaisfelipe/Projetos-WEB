const pesoInput = document.querySelector('#ipeso')
const alturaInput = document.querySelector('#ialtura')
const btnCalc = document.querySelector('#btn-calc')
const btnClean = document.querySelector('#btn-limpa')
const resultContainer = document.querySelector('#result-container')
const imcValue = document.querySelector('#imc')
const backgroundResult = document.querySelector('#result-imc')


//Eventos
btnCalc.addEventListener('click', ()=> {

if(pesoInput.value == '' || alturaInput.value == ''){
    alert('ERRO: Favor preencher os campos')
    limpar()
}

let imc = calculaImc(pesoInput.value , alturaInput.value)

imcValue.innerHTML = imc
resultContainer.classList.toggle('d-none')

if(imc < 30){
    backgroundResult.classList.add('bg-success')
} else if ( imc >= 30 && imc <= 39.9){
    backgroundResult.classList.add('bg-warning')
} else if( imc >= 40){
    backgroundResult.classList.add('bg-danger')
} else {
    backgroundResult.classList.add('bg-info')
}


})

btnClean.addEventListener('click', () =>{
    limpar()
})



//Calculo IMC
function calculaImc(peso, altura){
    let imc = peso/(altura * altura)

    return imc.toFixed(1)
}

function limpar(){
    pesoInput.value = ''
    alturaInput.value = ''
    pesoInput.focus()
    resultContainer.classList.toggle('d-none')

    if(backgroundResult.classList.contains('bg-success')){
        backgroundResult.classList.remove('bg-success')
    }

    if(backgroundResult.classList.contains('bg-warning')){
        backgroundResult.classList.remove('bg-warning')
    }

    if(backgroundResult.classList.contains('bg-danger')){
        backgroundResult.classList.remove('bg-danger')
    }

    if(backgroundResult.classList.contains('bg-info')){
        backgroundResult.classList.remove('bg-info')
    }
}