let emailInput = document.getElementById('email-input');
let submitButton = document.getElementById('email-btn');
let dismissBtn = document.getElementById('dismiss-btn');
let thanksText = document.getElementById('thanks-text');
let signUpClass = document.querySelector('.sign-up-class');
let thanksMessageDiv = document.querySelector('.thanks-message');

function thanksMessage(){
    console.log("Thank you!")
    signUpClass.style.display = 'none';
    thanksMessageDiv.style.display = 'block';
    thanksText.innerHTML = `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription.`;
};

function dismissMessage(){
    location.reload();
}

submitButton.addEventListener('click', thanksMessage);
dismissBtn.addEventListener('click', dismissMessage);

