
let forms = document.querySelectorAll(".form-delete")
console.log(forms)

forms.forEach(formDelete => {
    formDelete.addEventListener('submit', (e) => {
        e.preventDefault();
        swal({
            title: "Whant to delete this user?",
            text: "Last chance",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((resultado) => {
            if (!resultado) {
              swal("Better to keep it", {
                icon: "success",
              });
            } else {
              formDelete.submit()
            }
          });
    })
});