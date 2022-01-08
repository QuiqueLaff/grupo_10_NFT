const regularExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/


window.addEventListener("load", function(){
    let login = document.querySelector(".form-login")

    login.addEventListener("submit", function(e){

        let errores = {}

        // Email
        if (login.email.value == ""){
            errores.email = "Debes ingresar un email"
            document.querySelector(".span-email-login").innerHTML = errores.email;
            document.querySelector(".form-email").classList.add("error")


        }else if (!regularExEmail.test(login.email.value)){
            errores.email = "Debe ser un email valido"
            document.querySelector(".span-email-login").innerHTML = errores.email;
            document.querySelector(".form-email").classList.add("error")

        } 

        if (login.password.value == ""){
            errores.password = "Debes ingresar una contraseña"
            document.querySelector(".span-password-login").innerHTML = errores.password;
            document.querySelector(".form-password").classList.add("error")


        }else if (regExPassword.test(login.password.value)){
            errores.password = "Tu contraseña debe contener al menos 8 caracteres"
            document.querySelector(".span-password-login").innerHTML = errores.password;
            document.querySelector(".form-password").classList.add("error")

        } 
        if (Object.keys(errores).length > 0) {
            e.preventDefault()
        }

    })
})
