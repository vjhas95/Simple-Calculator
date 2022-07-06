var input1 = " ";
var input2 = " ";
var pressedOp;
var digitInput = document.querySelector("#digit-input");

var buttons = document.querySelectorAll(".btn");

function calculate(op){
        let result;
        switch (op) {
            case "+":
                result = (parseFloat(input1)) + (parseFloat(input2));
                break;
            case "-":
                result = input1 - input2;
                break;
            case "*":
                result = input1 * input2;
                break;
            case "/":
                result = input1 / input2;
                break;
            default:
                break;
        }
        return result;
}
function clear(){
    pressedOp = undefined;
    input1 = " ";
    input2 = " ";
}

for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener("click" , function(){
        let buttonText = this.innerHTML;
        //Listening for buttons 0-9, '.' 
        if ((buttonText >= '0' && buttonText <= '9') || buttonText == '.') {
            // getting operand1 until any operator button is pressed.
            if(pressedOp == undefined){
                digitInput.value = input1 = input1 + buttonText;
            }
            else{
            //getting operand2 after any operator button is pressed.
                digitInput.value = input2 = input2 + buttonText;      
            }
        } 
        // Checking for *,/,+,-,=
        if (buttonText == '*' || buttonText == '/' || buttonText == '+' || buttonText == '-') {
            pressedOp = buttonText;
            buttons[i].classList.add("pressed-op");
            digitInput.value = pressedOp;
            setTimeout(() => {
                buttons[i].classList.remove("pressed-op");
            }, 2000);

            
        }else if(buttonText == "="){   
            // Evaluate the expression according to operator button pressed             
            digitInput.value = calculate(pressedOp);
            clear();   
        }
        if(buttonText == 'Clear'){
            digitInput.value = 0;
            clear();
        }       
    });
}





