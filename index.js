let emailInput = document.getElementById('email-input');
let submitButton = document.getElementById('submit-button');
let dismissBtn = document.getElementById('dismiss-btn');

// emailInput.oninput = logInput;

function logInput(){
    console.log (emailInput.value);
    // export emailInput.value
};

let emailOutput = emailInput.value;
function successPage(){
    logInput();
    console.log(dismissBtn);
    location.replace("success.html");
    
};
submitButton.addEventListener("click", successPage);

export { emailOutput };


