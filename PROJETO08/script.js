const inputDarkmode = document.querySelector('#change-theme')
const body  = document.querySelector('body')
const iconday = document.querySelector('#sun')
const iconmoon = document.querySelector('#moon')

loadTheme()

inputDarkmode.addEventListener('change', () =>{
   const status = inputDarkmode.checked

    if(status === true ){
   body.classList.toggle('dark')
    iconday.classList.toggle('hide')
    iconmoon.classList.toggle('hide')
}
    else {body.classList.toggle('dark')
    iconday.classList.toggle('hide')
    iconmoon.classList.toggle('hide')}


    //SAVE THEME PREFERENCES
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark',1)
    } else {
        localStorage.removeItem('dark')
    }

}
        
)


//THEME FUNCTION
function loadTheme(){
    const themeStatus = localStorage.getItem('dark')

    if (themeStatus == 1){
        body.classList.add('dark')
        iconday.classList.toggle('hide')
        iconmoon.classList.toggle('hide')

    }
}