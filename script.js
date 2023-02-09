/*LOAD NAVBAR*/
$(function(){
    $("header").load("https://marques.cf/xyz/yxt/header.html");
});

/*VARIABLE*/
const body = document.querySelector("body");

const img_produits = document.querySelector('#img_produits');
const img_about = document.querySelector('#img_about');

const img_phone1 = document.querySelector('#img_phone1');
const img_earstick = document.querySelector('#img_earstick');
const img_ear1 = document.querySelector('#img_ear1');
const img_power45 = document.querySelector('#img_power45');


/*navbar*/
const nav_bar = ;

function nav_dropdown(){
    document.querySelector("#screen_big").style.backgroundColor="black";
}


function home(){
    window.location.href="https://marques.cf/index"
}
function produits(){
    window.location.href="https://marques.cf/produits"
}
function about(){
    window.location.href="https://marques.cf/about"
}

function phone_1(){
    window.location.href="https://marques.cf/produits/phone-1"
}
function audio(){
    window.location.href="https://marques.cf/pages/audio"
}
function ear_stick(){
    window.location.href="https://marques.cf/produits/ear-stick"
}
function ear_1(){
    window.location.href="https://marques.cf/produits/ear-1"
}
function power_45(){
    window.location.href="https://marques.cf/produits/power-45"
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

function img_changer_p(prod_name){
    var image = document.getElementById("img_pro_nav");
    var db = { "Phone_1": "img/phone1_tin.png","audio": "img/audio_tin.png","ear_stick": "img/earstick_tin.png","ear_1": "img/ear1_tin.png","power_45w": "img/power45_tin.png"}
    image.src=db[prod_name];
}
function img_changer_m(prod_name){
    var image = document.getElementById("img_mon_nav");
    var db = { "Carl" : "img/carl-pei_tin.png", "Ludovic" : "img/2profil.png" , "noir" : "img/black.png" }
    image.src=db[prod_name];
}


const checkVisibility = () => {
    const body = document.querySelector("body").id;

    if (body === ("produits")) {
        const power_45 = img_power45.getBoundingClientRect();
        const power_45InFrame = (power_45.top === 0);

        if (power_45InFrame){
            document.querySelector('#products_nav').style.color="white";
            document.querySelector('#about_nav').style.color="white";
            document.querySelector('#nav_title').style.color="white";
        }else{
            document.querySelector('#products_nav').style.color="black";
            document.querySelector('#about_nav').style.color="black";
            document.querySelector('#nav_title').style.color="black";
        }
    }else {
        console.log(body)
    }
};


setInterval(checkVisibility, 0);