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
    var image = document.getElementById("img_pro_nav").src="img/audio_tin.png"
}

function img_changer(prod_name){
    var image = document.getElementById("img_pro_nav")
    if ([prod_name == "Phone_1"]){
        image.src="img/phone1_tin.png";
    }else if ([prod_name == "audio"]){
        image.src="img/audio_tin.png";
    }else if ([prod_name == "ear_stick"]){
        image.src="img/earstick_tin.png";
    }else if ([prod_name == "ear_1"]){
        image.src="img/ear1_tin.png";
    }else if ([prod_name == "power_45w"]){
        image.src="img/power45_tin.png";
    }else{
        image.src="img/audio_tin.png"
    }
};