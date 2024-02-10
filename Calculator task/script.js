let string = ""; // Initialize an empty string to store the calculator input.

let buttons = document.querySelectorAll('button'); // Select all buttons.
let input = document.querySelector('input'); // Select the input field.

// Iterate over each button and attach a click event listener.
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        // Check which button was clicked based on its innerHTML.

        if(e.target.innerHTML == '=') {
            // If the '=' button is clicked, evaluate the expression and update the input field.
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            // If the 'AC' (clear) button is clicked, reset the string and update the input field.
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            // If the 'DEL' (delete) button is clicked, remove the last character from the string.
            string = string.substring(0, string.length-1);
            input.value = string;
        } else {
            // For other buttons, append their value to the string and update the input field.
            string = string + e.target.innerHTML;
            input.value = string;
        }
    });
});



/*


let string = "";

let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '=') {

            string = eval(string);
            input.value = string;

        }else if (e.target.innerHTML == 'AC') {

            string = "";
            input.value = string;

        }else if( e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }else {

            string = string + e.target.innerHTML;
            input.value = string;

        }
    })
})

*/