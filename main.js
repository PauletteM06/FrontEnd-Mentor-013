const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const email = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

const button = document.querySelector('#submit');


button.addEventListener('click', (event)=> {
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value, password, passError, 'Password cannot be empty');
});

function validateEmail(valueInput, divInput, divError) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if(regExp.test(valueInput) == false) {
        showError(divInput, divError, 'looks like this is not an email');
    }else {
        hideError(divInput, divError);
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput) {
    if(valueInput.length == 0) {
        showError(divInput, divError, nameInput);
    }else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error) {
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="">
    <p class="error">${error}</p>`;
}

function hideError(divInput, divError) {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = '';
}
