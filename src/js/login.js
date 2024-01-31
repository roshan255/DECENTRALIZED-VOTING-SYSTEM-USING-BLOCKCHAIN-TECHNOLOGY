const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");



loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "1000" && password === "123456") {
        alert("You have successfully logged in.");
        location.replace("vote.html");
    }else if(username === "1001" && password === "123456"){
		alert("You have successfully logged in.");
        location.replace("vote.html");
	}else if(username === "1002" && password === "123456"){
		alert("You have successfully logged in.");
        location.replace("vote.html");
	}else if(username === "1003" && password === "123456"){
		alert("You have successfully logged in.");
        location.replace("vote.html");
	}
	else {
        loginErrorMsg.style.opacity = 1;
    }
})

