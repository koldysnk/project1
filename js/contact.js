const googleForm = document.getElementById("google-form");
const customForm = document.getElementsByClassName("form-element");
const send = document.getElementById("send");
const openForm = document.getElementById('google-form-button');


// for changing the active form
document.getElementById('form-type').addEventListener('change', function() {

    
    for (let i=0;i<customForm.length;i++){
        customForm[i].classList.toggle("hidden");
    }
    googleForm.classList.toggle("hidden");
});


//for showing alert when submit is clicked
send.addEventListener('click',() => {
    alert("This form of contact is currently under development. Sorry for your inconvenience.");
});


//for opening google form
openForm.addEventListener('click',()=>{
    window.open('https://forms.gle/Uj6PD3iNv51tUWUy9');
});