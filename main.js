
var input1 = " ";
var input2 = " ";
var pressedOp;
var digitInput = document.querySelector("input");
var buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener("click" , function(){
        let buttonText = this.innerHTML;
        //Checking for buttons 0-9, '.' 
        if ((buttonText >= '0' && buttonText <= '9') || buttonText == '.') {
                digitInput.value = getInput(buttonText);
        }
        // Checking for *,/,+,-
        else if (buttonText == '*' || buttonText == '/' || buttonText == '+' || buttonText == '-') {
            /* if input1 and input2 have some value and also pressedOp has some operator,
               then calculate and store result in input1 and clear input2.*/
            if(input1 != " " && input2 != " "){
                digitInput.value = input1 = calculate(pressedOp);
                input2 = " "; 
                pressedOp = buttonText;
                operatorBgChange(buttons[i]);
            }
            /* if input1 has some value and operator is pressed.*/ 
            else{
                pressedOp = buttonText;
                operatorBgChange(buttons[i]);
            }

        }
        // Checking for '='
        else if(buttonText == "="){   
            // Evaluate the expression according to operator button pressed             
            digitInput.value = calculate(pressedOp);  
        }
        else if(buttonText == 'Clear'){
            digitInput.value = 0;
            clear();
        }  
        else{
            digitInput.value = "Invalid Expression";
        }     
    });
}
function getInput(btnText){
    // getting operand1 until any operator button is pressed.
    if(pressedOp == undefined){
        input1 = input1 + btnText;
        return input1;    
    }
    else{
    //getting operand2 after any operator button is pressed.
        input2 = input2 + btnText;
        return input2;
    }
}
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
function operatorBgChange(btnObject){
    btnObject.classList.add("pressed-op");
    //digitInput.value = pressedOp;
    setTimeout(() => {
        btnObject.classList.remove("pressed-op");
    }, 1000);
}
function clear(){
    pressedOp = undefined;
    input1 = " ";
    input2 = " ";
}