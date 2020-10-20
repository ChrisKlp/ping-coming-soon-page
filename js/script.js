const formField = document.querySelector('.form__input');
const input = document.querySelector('.form__input input');
const button = document.querySelector('.form__button');
const formInfo = document.querySelector('.form__info');

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const clearError = () => {
    formField.classList.remove('error');
};

const checkForm = e => {
    e.preventDefault();
    clearError();

    if (!input.value) {
        formInfo.textContent = 'Whoops! It looks like you forgot to add your email';
        formField.classList.add('error');
    } else if (!re.test(input.value)) {
        formInfo.textContent = 'Please provide a valid email address';
        formField.classList.add('error');
    } else return;
};

button.addEventListener('click', checkForm);
