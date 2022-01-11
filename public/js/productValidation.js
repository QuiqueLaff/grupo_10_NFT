window.addEventListener("load", function(){
    let productValidation = document.querySelector(".formulario")

    productValidation.addEventListener("submit", function(e){
        e.preventDefault()

        let errores = {}

        if (formulario.name.value == " "){
            errores.nombre = "El producto debe tener un nombre"
            document.querySelector(".span-nombre").innerHTML = errores.nombre;
            document.querySelector(".span-nombre").style.border = "2px solid blue";

        }else if (formulario.firstname.value.length < 3){
            errores.nombre = "El nombre debe tener por lo menos dos caracteres"
            document.querySelector(".span-nombre").innerHTML = errores.nombre;
            document.querySelector(".span-nombre").style.border = "2px solid blue";

        }





    })


})