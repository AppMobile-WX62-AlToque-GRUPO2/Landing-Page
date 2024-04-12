//header
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

let sectionBtn = document.querySelectorAll('.btn-nav');

sectionBtn[0].onclick = function(){
    for(i=0; i<4; i++){
        sectionBtn[i].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
}
sectionBtn[1].onclick = function(){
    for(i=0; i<4; i++){
        sectionBtn[i].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
}
sectionBtn[2].onclick = function(){
    for(i=0; i<4; i++){
        sectionBtn[i].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
}
sectionBtn[3].onclick = function(){
    for(i=0; i<4; i++){
        sectionBtn[i].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
}

/*el color del header cambia a blanco al salir de su posición inicial*/
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});


//login desde el landing page
function login(){
    var user, password;

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;

    if(user == "Hola" && password == "Hola1234"){
        alert("Hola de nuevo! :) " + user);
        window.open("https://fastservice-e75c1.web.app/"); 
    }
    else{
        alert("Hay un error en su cuenta, intente de nuevo :/")
    }
}
