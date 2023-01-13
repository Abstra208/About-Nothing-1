function home(){
    window.location.assign("/index.html");
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
    document.getElementById("prod_img").className="prod_img_none";
}

function img_changer(prod_name){
    var image = document.getElementById("prod_img");
    var db = { "Phone_1": "img/nothing_phone_1.png","ear_stick": "img/ear_stick.png","ear_1": "img/ear_1.png","power_45w": "img/power_45w.png","black":"img/blacks.png"}
    image.src=db[prod_name];
    image.className="prod_img"
}
