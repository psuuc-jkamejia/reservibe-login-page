const userEmail = "kenji@gmail.com";
const passCode = "J3kennnnn#000";
const btnLogin = document.querySelector('#btnLogin');
function checkCredentials(){
    const gmail = document.getElementById('gmail').value;
    const password = document.getElementById('password').value;

    if (gmail == userEmail && password == passCode){
        alert ("You are now interacting as Kenji!");
    }
    else {
        alert("Invalid Username or Password.")
    }
}

btnLogin.addEventListener('click', checkCredentials);
