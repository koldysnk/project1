const navigation = document.getElementById('nav');
const mobileNav = document.getElementById("mobile-nav");


// for nav list on mobile 
mobileNav.addEventListener('click', event =>{
    navigation.classList.toggle('open');
    event.stopPropagation();
});
document.addEventListener('click', () =>{
    navigation.classList.remove('open');
});