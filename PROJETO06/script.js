

class BoxShadowGenerator{
    constructor(horizontal,txtHorizontal,vertical,txtVertical,blur,txtBlur,spread,txtSpread,previewBox,rule,webkitRule,mozRule,color,txtcolor,opacity,txtOpacity,sombraInterna){
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

        this.color = color
        this.txtcolor = txtcolor
        this.opacity = opacity
        this.txtOpacity = txtOpacity

        this.sombraInterna = sombraInterna
        
    }

    // neWshadowBox.inputRef = input.value

    showValuesInput(){
       this.txtHorizontal.value = this.horizontal.value
       this.txtVertical.value = this.vertical.value
       this.txtBlur.value = this.blur.value
       this.txtSpread.value = this.spread.value
       this.txtcolor.value = this.color.value
       this.txtOpacity.value = this.opacity.value

       this.ApplyRule()
       this.showRule()
    }

    ApplyRule(){
        if(this.opacity.value == 1){

        if(this.sombraInterna.checked == false){
        this.previewBox.style.boxShadow = `${this.txtHorizontal.value}px ${this.txtVertical.value}px ${this.txtBlur.value}px ${this.txtSpread.value}px ${this.txtcolor.value}`
    
        this.currentRule = this.previewBox.style.boxShadow} else {
            this.previewBox.style.boxShadow = `inset ${this.txtHorizontal.value}px ${this.txtVertical.value}px ${this.txtBlur.value}px ${this.txtSpread.value}px ${this.txtcolor.value}`
    
            this.currentRule = this.previewBox.style.boxShadow

        }


    } else {

        if(this.sombraInterna.checked == false){
            this.previewBox.style.cssText = `box-shadow: ${this.txtHorizontal.value}px ${this.txtVertical.value}px ${this.txtBlur.value}px ${this.txtSpread.value}px ${this.txtcolor.value};
            opacity:${this.opacity.value}`

            this.currentRule = `${this.txtHorizontal.value}px ${this.txtVertical.value}px ${this.txtBlur.value}px ${this.txtSpread.value}px ${this.txtcolor.value};
            opacity:${this.opacity.value}`} else{

                this.previewBox.style.cssText = `box-shadow: inset ${this.txtHorizontal.value}px ${this.txtVertical.value}px ${this.txtBlur.value}px ${this.txtSpread.value}px ${this.txtcolor.value};
            opacity:${this.opacity.value}`

            this.currentRule = ` inset ${this.txtHorizontal.value}px ${this.txtVertical.value}px ${this.txtBlur.value}px ${this.txtSpread.value}px ${this.txtcolor.value};
            opacity:${this.opacity.value}`

            }
        }
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
        case "color":
                this.txtcolor.value = value
            break
        case "opacity":
                this.txtOpacity.value = value
            break
            case "sombraInterna":
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

const divResult = document.querySelector('#config-result')
const allcontainer = document.querySelector('#configs-container')


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
    mozRule,
    color,
    txtcolor,
    opacity,
    txtOpacity,
    sombraInterna) 


    neWshadowBox.showValuesInput()
    
//eventos

sombraInterna.addEventListener('input',()=> {
const value = sombraInterna.checked
neWshadowBox.updateValue("sombraInterna", value)

})


const allEvents = [horizontal,vertical,blur,spread,color,opacity].forEach((el) =>{
    el.addEventListener('input', (e)=>{
        const value = e.target.value
        switch(el){
            case horizontal:
                neWshadowBox.updateValue("horizontal", value)
                    break
            case vertical:
                neWshadowBox.updateValue("vertical", value)
                     break
            case blur:
                neWshadowBox.updateValue("blur", value)
                     break
            case spread:
                neWshadowBox.updateValue("spread", value)
                    break
            case color:
                neWshadowBox.updateValue("color", value)
                break
            case opacity:
                neWshadowBox.updateValue("opacity", value)
    }
        
    })
})

// Evento para ao clicar encima do footer copiar o texto
const arr = [divResult,rule,mozRule,webkitRule,allcontainer].forEach((el) => {
    el.addEventListener('click', (e) =>{
        const divcopiar = document.querySelector('#copie-field')
        divcopiar.textContent = neWshadowBox.currentRule
        divcopiar.select()
        document.execCommand('copy')
    })
});


