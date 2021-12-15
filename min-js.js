console.log("Custom JS virker!");



document.querySelector(".jatak_tilmeld_knap").addEventListener("mousedown", jatak);
document.querySelector(".maaske_tilmeld_knap").addEventListener("mousedown", jamaaske);

function jatak(){
    document.querySelector(".tilmeld_jatak_js").classList.toggle("display_none");
    document.querySelector(".tilmeld_maaske_js").classList.add("display_none");
    
}

function jamaaske(){
    document.querySelector(".tilmeld_maaske_js").classList.toggle("display_none");
    document.querySelector(".tilmeld_jatak_js").classList.add("display_none");

}