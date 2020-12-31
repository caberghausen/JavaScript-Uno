function loginAjax(event) {
    const username = document.getElementById("username").value; // Get the username from the form
    const password = document.getElementById("password").value; // Get the password from the form

    if(!(username.length>0) || !(password.length>0)){
        return;
    }

    // Make a URL-encoded string for passing POST data:
    const data = { 'username': username, 'password': password };
    fetch("login.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => console.log(data.success ? displayHome()
             : `You were not logged in ${data.message}`)) 
        .catch(err => console.error(err));
}

function logoutAjax(event) {
    data = {};
    fetch("logout.php", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => console.log(data.success ? displayLogin() : `You were not logged out ${data.message}`)) 
    .catch(err => console.error(err));
}

function signupAjax(event) {
    const username = document.getElementById("sUsername").value; // Get the username from the form
    const password = document.getElementById("sPassword").value; // Get the password from the form

    // Make a URL-encoded string for passing POST data:
    const data = { 'username': username, 'password': password };
    fetch("signup.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => console.log(data.success ? displayHome() : `You were not signed up ${data.message}`)) 
        .catch(err => console.error(err));
}

function displayLogin(event){
    document.getElementById("login-box").style.display = "block";
    document.getElementById("signup-box").style.display = "block";
    document.getElementById("logout-box").style.display = "none";
    document.getElementById("newgame").style.display = "none";
}

function displayHome(event){
    document.getElementById("login-box").style.display = "none";
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("logout-box").style.display = "block";
    document.getElementById("newgame").style.display = "block";
}

function displayGame(event){
    document.getElementById("game").style.display = "block";
}

function closeGameDisplay(event){
    document.getElementById("game").style.display = "none";
}

//event listeners for signup form submission
document.getElementById("logout_btn").addEventListener("click", logoutAjax, false);

// document.getElementById("login_btn").addEventListener("click", loginAjax, false);
document.getElementById("login_form").addEventListener("submit", loginAjax, false);

// document.getElementById("signup_btn").addEventListener("click", signupAjax, false);
document.getElementById("signup_form").addEventListener("submit", signupAjax, false);

document.getElementById("newgame_btn").addEventListener("click", displayGame, false); // Bind the AJAX call to button click

document.getElementById("close_btn").addEventListener("click", closeGameDisplay, false);

document.getElementById("logout_btn").addEventListener("click", closeGameDisplay, false); // Bind the AJAX call to button click



