/*LOAD NAVBAR*/
$(function(){
    $("header").load("https://marques.cf/xyz/yxt/header.html");
});

/*VARIABLE*/
const body = document.querySelector("body");


/*navbar*/
const navTitles = document.querySelectorAll('.nav_title');

function nav_dropdown(){
    document.querySelector("#screen_big").style.backgroundColor="black";
    document.querySelector("#nav_title").style.color="white";
    document.querySelector("#produits_nav").style.color="white";
    document.querySelector("#about_nav").style.color="white";
}
function nav_dropdown_none(){
    document.querySelector("#screen_big").style.backgroundColor="transparent";
    document.querySelector("#nav_title").style.color="black";
    document.querySelector("#produits_nav").style.color="black";
    document.querySelector("#about_nav").style.color="black";
}

function navigation(page){
    if (page === "home"){
        window.location.href="http://marques.cf";
    }
    if (page === "produits"){
        window.location.href="http://marques.cf/produits";
    }
    if (page === "about"){
        window.location.href="http://marques.cf/pages/about";
    }
    if (page === "phone_1"){
        window.location.href="http://marques.cf/produits/phone-1";
    }
    if (page === "audio"){
        window.location.href="http://marques.cf/pages/audio";
    }
    if (page === "ear_stick"){
        window.location.href="http://marques.cf/produits/ear-stick";
    }
    if (page === "ear_1"){
        window.location.href="http://marques.cf/produits/ear-1";
    }
    if (page === "accessoires"){
        window.location.href="http://marques.cf/pages/accessoires";
    }
    if (page === "power_45"){
        window.location.href="https://marques.cf/produits/power-45";
    }

    if (page === "about"){
        window.location.href="https://marques.cf/about";
    }
    if (page === "CarlP"){
        window.location.href="https://marques.cf/about/CarlP"
    }
    if (page === "LudovicM"){
        window.location.href="https://marques.cf/about/LudovicM"
    }
}


function nav_screen(){
    const nav_dropdown_display = document.getElementById("nav_dropdown_tin").style.display;
    const nav_dropdown = document.getElementById("nav_dropdown_tin");
    const fleche_nav_screen = document.querySelector("#fleche_nav_screen");

    if (nav_dropdown_display === 'contents'){
        nav_dropdown.style.display="none";
        fleche_nav_screen.style.transform="rotate(0deg)";
    } else{
        nav_dropdown.style.display="contents";
        fleche_nav_screen.style.transform="rotate(180deg)";
    }
}

//CLIC DROIT
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    let menu = document.querySelector("#menu");
    menu.classList.toggle("active");
    let posX = event.clientX;
    let posY = event.clientY;
    let maxX = window.innerWidth - menu.clientWidth - 25;
    let maxY = window.innerHeight - menu.clientHeight - 25;
    if(posX > maxX){
        posX = maxX;
    }
    if(posY > maxY){
        posY = maxY;
    }
    document.querySelector("#menu").style.top = posY + "px";
    document.querySelector("#menu").style.left = posX + "px";
});
document.querySelector("article").addEventListener("click", function(){
    menu.classList.remove("active");
});

//MENU CLIC DROIT
function active(element){
    if (element === "produits"){
        const menu_P = document.querySelector("#menu_P");
        const menu_A = document.querySelector("#menu_A");
        menu_P.classList.toggle("active");
        menu_A.classList.remove("active");
    }
    if (element === "about"){
        const menu_P = document.querySelector("#menu_P");
        const menu_A = document.querySelector("#menu_A");
        menu_A.classList.toggle("active");
        menu_P.classList.remove("active");
    }
}