function home(){
    if (window.location.href == "https://marques.cf/index.html"){
        window.location.assign("/index.html");     
    }else{
        console.log("erreur");
    }
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