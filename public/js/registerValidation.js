const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
const regExPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/


window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-register")

    formulario.addEventListener("submit", function(e){

        let errores = {}

        // Nombre 
        if (formulario.firstname.value == ""){
            errores.nombre = "You need a name"
            document.querySelector(".span-nombre").innerHTML = errores.nombre;
            document.querySelector(".nombre-input").classList.add("error")
    

        }else if (formulario.firstname.value.length < 3){
            errores.nombre = "The name must have at least 3 characters"
            document.querySelector(".span-nombre").innerHTML = errores.nombre;
            document.querySelector(".nombre-input").style.border = "2px solid red";

        }

        // Apellido
        if (formulario.lastname.value == ""){
            errores.apellido = "You need a last name"
            document.querySelector(".span-apellido").innerHTML = errores.apellido;
            document.querySelector(".apellido-input").classList.add("error")

        }else if (ormulario.lastname.value.length < 3){
            errores.apellido = "The last name must have at least 3 characters"
            document.querySelector(".span-apellido").innerHTML = errores.apellido
            document.querySelector(".apellido-input").classList.add("error")

        } 

        // Email
        if (formulario.email.value == ""){
            errores.email = "You need an Email"
            document.querySelector(".span-email").innerHTML = errores.email;
            document.querySelector(".email-input").classList.add("error")

        
        }else if (!regExEmail.test(formulario.email.value)){
            errores.email = "Need to be a valid Email"
            document.querySelector(".span-email").innerHTML = errores.email;
            document.querySelector(".email-input").classList.add("error")

        } 

        // Password

        if (formulario.password.value == ""){
            errores.password = "You need a password"
            document.querySelector(".span-password").innerHTML = errores.password;
            document.querySelector(".password-input").classList.add("error")

        }else if (!regExPassword.test(formulario.password)){
            errores.password = "The password need to have have at least 8 characters"
            document.querySelector(".span-password").innerHTML = errores.password;
            document.querySelector(".password-input").classList.add("error")

        }
       
        // RePassword
        if (formulario.confirmpassword.value == ""){
            errores.repassword = "Confirm your password" 
            document.querySelector(".span-repassword").innerHTML = errores.repassword;
        document.querySelector(".repassword-input").classList.add("error")
        
        } else if (formulario.confirmpassword.value != formulario.password.value){
            errores.repassword = "Passwords mustbe equals"
            document.querySelector(".span-repassword").innerHTML = errores.repassword;
        document.querySelector(".repassword-input").classList.add("error")
        } 
        if (formulario.userImage.value == ""){
            errores.userImage = "Upload image"
            document.querySelector(".userImage-error").innerHTML = errores.userImage;
            


        }
        else if (formulario.userImage.value.split(".").pop()){
            let extensiones = ["png", "jpg", "gif", "tiff"]                
                if (!extensiones.includes(formulario.userImage.value.split(".").pop())) {
                    errores.userImage = "Must be a permited image extension"
                    document.querySelector(".userImage-error").innerHTML = errores.userImage;
                    document.querySelector(".userImage").style.borderBottom = "2px solid red";
                  }
            
        }

        if (Object.keys(errores).length > 0) {
            e.preventDefault()
        }
      
    })
})