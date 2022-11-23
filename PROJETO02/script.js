//Selecionando elementos
const prevop = document.getElementById('previous-operation')  
const currtop = document.getElementById('current-operation')
const buttons = document.querySelectorAll(".container-calc button") //Seleciona todos os botões 

//Lógica do programa
class calculator {
    constructor(prevop, currtop){
        this.prevop = prevop;
        this.currtop = currtop;
        this.currentOperation = "";
    }

    // Adiciona um digito na tela da calculadora
    addDigit(digit) {

        //Verifica se já tem um ponto e não deixa colocar mais um
        if (digit === "." &&  this.currtop.innerText.includes(".")){
            return;
        }

        this.currentOperation = digit
        this.updateScreen()
    }

    //Processando todas as operações
    processOperation(operation){
      
        //pega valores atuais e anteriores
      let operationValue
      let previous = +this.prevop.innerText.split("")[0]
      let current = +this.currtop.innerText

        switch(operation){
            case '+':
              operationValue = previous + current
              this.updateScreen(operationValue, operation,current,previous)  
              break
              case '-':
                operationValue = previous - current
                this.updateScreen(operationValue, operation,current,previous)  
                break
                case '*':
                    operationValue = previous * current
                    this.updateScreen(operationValue, operation,current,previous)  
                    break
                    case '/':
                        operationValue = previous / current
                        this.updateScreen(operationValue, operation,current,previous)  
                        break
            default:
             break
          
        }

    console.log(operationValue, operation,current,previous)

    }


    //Mudas os valores na tela da calculadora
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null){


            //checa se o valor é zero, se for adiciona no current 
    if (operationValue === null){
        this.currtop.innerText += this.currentOperation }
        else {
        if (previous ===0){
            operationValue = current
        }


        //adiciona o valor atual no previo
        this.prevop.innerText = `${operationValue} ${operation}`
        this.currtop.innerText = ''

        }


    }



}

const calc = new calculator(prevop, currtop)


// Adicionando evento nos botões
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {   //evento click 
        const value = e.target.innerText; // evento de imprimir o valor de texto 

        if(+value >=0 || value ==="."){   //diferencia quando digita um numero ou uma operação na calculadora
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }

    })
})