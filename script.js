// const loginButton = document.getElementById('login-button');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// let attempts = 0;

// function login() {
//     // Check if email and password are valid
//     // ...

//     // Simulate login attempt
//     attempts++;

//     if (attempts === 3) {
//         loginButton.disabled = true;
//     }
// }

// loginButton.addEventListener('click', login);


const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let attempts = 0;

function login() {
    const adminEmail = 'admin@example.com';
    const adminPassword = 'password';

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === adminEmail && password === adminPassword) {
        // Successful login, redirect to dashboard or homepage
        console.log('Successful login!');
    } else {
        attempts++;

        if (attempts === 3) {
            loginButton.disabled = true;
            console.log('Login disabled due to too many failed attempts.');
        } else {
            console.log('Incorrect email or password. Please try again.');
        }
    }
}

loginButton.addEventListener('click', login);
