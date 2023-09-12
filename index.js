let emailInput = document.getElementById('email-input');
let submitButton = document.getElementById('submit-button');

// emailInput.oninput = logInput;

submitButton.onclick = logInput;
function logInput(){
    console.log (emailInput.value);
};