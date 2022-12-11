//Seletores
const previouOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('button')

//Lógica do programa
class calculator {
    constructor(previouOperationText,currentOperationText){
        this.previouOperationText = previouOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ''
    
    }

        //adiciona digitos na calculadora
    addDigit(digit){
        if(digit === '.' && this.currentOperationText.innerText.includes('.')){
           return
        }else{
            this.currentOperation = digit
            }

            this.updateScreen()
         
    }


    //Atualiza os digitos na tela
    updateScreen(operationValue = null,
         operation = null, 
         previous = null , 
         current = null){

        console.log(operationValue,operation,previous,current)    

        if(operationValue === null){
        this.currentOperationText.innerText += this.currentOperation}else{
            if(previous === 0){
                operationValue = current
            }

            //add current value to previous

            this.previouOperationText.innerText = `${operationValue} ${operation}`

            this.currentOperationText.innerText = ''

           
        }

    }

    //Process All Calculators
    processOperation(operation){
            //check if current value is empty
            if(this.currentOperationText.innerText === ''  && operation !=='C'){
                 //change operation
                if(this.previouOperationText.innerText !== ""){
                    this.changeOperation(operation)

                }
                return
            }




        //GET CURRENT AND PREVIOUS VALUES
        let operationValue 
        let previous = +this.previouOperationText.innerText.split(" ")[0]
        let current = +this.currentOperationText.innerText        

        console.log(previous,current)
        
        
        switch(operation){
            case '+':
              operationValue =  previous + current 
                calc.updateScreen(operationValue,operation,previous,current)
                
                break
            case '-':
                operationValue =  previous - current 
                calc.updateScreen(operationValue,operation,previous,current)
                
                break
            case '/':
                    operationValue =  previous / current 
                calc.updateScreen(operationValue,operation,previous,current)
                
                break
            case '*':
                operationValue =  previous * current 
                calc.updateScreen(operationValue,operation,previous,current)
                

                // 2324
                break
            case 'DEL':
                this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
            
                break

            case 'C':
                this.currentOperationText.innerText = ''
                this.previouOperationText.innerText = ''
                this.currentOperation = ''
                this.previous = ''
                break

            case 'CE':
                this.currentOperationText.innerText = ''
                break

            case '=':
                const operations = this.previouOperationText.innerText.split(' ')[1]
                this.processOperation(operations)
                break
            default: 
            return
            break
        }
        

    }


    changeOperation(operation){

        const mathOperations = ['*','+','-','/']

        if(!mathOperations.includes(operation)){
            return
        }

        this.previouOperationText.innerText = this.previouOperationText.innerText.slice(0,-1) + operation

    }


}



//Inicio do programa
const calc = new calculator(previouOperationText,currentOperationText)


//ADICIONANDO EVENTO NOS BOTÕES
buttons.forEach((button) =>
button.addEventListener('click', (e) =>{
    const value = e.target.innerText
    if( +value >= 0 || value === '.' ){
        const valueNumber = value
        calc.addDigit(valueNumber)
    } else{
        const valueOperator = value
        calc.processOperation(valueOperator)
      
    }
    
}))