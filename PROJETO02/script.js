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




    
    //Mudas os valores na tela da calculadora
    updateScreen(){
        this.currtop.innerText += this.currentOperation 
    }

}

const calc = new calculator(prevop, currtop)


// Adicionando evento nos botões

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {   //evento click 
        const value = e.target.innerText; // evento de imprimir o valor de texto 

        if(+value >=0 || value ==="."){   //diferencia quando digita um numero ou 
                                            // uma operação na calculadora
            calc.addDigit(value)
        } else {
            console.log("op:"+value)
        }

    })
})