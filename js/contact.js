const googleForm = document.getElementById("google-form");
const customForm = document.getElementsByClassName("form-element");

document.getElementById('form-type').addEventListener('change', function() {

    
    for (let i=0;i<customForm.length;i++){
        customForm[i].classList.toggle("hidden");
    }
    googleForm.classList.toggle("hidden");
  });