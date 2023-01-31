/*VARIABLE*/
const img_produits = document.querySelector('#img_produits');
const img_about = document.querySelector('#img_about');

const img_phone1 = document.querySelector('#img_phone1');
const img_earstick = document.querySelector('#img_earstick');
const img_ear1 = document.querySelector('#img_ear1');
const img_power45 = document.querySelector('#img_power45');


function home(){
    window.location="index"
}
function produits(){
    window.location="produits"
}
function about(){
    window.location="about"
}

function nav_screen(){
    document.getElementById("nav_dropdown_tin").className="visible_nav_screen";
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
    if (window.location.href == 'https://marques.cf/'){
        const produits = img_produits.getBoundingClientRect();
        const about = img_about.getBoundingClientRect();
        
        const produitsInFrame = (produits.top >= 0 && produits.bottom <= 0);
        const aboutInFrame = (about.top >= 0 && about.bottom <= window.innerHeigh);

        if (produitsInFrame) {
            console.log('Produits is in frame');
            document.querySelector('#products_nav').style.color="white";
            document.querySelector('#about_nav').style.color="white";
            document.querySelector('#nav_title').style.color="white";
        }
        if (aboutInFrame) {
            console.log('About is in frame');
            document.querySelector('#products_nav').style.color="black";
            document.querySelector('#about_nav').style.color="black";
            document.querySelector('#nav_title').style.color="black";
        }
    }
    if (window.location.pathname === '/produits') {
        const phone_1 = img_phone1.getBoundingClientRect();
        const ear_stick = img_earstick.getBoundingClientRect();
        const ear_1 = img_ear1.getBoundingClientRect();
        const power_45 = img_power45.getBoundingClientRect();

        const phone_1InFrame = (phone_1.top >= 0 && phone_1.bottom >= 0);
        const ear_stickInFrame = (ear_stick.top >= 0 && ear_stick.bottom <= window.innerHeight);
        const ear_1InFrame = (ear_1.top >= 0 && ear_1.bottom <= window.innerHeight);
        const power_45InFrame = (power_45.top >= 0 && power_45.bottom <= window.innerHeight);

        if (phone_1InFrame){
            console.log('Phone 1 is in frame');
            document.querySelector('#products_nav').style.color="black";
            document.querySelector('#about_nav').style.color="black";
            document.querySelector('#nav_title').style.color="black";
        }
        if (ear_stickInFrame){
            console.log('Ear stick is in frame');
            document.querySelector('#products_nav').style.color="black";
            document.querySelector('#about_nav').style.color="black";
            document.querySelector('#nav_title').style.color="black";
        }
        if (ear_1InFrame){
            console.log('Ear 1 is in frame');
            document.querySelector('#products_nav').style.color="white";
            document.querySelector('#about_nav').style.color="white";
            document.querySelector('#nav_title').style.color="white";
        }
        if (power_45InFrame){
            console.log('Power 45 is in frame');
            document.querySelector('#products_nav').style.color="white";
            document.querySelector('#about_nav').style.color="white";
            document.querySelector('#nav_title').style.color="white";
        }
    }
    if (window.location.pathname === '/about'){
        
    }
    else {
        console.log(window.location.href)
    }
};


setInterval(checkVisibility, 0);
console.log(document.location.pathname);

