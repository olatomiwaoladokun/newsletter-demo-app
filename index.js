let emailInput = document.getElementById('email-input');
let submitButton = document.getElementById('email-btn');
let dismissBtn = document.getElementById('dismiss-btn');
let thanksText = document.getElementById('thanks-text');
let signUpClass = document.querySelector('.sign-up-class');
let thanksMessageDiv = document.querySelector('.thanks-message');
let emailForm = document.querySelector(".email-form");
let errors = document.querySelector('.error');

function thanksMessage(event){
    event.preventDefault();
    let messages = [];
    if (emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        console.log("Correct Email format");
        console.log("Thank you!")
        signUpClass.style.display = 'none';
        thanksMessageDiv.style.display = 'block';
        thanksText.innerHTML = `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription.`;
    }else{
        messages.push(`Valid email required`);
        console.log("Wrong Email format");
        errors.innerHTML = messages;
        emailInput.style.color = 'red';
        emailInput.style.borderColor = 'red';
    }
};

function dismissMessage(){
    location.reload();
}

// function validateEmail(){
//     if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         console.log("Correct Email format");
//     }else{
//         console.log("Wrong Email format");
//     }
// }

// emailForm.addEventListener('submit', thanksMessage)

submitButton.addEventListener('click', thanksMessage);
dismissBtn.addEventListener('click', dismissMessage);

