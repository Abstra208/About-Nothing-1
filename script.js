/*VARIABLE*/
const img_produits = document.querySelector('#img_produits');
const img_about = document.querySelector('#img_about');

const img_phone1 = document.querySelector('#img_phone1');
const img_earstick = document.querySelector('#img_earstick');
const img_ear1 = document.querySelector('#img_ear1');
const img_power45 = document.querySelector('#img_power45');


function home(){
    window.location="accueil"
}
function tous_les_produits(){
    window.location="produits"
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
    if (window.location.pathname === '/index.html'){
        const produits = img_produits.getBoundingClientRect();
        const about = img_about.getBoundingClientRect();
        
        const produitsInFrame = (produits.top >= 0 && produits.left >= 0 && produits.bottom <= window.innerHeight && produits.right <= window.innerWidth);
        const aboutInFrame = (about.top >= 0 && about.left >= 0 && about.bottom <= window.innerHeight && about.right <= window.innerWidth);

        if (produitsInFrame) {
            console.log('Produits is in frame');
        }
        if (aboutInFrame) {
            console.log('About is in frame');
        }
    } else {
        const phone_1 = img_phone1.getBoundingClientRect();
        const ear_stick = img_earstick.getBoundingClientRect();
        const ear_1 = img_ear1.getBoundingClientRect();
        const power_45 = img_power45.getBoundingClientRect();

        const phone_1InFrame = (phone_1.top >= 0 && phone_1.left >= 0 && phone_1.bottom <= window.innerHeight && phone_1.right <= window.innerWidth);
        const ear_stickInFrame = (ear_stick.top >= 0 && ear_stick.left >= 0 && ear_stick.bottom <= window.innerHeight && ear_stick.right <= window.innerWidth);
        const ear_1InFrame = (ear_1.top >= 0 && ear_1.left >= 0 && ear_1.bottom <= window.innerHeight && ear_1.right <= window.innerWidth);
        const power_45InFrame = (power_45.top >= 0 && power_45.left >= 0 && power_45.bottom <= window.innerHeight && power_45.right <= window.innerWidth);

        if (phone_1InFrame){
            console.log('Phone 1 is in frame');
        }
        if (ear_stickInFrame){
            console.log('Ear stick is in frame');
        }
        if (ear_1InFrame){
            console.log('Ear 1 is in frame');
        }
        if (power_45InFrame){
            console.log('Power 45 is in frame');
        }
    }
};


setInterval(checkVisibility, 500);
console.log(document.location.pathname);

