window.addEventListener("load", function(){
    let productValidation = document.querySelector(".formulario")

    productValidation.addEventListener("submit", function(e){
        let errores = {}

        if (productValidation.name.value == " "){
            errores.name = "Debes ingresar un nombre"
            document.querySelector(".name-error").innerHTML = errores.name;
            document.querySelector(".name").style.borderBottom = "2px solid red";

        }else if (productValidation.name.value.length < 5){
            errores.name = "El nombre debe tener por lo menos cinco caracteres"
            document.querySelector(".name-error").innerHTML = errores.name;
            document.querySelector(".name").style.borderBottom = "2px solid red";

        }
        if (productValidation.detail.value == " "){
            errores.detail = "La descripción no debe estar vacia"
            document.querySelector(".detail-error").innerHTML = errores.detail;
            document.querySelector(".detail").style.borderBottom = "2px solid red";

        }else if (productValidation.detail.value.length < 20){
            errores.detail = "El nombre debe tener por lo menos 20 caracteres"
            document.querySelector(".detail-error").innerHTML = errores.detail;
            document.querySelector(".detail").style.borderBottom = "2px solid red";

        }
        if (productValidation.price.value == ""){
            errores.price = "Debes ingresar un precio"
            document.querySelector(".price-error").innerHTML = errores.price;
            document.querySelector(".price").style.borderBottom = "2px solid red";

        }else if (productValidation.price.value != number){
            errores.price = "Debes ingresar un numero"
            document.querySelector(".price-error").innerHTML = errores.price;
            document.querySelector(".price").style.borderBottom = "2px solid red";
        }

       if (productValidation.artistname.value == " "){
            errores.artistname = "Debes ingresar un nombre"
            document.querySelector(".artistname-error").innerHTML = errores.artistname;
            document.querySelector(".artistname").style.borderBottom = "2px solid red";

        }else if (productValidation.artistname.value.length < 5){
            errores.artistname = "El nombre debe tener por lo menos cinco caracteres"
            document.querySelector(".artistname-error").innerHTML = errores.artistname;
            document.querySelector(".artistname").style.borderBottom = "2px solid red";

        }
        if (productValidation.artistbio.value == " "){
            errores.artistbio = "Debes ingresar una biogrfia"
            document.querySelector(".artistbio-error").innerHTML = errores.artistbio;
            document.querySelector(".artistbio").style.borderBottom = "2px solid red";

        }else if (productValidation.artistbio.value.length < 20){
            errores.artistbio = "La biografia debe tener al menos 20 caracteres"
            document.querySelector(".artistbio-error").innerHTML = errores.artistbio;
            document.querySelector(".artistbio").style.borderBottom = "2px solid red";

        }
        if (productValidation.artistcode.value == ""){
            errores.artistcode = "Debes ingresar un codigo"
            document.querySelector(".artistcode-error").innerHTML = errores.artistcode;
            document.querySelector(".artistcode").style.borderBottom = "2px solid red";

        }else if (productValidation.artistcode.value != number){
            errores.artistcode = "Debes ingresar un numero"
            document.querySelector(".artistcode-error").innerHTML = errores.artistcode;
            document.querySelector(".artistcode").style.borderBottom = "2px solid red";

        }

        if (productValidation.artistimg.value == ""){
            errores.artistimg = "Debes subir una imagen"
            document.querySelector(".artistimg-error").innerHTML = errores.artistimg;


        // }else if (productValidation.artistimg.value.split(".").pop()){
        //     let extensiones = ["png", "jpg", "gif", "tiff"]
        //     for (var i = 0; i < extensiones.length; i++) {
                
        //         if (extensiones[i].includes(productValidation.artistimg.value.split(".").pop())) {
        //             console.log 
        //             // errores.artistimg = "debe ser un archivo vaido"
        //             // document.querySelector(".artistimg-error").innerHTML = errores.artistimg;
        //             // document.querySelector(".artistimg").style.borderBottom = "2px solid red";
        //           }
        //     }
        }


        
         if (Object.keys(errores).length > 0) {
            e.preventDefault()
        }

    })
})
