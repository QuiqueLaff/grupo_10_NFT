const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
const regExPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/


window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-register")

    formulario.addEventListener("submit", function(e){

        let errores = {}

        // Nombre 
        if (formulario.firstname.value == " "){
            errores.nombre = "Debes ingresar un nombre"
            document.querySelector(".span-nombre").innerHTML = errores.nombre;
            document.querySelector(".nombre-input").classList.add("error")
    

        }else if (formulario.firstname.value.length < 3){
            errores.nombre = "El nombre debe tener por lo menos dos caracteres"
            document.querySelector(".span-nombre").innerHTML = errores.nombre;
            document.querySelector(".nombre-input").style.border = "2px solid red";

        }

        // Apellido
        if (formulario.lastname.value == ""){
            errores.apellido = "Debes ingresar un apellido"
            document.querySelector(".span-apellido").innerHTML = errores.apellido;
            document.querySelector(".apellido-input").classList.add("error")

        }else if (ormulario.lastname.value.length < 3){
            errores.apellido = "El apellido debe tener por lo menos tres caracteres"
            document.querySelector(".span-apellido").innerHTML = errores.apellido
            document.querySelector(".apellido-input").classList.add("error")

        } 

        // Email
        if (formulario.email.value == ""){
            errores.email = "Debes ingresar un Email"
            document.querySelector(".span-email").innerHTML = errores.email;
            document.querySelector(".email-input").classList.add("error")

        
        }else if (!regExEmail.test(formulario.email.value)){
            errores.email = "Debe ser un email valido"
            document.querySelector(".span-email").innerHTML = errores.email;
            document.querySelector(".email-input").classList.add("error")

        } 

        // Password

        if (formulario.password.value == ""){
            errores.password = "Debes ingresar una contraseña"
            document.querySelector(".span-password").innerHTML = errores.password;
            document.querySelector(".password-input").classList.add("error")

        }else if (!regExPassword.test(formulario.password)){
            errores.password = "Debe contener un numero, una mayuscula y mas de ocho caracteres"
            document.querySelector(".span-password").innerHTML = errores.password;
            document.querySelector(".password-input").classList.add("error")

        }
       
        // RePassword
        if (formulario.confirmpassword.value == ""){
            errores.repassword = "Debes confirmar tu password" 
            document.querySelector(".span-repassword").innerHTML = errores.repassword;
        document.querySelector(".repassword-input").classList.add("error")
        
        } else if (formulario.confirmpassword.value != formulario.password.value){
            errores.repassword = "los passwords no son iguales"
            document.querySelector(".span-repassword").innerHTML = errores.repassword;
        document.querySelector(".repassword-input").classList.add("error")
        } 
        if (formulario.userImage.value == ""){
            errores.userImage = "Debes subir una imagen"
            document.querySelector(".userImage-error").innerHTML = errores.userImage;
            


        }
        else if (formulario.userImage.value.split(".").pop()){
            let extensiones = ["png", "jpg", "gif", "tiff"]                
                if (!extensiones.includes(formulario.userImage.value.split(".").pop())) {
                    errores.userImage = "debe ser un archivo vaido"
                    document.querySelector(".userImage-error").innerHTML = errores.userImage;
                    document.querySelector(".userImage").style.borderBottom = "2px solid red";
                  }
            
        }

        if (Object.keys(errores).length > 0) {
            e.preventDefault()
        }
      
    })
})