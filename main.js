var input1 = " ";
var input2 = " ";
var pressedOp;
var digitInput = document.querySelector("#digit-input");

var buttons = document.querySelectorAll(".btn");

function calculate(op){
        let result;
        switch (op) {
            case "+":
                result = (parseInt(input1)) + (parseInt(input2));
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
    let buttonText = buttons[i].innerHTML;
    buttons[i].addEventListener("click" , function(){
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
            digitInput.value = pressedOp;
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








// console.log(numberOfDigitBtn);
// var numberOfOperatorBtn = document.querySelectorAll(".operator").length;
// // console.log(numberOfOperatorBtn);
// var pressedOp;
// var pressedEquals;
// function calculate(op){

//     switch (op) {
//         case "+":
//             digitInput.value = (parseInt(input1)) + (parseInt(input2));
//             break;
//         case "-":
//             digitInput.value = input1 - input2;
//             break;
//         case "*":
//             digitInput.value = input1 * input2;
//             break;
//         case "/":
//             digitInput.value = input1 / input2;
//             break;
//         default:
//             break;
//     }
    
// }
// var clear = document.querySelector(".clear").addEventListener("click",function(){
//         digitInput.value = " ";
// })
// for(let i = 0 ; i < numberOfDigitBtn ;i++ ){
//     // Adding Event Listener to all Digit Buttons ( 0 - 9 )
//     document.querySelectorAll(".digit")[i].addEventListener("click" , function(){
//         if(pressedOp == undefined){
//             // Getting input1 until any operator button is pressed.
//             digitInput.value = " ";
//             digitInput.value = input1 = input1 + document.querySelectorAll(".digit")[i].innerHTML;
            
//         }
//         else{
//             digitInput.value = " ";
//             input2 = input2 + document.querySelectorAll(".digit")[i].innerHTML;
//             digitInput.value = input2;
//         }
//     });
// }
// for(let i = 0 ; i < numberOfOperatorBtn ; i++){
//     //Adding Event Listener to all Operator Buttons.
//     document.querySelectorAll(".operator")[i].addEventListener("click" , function(){
//         pressedOp =  document.querySelectorAll(".operator")[i].innerHTML;
//     });
// }
// document.querySelector(".equalsBtn").addEventListener("click" , function(){
//     calculate(pressedOp);
// });





