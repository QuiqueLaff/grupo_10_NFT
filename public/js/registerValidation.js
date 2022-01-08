// const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
// const regExPassword = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// window.addEventListener("load", function(){
//     let formulario = document.querySelector(".form-register")

//     formulario.addEventListener("submit", function(e){
//         e.preventDefault()

//         let errores = {}

//         // Nombre Formulario
//         let campoNombre = document.querySelector(".nombre-input")
//         if (campoNombre.value == ""){
//             errores.nombre = "Debes ingresar un nombre"
//             document.querySelector(".span-nombre").innerHTML = errores.nombre;
//         }else if (campoNombre.value.length < 3){
//             errores.nombre = "El nombre debe tener por lo menos dos caracteres"
//             document.querySelector(".span-nombre").innerHTML = errores.nombre;
//         }

//         // Apellido
//         let campoApellido = document.querySelector(".apellido-input")
//         if (campoApellido.value == ""){
//             errores.apellido = "Debes ingresar un apellido"
//             document.querySelector(".span-apellido").innerHTML = errores.apellido;

//         }else if (campoApellido.value.length < 3){
//             errores.apellido = "El apellido debe tener por lo menos tres caracteres"
//             document.querySelector(".span-apellido").innerHTML = errores.apellido
//         } 

//         // Email
//         let campoEmail = document.querySelector(".email-input")
//         if (campoEmail.value == ""){
//             errores.email = "Debes ingresar un Email"
//             document.querySelector(".span-email").innerHTML = errores.email;
//         }
//         // }else if (regExEmail.test(campoEmail.value)){
//         //     errores.email = "Debe ser un email valido"
//         //     document.querySelector(".span-email").innerHTML = errores.email;
//         // } 

//         // Password

//         let campoPassword = document.querySelector(".password-input")
//         if (campoPassword.value == ""){
//             errores.password = "Debes ingresar una contraseña"
//             document.querySelector(".span-password").innerHTML = errores.password;

//         }else if (regExPassword.test(campoPassword)){
//             errores.password = "Tu contraseña debe contener al menos 8 caracteres"
//             document.querySelector(".span-password").innerHTML = errores.password;
//         } 

//         // RePassword
//         let campoRePassword = document.querySelector(".repassword-input")
//         if (campoRePassword.value == ""){
//             errores.rePassword = "Debes confirmar tu password" 
//             document.querySelector(".span-rePassword").innerHTML = errores.rePassword;
//         }else if (campoRePassword.value.length < 8){
//             errores.rePassword = ""
//             document.querySelector(".span-rePassword").innerHTML = errores.rePassword;
//         } 

//         if (Object.keys(errores).length == 0) {
//             form.submit()
//         }
      
//     })
// })