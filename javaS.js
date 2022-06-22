const toggleButton=document.getElementsByClassName("togglebtn")[0]
const navLinks=document.getElementsByClassName("nav_links")[0]

toggleButton.addEventListener('click' ,()=>{
    navLinks.classList.toggle("active");
})