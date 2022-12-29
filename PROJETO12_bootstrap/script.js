$(document).ready(function(){


//progress Bar
const containerA = document.getElementById('circleA')
const containerB = document.getElementById('circleB')
const containerC = document.getElementById('circleC')
const containerD = document.getElementById('circleD')

let circleA = new ProgressBar.Circle(containerA, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: { color:'#AAA'},
    to: { color:'#64DAF9'},

    step: function(state, circle){

        circle.path.setAttribute('stroke', state.color)

        let value = Math.round(circle.value() * 60)
        circle.setText(value)
    }

})

let circleB = new ProgressBar.Circle(containerB, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1600,
    from: { color:'#AAA'},
    to: { color:'#64DAF9'},

    step: function(state, circle){

        circle.path.setAttribute('stroke', state.color)

        let value = Math.round(circle.value() * 240)
        circle.setText(value)
    }

})

let circleC = new ProgressBar.Circle(containerC, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2000,
    from: { color:'#AAA'},
    to: { color:'#64DAF9'},

    step: function(state, circle){

        circle.path.setAttribute('stroke', state.color)

        let value = Math.round(circle.value() * 32)
        circle.setText(value)
    }

})

let circleD = new ProgressBar.Circle(containerD, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2400,
    from: { color:'#AAA'},
    to: { color:'#64DAF9'},

    step: function(state, circle){

        circle.path.setAttribute('stroke', state.color)

        let value = Math.round(circle.value() * 6532)
        circle.setText(value)
    }

})


//iniciando o loader quando o usuario chega no elemento


//pega a posição do container com a animação
let progressbarcontainerOffset = $('#progress-bar-container').offset()
let stop = 0


$(window).scroll(function(e) {

    let scroll = $(window).scrollTop()
    console.log(scroll)

    if( scroll > (progressbarcontainerOffset.top - 500) && stop == 0){
        circleA.animate(1.0)
        circleB.animate(1.0)
        circleC.animate(1.0)
        circleD.animate(1.0)

        stop = 1
    }
   


})



})