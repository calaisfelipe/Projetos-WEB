//seletores
const btnFalar = document.querySelector('.btn')
const inputFalar = document.querySelector('#itext')


btnFalar.addEventListener('click', () =>{
    const text = inputFalar.value

    const speaker = new SpeechSynthesisUtterance(text)
    speaker.lang = 'pt-BR'
    window.speechSynthesis.speak(speaker)

})