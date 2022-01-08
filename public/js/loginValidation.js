// const regularExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/


// window.addEventListener("load", function(){
//     let login = document.querySelector(".form-login")

//     login.addEventListener("submit", function(e){
//         e.preventDefault()

//         let errores = {}

//         // Email
//         let campoEmail = document.querySelector(".form-email")
//         if (campoEmail.value == ""){
//             errores.email = "Debes ingresar un email"
//             document.querySelector(".span-email-login").innerHTML = errores.email;
//         }else if (regularExEmail.test(campoEmail.value)){
//             errores.email = "Debe ser un email valido"
//             document.querySelector(".span-email-login").innerHTML = errores.email;
//         } 

//         let campoPassword = document.querySelector(".form-password")
//         if (campoPassword.value == ""){
//             errores.password = "Debes ingresar una contraseña"
//             document.querySelector(".span-password-login").innerHTML = errores.password;

//         }else if (regExPassword.test(campoPassword)){
//             errores.password = "Tu contraseña debe contener al menos 8 caracteres"
//             document.querySelector(".span-password-login").innerHTML = errores.password;
//         } 

//     })
// })