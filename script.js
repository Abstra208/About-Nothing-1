function home(){
    window.location="index.html"
}
function tous_les_produits(){
    window.location="produits.html"
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

const element = document.querySelector('#produits');

const checkVisibility = () => {
  const rect = element.getBoundingClientRect();
  const isInFrame = (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
  if (isInFrame) {
    console.log((element) + ' is NOT in frame');
  } else {
    console.log((element) + ' is in frame');
  }
};

setInterval(checkVisibility, 500);

