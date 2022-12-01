

class BoxShadowGenerator{
    constructor(horizontal,txtHorizontal,vertical,txtVertical,blur,txtBlur,spread,txtSpread,previewBox,rule,webkitRule,mozRule){
        this.horizontal = horizontal
        this.txtHorizontal = txtHorizontal
        this.vertical = vertical
        this.txtVertical = txtVertical
        this.blur = blur
        this.txtBlur = txtBlur
        this.spread = spread
        this.txtSpread = txtSpread
        this.previewBox = previewBox

        this.rule = rule
        this.webkitRule = webkitRule
        this.mozRule = mozRule
    }

    // neWshadowBox.inputRef = input.value

    showValuesInput(){
       this.txtHorizontal.value = this.horizontal.value
       this.txtVertical.value = this.vertical.value
       this.txtBlur.value = this.blur.value
       this.txtSpread.value = this.spread.value

       this.ApplyRule()
       this.showRule()
    }

    ApplyRule(){
        this.previewBox.style.boxShadow = `${this.txtHorizontal.value}px ${this.txtVertical.value}px ${this.txtBlur.value}px ${this.txtSpread.value}px #000`

        this.currentRule = this.previewBox.style.boxShadow

    }

    showRule(){
        this.rule.textContent = this.currentRule
        this.webkitRule.textContent = this.currentRule
        this.mozRule.textContent = this.currentRule
    }


    updateValue(type, value){
       switch (type){
        case "horizontal":
            this.txtHorizontal.value = value
            break
        case "vertical":
            this.txtVertical.value = value
            break
        case "blur":
            this.txtBlur.value = value
            break
        case "spread":
            this.txtSpread.value = value
            break
       }
       this.ApplyRule()
       this.showRule()
    }

    updateColor(){

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


//Inicio do programa
 const neWshadowBox = new BoxShadowGenerator(
    horizontal,
    txtHorizontal,
    vertical,
    txtVertical,
    blur,
    txtBlur,
    spread,
    txtSpread,
    previewBox,
    rule,
    webkitRule,
    mozRule) 


    neWshadowBox.showValuesInput()
    console.log(neWshadowBox.horizontal.value)    

//eventos


horizontal.addEventListener('input', (e) =>{
    const value = e.target.value      
    neWshadowBox.updateValue("horizontal", value)
 
})

vertical.addEventListener('input', (e) =>{
    const value = e.target.value  
    neWshadowBox.updateValue("vertical", value)
 
})

blur.addEventListener('input', (e) =>{
    const value = e.target.value  
    neWshadowBox.updateValue("blur", value)
 
})

spread.addEventListener('input', (e) =>{
    const value = e.target.value  
    neWshadowBox.updateValue("spread", value)
 
})



/*
//TENTATIVA COM FOREACH
[horizontal,vertical,blur,spread].forEach(el => {
    el.addEventListener('input', (e)=>{
        const value = e.target.value
        
        neWshadowBox.updateValue(el, value)
    })
    
});*/


