const form = document.getElementById('signup-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const div = document.getElementById('mydiv');
const bag = document.getElementById('mydiv1');
const gen = document.getElementById('mydiv2');
const car = document.getElementById('mydiv3');
const firstNameInput = document.getElementById('input1');
const middleNameInput = document.getElementById('input2');
const surnameInput = document.getElementById('input3');
const dateOfBirthInput = document.getElementById('input4');
let isValid = false;
let isokay = true;
passwordInput.addEventListener('input', () => {
    isValid = true;

    if (/[a-z]/.test(passwordInput.value)) {
        div.style.backgroundColor = 'green';
        isokay = true;
    } else {
        div.style.backgroundColor = 'red';
        isValid = false;
    }

    if (/[A-Z]/.test(passwordInput.value)) {
        bag.style.backgroundColor = 'green';
        isokay = true;
    } else {
        bag.style.backgroundColor = 'red';
        isValid = false;
    }

    if (/[0-9]/.test(passwordInput.value)) {
        gen.style.backgroundColor = 'green';
        isokay = true;
    } else {
        gen.style.backgroundColor = 'red';
        isValid = false;
    }

    if (passwordInput.value.length >= 8) {
        car.style.backgroundColor = 'green';
        isokay = true;
    } else {
        car.style.backgroundColor = 'red';
        isValid = false;
    }

    if (isValid) {
        passwordInput.style.border = 'solid green';
    } else {
        passwordInput.style.border = 'solid red';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value.trim();
    const middleName = middleNameInput.value.trim();
    const surname = surnameInput.value.trim();
    const dateOfBirth = dateOfBirthInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!firstName || !middleName || !surname || !dateOfBirth) {
        alert('Please fill in all the fields');
        return;
    }

    if (!isValid) {
        alert('Password is not valid');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // form submission logic here
});


``