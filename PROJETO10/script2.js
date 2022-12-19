const btnOpenContainer = document.querySelector('#btngera-senha')
const divGeraSenha = document.querySelector('#result-gera-senha')
const divResult = document.querySelector('#senha-gerada')
const btnGeraSenha = document.querySelector('#btn-create-password')

const numCaracteres = document.querySelector('#numeroCaracters')

const checkLetters = document.querySelector('#iletras')
const checkNumber = document.querySelector('#inum')
const checkSimbols = document.querySelector('#isimbol')

const copyBtn = document.querySelector('#copy-button')


// Toggle Hide Function
function toggleClass() {
 divGeraSenha.classList.toggle('hide')
}


//funcao gera numero
function geraNumeroRandom(range){

    let randomNum = Math.floor(Math.random() *(range))
    return randomNum

}

//Função gera senha automatica
function geraSenha(){
    const especialCaracteresJoin = ['!@#$%&*Çç_-']
    const especialCaracteres = especialCaracteresJoin[0].split('')

    const alphabetoMinuscJoin = ['abcdefghijklmnopqrstuvxyz'] 

    const alphabetoMinusc = alphabetoMinuscJoin[0].split('')
    const alphabetoMaiusc = alphabetoMinusc.map((letra) =>
    letra.toUpperCase())
    const alphabeto = alphabetoMinusc.concat(alphabetoMaiusc)

    console.log(alphabeto)
    console.log(especialCaracteres)

    if(numCaracteres.value < 6 || numCaracteres.value >20){
        alert('ERRO: Numero de caracteres da senha inferior ou superior ao permitido Minimo:6 Maximo: 20')
        return
    }

    let senhaCompleta = []
    
    for (let i = 0; i < numCaracteres.value; i++){
            if(checkLetters.checked){
                let random =  geraNumeroRandom(50)
                senhaCompleta.push(alphabeto[random])
            }

            if(checkNumber.checked){
                let random =  geraNumeroRandom(9)
                senhaCompleta.push(random)
            }

            if(checkSimbols.checked){
                let random =  geraNumeroRandom(11)
                senhaCompleta.push(especialCaracteres[random])
            }
            
    }

    const senhaCompletaJoin = senhaCompleta.join('')
 
    const senhaFinal = senhaCompletaJoin.slice(0,numCaracteres.value)

        return senhaFinal


}

//botao para abrir container de gerar senha
btnOpenContainer.addEventListener('click', (e) =>{
    e.preventDefault()
    toggleClass()

})

//botao para gerar a senha rodando a funcao geraSenha()
btnGeraSenha.addEventListener('click', (e) =>{
    e.preventDefault()

       const senhaFinal = geraSenha()
       divResult.value = senhaFinal

})


//botao copiar senha 
copyBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    divResult.select()
    document.execCommand('copy')
})