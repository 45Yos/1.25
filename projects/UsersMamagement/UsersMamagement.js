const logInScreen = document.createElement('div');
logInScreen.id = 'logInScreen';

document.body.appendChild(logInScreen);


const logInDiv = document.createElement('div');
logInDiv.id = 'logInDiv';


logInScreen.appendChild(logInDiv);


const logInTitle = document.createElement('h1');
logInTitle.id = 'logInTitle';
logInTitle.innerHTML = 'Log In';
logInDiv.appendChild(logInTitle);


const formDiv = document.createElement('div');
formDiv.id = 'formDiv';
logInDiv.appendChild(formDiv);


const logInForm = document.createElement('form');
logInForm.id = 'logInForm';


formDiv.appendChild(logInForm);


const usernameTitleDiv = document.createElement('div');
formDiv.appendChild(usernameTitleDiv);


const usernameTitle = document.createElement('label');
usernameTitle.className = 'loginFormText';
usernameTitle.innerHTML = 'Username';
usernameTitleDiv.appendChild(usernameTitle);


const usernameInputDiv = document.createElement('div');
formDiv.appendChild(usernameInputDiv);

const usernameInput = document.createElement('input');
usernameInput.className = 'loginFormInput';
usernameInput.type = 'text';
usernameInputDiv.appendChild(usernameInput);


const passwordTitleDiv = document.createElement('div');
formDiv.appendChild(passwordTitleDiv);


const passwordTitle = document.createElement('label');
passwordTitle.className = 'loginFormText';
passwordTitle.innerHTML = 'Password';
passwordTitleDiv.appendChild(passwordTitle);


const passwordInputDiv = document.createElement('div');
formDiv.appendChild(passwordInputDiv);


const passwordInput = document.createElement('input');
passwordInput.className = 'loginFormInput';
passwordInput.type = 'password';
passwordInputDiv.appendChild(passwordInput);



const logInButton = document.createElement('button');
logInButton.id = 'logInButton';
logInButton.innerHTML = 'Log In';
logInDiv.appendChild(logInButton);



const notSingedUpDiv = document.createElement('div');
notSingedUpDiv.id = 'notSingedUpDiv';
logInDiv.appendChild(notSingedUpDiv);


const notSingedUpText = document.createElement('p');
notSingedUpText.id = 'notSingedUpText';
notSingedUpText.innerHTML = 'Not signed up yet?';
notSingedUpDiv.appendChild(notSingedUpText);


const signUpButton = document.createElement('button');
signUpButton.id = 'signUpButton';
signUpButton.innerHTML = 'Sign Up';

notSingedUpDiv.appendChild(signUpButton);
