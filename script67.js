function handleContact(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var snackbar = document.getElementById("snackbar");
    var snackbarText = "";
    var snackbarBG = "#28a7e9";

    if((fullname === "") || (email === "") || (message === "") ){
        snackbarText = `Please enter values for all fields`;
        snackbarBG = "rbg(255, 204, 203)";
    }
    else{
        snackbar.className = "show";
        snackbarText = `Thanks ${fullname}...Your message been recorded`;
    }
    snackbar.classname = "show";
    snackbar.innerHTML = snackbarText;
    snackbar.style.backgroundColor = snackbarBG;
    setTimeout(function(){snackbar.className = snackbar.className.replace("show",""); }, 3000);
}