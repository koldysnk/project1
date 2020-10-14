const googleForm = document.getElementById("google-form");
const customForm = document.getElementsByClassName("form-element");
const send = document.getElementById("send");
const openForm = document.getElementById('google-form-button');

document.getElementById('form-type').addEventListener('change', function() {

    
    for (let i=0;i<customForm.length;i++){
        customForm[i].classList.toggle("hidden");
    }
    googleForm.classList.toggle("hidden");
  });

send.addEventListener('click',() => {
    alert("This form of contact is currently under development. Sorry for your inconvenience.");
});

openForm.addEventListener('click',()=>{
    window.open('https://forms.gle/Uj6PD3iNv51tUWUy9');
});