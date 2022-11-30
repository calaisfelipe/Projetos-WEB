/*

box-shadow: inset    3px   3px  3px   1px  #000000 
            interno? hor  vert  blur  spread  color 

opacity: 1;

    let boxShadow {
        inset:true/false,
        horizontal: 3,
        vertical:3,
        blur:3,
        spread:1,
        color: '#000000',
        opacity: 1
    }


*/

class BoxShadowGenerator{
    constructor(sombraInterna,horizontal,vertical,blur,spread,color,opacity){
        this.sombraInterna = sombraInterna
        this.horizontal = horizontal
        this.vertical = vertical
        this.blur = blur
        this.spread = spread
        this.color = color
        this.opacity = opacity


    }
}

//seletores
//inputs
const horizontal = document.querySelector('#idesloc-horizontal')
const vertical = document.querySelector('#idesloc-vertical')
const blur = document.querySelector('#iblur')
const spread = document.querySelector('#ispread')
const color = document.querySelector('#icolor')
const opacity = document.querySelector('#iopacity')
const sombraInterna = document.querySelector('#isombra-interna')

//Referencia dos inputs
const txtHorizontal = document.querySelector('#numdesloc-horizontal')
const txtVertical = document.querySelector('#numdesloc-vertical')
const txtBlur = document.querySelector('#num-iblur')
const txtSpread = document.querySelector('#num-spread')
const txtOpacity = document.querySelector('#num-iopacity')
const txtcolor = document.querySelector('#num-icolor')


//previewBox
const previewBox = document.querySelector('#box')


//output-rules
const rule = document.querySelector('#rule span')
const webkitRule = document.querySelector('#webkit-rule span')
const mozRule = document.querySelector('#moz-rule span')

//eventos