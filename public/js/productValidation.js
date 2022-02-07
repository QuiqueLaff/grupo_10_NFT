window.addEventListener("load", function(){
    let productValidation = document.querySelector(".formulario")

    productValidation.addEventListener("submit", function(e){
        let errores = {}

        if (productValidation.name.value == ""){
            errores.name = "You need a name"
            document.querySelector(".name-error").innerHTML = errores.name;
            document.querySelector(".name").style.borderBottom = "2px solid red";
            document.querySelector(".name-error").classList.add("estilo")

            


        }else if (productValidation.name.value.length < 5){
            errores.name = "You need to have al list fice characters"
            document.querySelector(".name-error").innerHTML = errores.name;
            document.querySelector(".name").style.borderBottom = "2px solid red";
            document.querySelector(".name-error").classList.add("estilo")


        }
        if (productValidation.detail.value == ""){
            errores.detail = "Description is empty"
            document.querySelector(".detail-error").innerHTML = errores.detail;
            document.querySelector(".detail").style.borderBottom = "2px solid red";
            document.querySelector(".detail-error").classList.add("estilo")


        }else if (productValidation.detail.value.length < 20){
            errores.detail = "The detail need to hace at least 20 characters"
            document.querySelector(".detail-error").innerHTML = errores.detail;
            document.querySelector(".detail").style.borderBottom = "2px solid red";
            document.querySelector(".detail-error").classList.add("estilo")

        }
        if (productValidation.price.value == ""){
            errores.price = "The product need a price"
            document.querySelector(".price-error").innerHTML = errores.price;
            document.querySelector(".price").style.borderBottom = "2px solid red";
            document.querySelector(".price-error").classList.add("estilo")

        }else if (productValidation.price.value != number){
            errores.price = "Must be a number"
            document.querySelector(".price-error").innerHTML = errores.price;
            document.querySelector(".price").style.borderBottom = "2px solid red";
            document.querySelector(".price-error").classList.add("estilo")
        }

       if (productValidation.artistname.value == ""){
            errores.artistname = "The product need a name"
            document.querySelector(".artistname-error").innerHTML = errores.artistname;
            document.querySelector(".artistname").style.borderBottom = "2px solid red";
            document.querySelector(".artistname-error").classList.add("estilo")


        }else if (productValidation.artistname.value.length < 5){
            errores.artistname = "The name must have at least 5 characters"
            document.querySelector(".artistname-error").innerHTML = errores.artistname;
            document.querySelector(".artistname").style.borderBottom = "2px solid red";
            document.querySelector(".artistname-error").classList.add("estilo")


        }
        if (productValidation.artistbio.value == ""){
            errores.artistbio = "You need to add a Bio"
            document.querySelector(".artistbio-error").innerHTML = errores.artistbio;
            document.querySelector(".artistbio").style.borderBottom = "2px solid red";
            document.querySelector(".artistbio-error").classList.add("estilo")


        }else if (productValidation.artistbio.value.length < 20){
            errores.artistbio = "The Bio need to have at least 20 characters"
            document.querySelector(".artistbio-error").innerHTML = errores.artistbio;
            document.querySelector(".artistbio").style.borderBottom = "2px solid red";
            document.querySelector(".artistbio-error").classList.add("estilo")


        }
        if (productValidation.artistcode.value == ""){
            errores.artistcode = "You need a code"
            document.querySelector(".artistcode-error").innerHTML = errores.artistcode;
            document.querySelector(".artistcode").style.borderBottom = "2px solid red";
            document.querySelector(".artistcode-error").classList.add("estilo")


        }else if (productValidation.artistcode.value != number){
            errores.artistcode = "Must be a number"
            document.querySelector(".artistcode-error").innerHTML = errores.artistcode;
            document.querySelector(".artistcode").style.borderBottom = "2px solid red";
            document.querySelector(".artistcode-error").classList.add("estilo")

        }

        if (productValidation.artistimg.value == ""){
            errores.artistimg = "Upload a image"
            document.querySelector(".artistimg-error").innerHTML = errores.artistimg;
            document.querySelector(".artistimg-error").classList.add("estilo")



        }else if (productValidation.artistimg.value.split(".").pop()){
            let extensiones = ["png", "jpg", "gif", "tiff"]                
                if (!extensiones.includes(productValidation.artistimg.value.split(".").pop())) {
                    errores.artistimg = "The file has to be: png, jpg, gif, tiff!"
                    document.querySelector(".artistimg-error").innerHTML = errores.artistimg;
                    document.querySelector(".artistimg").style.borderBottom = "2px solid red";
                    document.querySelector(".artistimg-error").classList.add("estilo")

                  }
            
        }

         if (Object.keys(errores).length > 0) {
            e.preventDefault()
        }

    })
})
