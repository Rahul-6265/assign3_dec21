// Take 3 inputs from the user and show minimum of the three.

var num1 = prompt("Enter first number")
var num2 = prompt("Enter second number")
var num3 = prompt("Enter third number")

if (num1 < num2) {
    if (num1 < num3) {
        alert(num1);
    } else {
        alert(num3);
    }
 } else {
        if (num2 < num3) {
            alert(num2);
        } else {
            alert(num3);
        }
    }
    
