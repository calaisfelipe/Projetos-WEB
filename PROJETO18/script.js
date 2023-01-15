//seletores
const displayCronometro = document.querySelector('#display-cronometro')
const btnStart = document.querySelector('#btn-start')
const btnPause = document.querySelector('#btn-pause')
const btnStop = document.querySelector('#btn-stop')
const btnRetomar = document.querySelector('#btn-retomar')

btnStart.addEventListener('click', () => {

    cronometroStart(0,0,0)
    btnStart.classList.add('noEvent')

})

function cronometroStart(minute = 0, seconds = 0, miliseconds = 0) {
    
    let myCronometer = setInterval(function () {

        //displayCronometro.textContent = `${minute}:${seconds++}`

        displayCronometro.textContent = `${minute}`.padStart(2, 0) + ':' + `${seconds}`.padStart(2, 0) + ':' + `${miliseconds++}`.padStart(2, 0)

        if (miliseconds == 100) {
            miliseconds = 0
            seconds++
        }

        if (seconds == 60) {
            seconds = 0
            minute++
        }

    }, 10)


    // Permite pausar e se clicar denovo continua a contagem
    btnPause.addEventListener('click', (e) => {

        if (displayCronometro.innerHTML == '00:00:00') {
            e.preventDefault()
        }


        clearInterval(myCronometer)
        btnPause.classList.add('d-none')
        btnRetomar.classList.remove('d-none')
    })

    btnRetomar.addEventListener('click', () => {
        clearInterval(myCronometer)
        let saveMinute = minute
        let saveSecond = seconds
        let saveMiliseconds = miliseconds

        reset()

        btnRetomar.classList.add('d-none')
        btnPause.classList.remove('d-none')

        cronometroStart(saveMinute, saveSecond, saveMiliseconds)

    })

    // PAUSA - RESETA e libera pra começar do zero
    btnStop.addEventListener('click', () => {
        clearInterval(myCronometer)

        reset()

        if (btnStart.classList.contains('noEvent')) {
            btnStart.classList.toggle('noEvent')
        }

        if (btnPause.classList.contains('d-none')) {
            btnRetomar.classList.add('d-none')
            btnPause.classList.remove('d-none')
        }

    })

    function reset() {
        miliseconds = 0
        seconds = 0
        minute = 0

        displayCronometro.textContent = `${minute}`.padStart(2, 0) + ':' + `${seconds}`.padStart(2, 0) + ':' + `${miliseconds++}`.padStart(2, 0)
    }



}