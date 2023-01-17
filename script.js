function home(){
    window.location=""
}
function tous_les_produits(){
    window.location="produits.html"
}

function black_nav(){
    document.getElementById("nav").className="black";
    document.getElementById("products_nav").className="text_white";
    document.getElementById("about_nav").className="text_white";
    document.getElementById("nav_title").className="text_white";
}
function white_nav(){
    document.getElementById("nav").className="white";
    document.getElementById("products_nav").className="text_black";
    document.getElementById("about_nav").className="text_black";
    document.getElementById("nav_title").className="text_black";
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

