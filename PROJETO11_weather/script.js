const apiKey = '28e8e78ff8f6b0637cbdf6f847a986fa'
const unsplashApiKey = 's-BH15n8TDc38VHgC73EuFNJ73zbF73QTw1RDva4DaI'
const unsplashAutorization = 'IW-2s8RVoJKraIUmQFManVX4n4aEb8FCsNI9rcg5ZFU'
const urlIconWeather = 'http://openweathermap.org/img/wn/'
const urlFlagsApi = 'https://countryflagsapi.com/png/'


//Seletores
const inputSearch = document.querySelector('#input-city')
const btnSearch = document.querySelector('#search')

const divWeaterData = document.querySelector('#weather-data')
const city = document.querySelector('#city')
const country = document.querySelector('#country')
const temperature = document.querySelector('#Temperatura span')
const weatherDescription = document.querySelector('#description')
const weatherIcon = document.querySelector('#weather-icon')
const umidade = document.querySelector('#umidade span')
const wind = document.querySelector('#wind span')
const loadingContainer = document.querySelector('#loading-container')

const favoriteContainer = document.querySelector('#favorite-div')

const btnsFavorite = document.querySelectorAll('.favorite-btn')

const fade = document.querySelector('#fade')
const modalError = document.querySelector('#error-message-container')

const btnError = document.querySelector('#btn-error')
const body = document.querySelector('body')



//funções
async function getWeather(city){

    const urlCityApiTest = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const cityWeather = await fetch(urlCityApiTest)
    const data = await cityWeather.json()
    return data

}
    //Unsplash 
async function getBackground(location){

 const wheatherBackground = await fetch(`https://api.unsplash.com/search/photos/?query=${location}&client_id=s-BH15n8TDc38VHgC73EuFNJ73zbF73QTw1RDva4DaI`)


 const backgroundResponse = await wheatherBackground.json()


 return backgroundResponse

}




async function showWeather(location){
   
    try{
    const weatherinfo = await getWeather(location)
    console.warn(weatherinfo)
    console.log(weatherinfo.sys.country)
    country.src = `https://countryflagsapi.com/png/${weatherinfo.sys.country}`
    city.innerHTML = weatherinfo.name
    temperature.innerHTML = weatherinfo.main.temp
    weatherDescription.innerHTML = weatherinfo.weather[0].description
    wind.innerHTML = weatherinfo.wind.speed
    umidade.innerHTML = weatherinfo.main.humidity
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherinfo.weather[0].icon}.png`


        const newBackground = await getBackground(`${location} clima`)
        console.log(newBackground)
        console.log(newBackground.results[0].urls.full)
        const sorteado = Math.floor(Math.random() * (10))
        body.style.backgroundImage= `url(${newBackground.results[sorteado].urls.full})`


    }

    catch{
        divWeaterData.classList.toggle('hide')
        errorMessage()

        body.style.backgroundImage = 'url(img/pexels-min-an-1403550.jpg)'

        inputSearch.value = ''
        inputSearch.focus()
        
        return
    }
}



function errorMessage(){
    fade.classList.toggle('hide')
    modalError.classList.toggle('hide')
}


function toggleDiv(){
    
    divWeaterData.classList.toggle('hide')
}

function loading(){
    loadingContainer.classList.toggle('hide')
    
}

function logicaPrograma(location){

    favoriteContainer.classList.add('hide')

    if (!divWeaterData.classList.contains('hide')){
        toggleDiv()
    }

   async function ordemOcorrencia(){
     
    loading()
     await showWeather(location)
     loading()
     toggleDiv()
    }
    
    ordemOcorrencia()

}

//eventos

btnSearch.addEventListener('click', (e) =>{
    e.preventDefault()
    const location = inputSearch.value
    logicaPrograma(location)
     
})

inputSearch.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
    const location = inputSearch.value
       logicaPrograma(location)
    }
})

btnsFavorite.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        logicaPrograma(btn.innerHTML)
    })
})

btnError.addEventListener('click', (e) =>{
    errorMessage()
})