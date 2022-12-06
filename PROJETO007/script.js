//Select Elements
const fade = document.querySelector('#fade')
const message = document.querySelector('#message') 
const loader = document.querySelector('#loader')
const btnClose = document.querySelector('#close-message')

const adressForm = document.querySelector('#adress-form')
const cepInput = document.querySelector('#cep')
const adress = document.querySelector('#adress')
const adressNum = document.querySelector('#adress-num')
const adressComplement = document.querySelector('#complement')
const neighbohood = document.querySelector('#bairro')
const city = document.querySelector('#city')
const region = document.querySelector('#state')
const saveBtn = document.querySelector('#save-btn')

const formInputs = document.querySelectorAll('[data-input]')

//Get customer adress from API
async function getAdress(cep){
    toggleLoader()
    cepInput.blur()

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(apiUrl)
    const data = await response.json()

    if(data.erro === true){
        adressForm.reset()
        toggleLoader()
        invalidCep()
        
        return
    }
//show data
    toggleLoader()
   
    adress.value = data.logradouro
    city.value = data.localidade
    adressComplement.value = data.complemento
    neighbohood.value = data.bairro
    region.value = data.uf

    adressComplement.removeAttribute('disabled')
    adressNum.removeAttribute('disabled')
    adressNum.focus()
    

}

   
//show or hide loader
const toggleLoader = () =>{
    fade.classList.toggle('hide')
    loader.classList.toggle('hide')

}

//show Error Message
const invalidCep = () =>{
    fade.classList.toggle('hide')
    message.classList.toggle('hide')
    console.error('invalid CEP')
    const pMsg = document.querySelector('#msg')
    pMsg.textContent = 'Cep invalido - Tente novamente'

    adressComplement.setAttribute('disabled','disabled')
    adressNum.setAttribute('disabled','disabled')
    adressForm.reset()
    cepInput.focus()

}

//validate Input CEP
const validation = [adressNum, cepInput].forEach( (el) =>{
    el.addEventListener('keypress', (e)=>{
        const regexp = /\d/
        let value = e.key
        if (!value.match(regexp)){
            e.preventDefault()
        } 
    })})
    
    // Get adress event
    cepInput.addEventListener('keyup', (e)=>{
        const cepAll = cep.value
        if(cepAll.length === 8){
            getAdress(cepAll)
        }
        
    })
    
    //EXIT - ERROR MESSAGE
        btnClose.addEventListener('click', (e) =>{
        invalidCep()
        cepInput.focus()
    })
    


    //sucess - SIMULATION 
    saveBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        
        toggleLoader()

        if(cepInput.value.length < 8){
            toggleLoader()
            return
        } else{
            setTimeout(() =>{
                toggleLoader()
                console.log('Loading Time')
                sucessMSG()
            },1500)

           
        }
             
    })

    function sucessMSG(){
        const pMsg = document.querySelector('#msg')
        pMsg.textContent = 'Sucesso - Dados enviados'
        fade.classList.toggle('hide')
        message.classList.toggle('hide')
    
    }
