let inputPassword = document.querySelector(".form-password")
let checkPassword = document.querySelector("#check")




checkPassword.addEventListener("click", () =>{
    if (inputPassword.type == "password"){
        inputPassword.type = "text";
    }else {
        inputPassword.type = "password";

    }

})