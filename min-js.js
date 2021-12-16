console.log("Custom-JS loaded");

//"let images", viser obejcter, der har det unikke klasse-navn for billedet, vi vil kalde på.
//Vi tilføjer "link" og "artist", som er værdier vi vile lægge til billedet - senere i scriptet!
let images = {
  "wp-image-950": {
    link: "folkeklubben",
    artist: "Folkeklubben",
  },

  "wp-image-951": {
    link: "jada",
    artist: "Jada",
  },

  "wp-image-952": {
    link: "kutimangoes",
    artist: "Kutimangoes",
  },

  "wp-image-953": {
    link: "alberte-winding",
    artist: "Alberte Winding",
  },

  "wp-image-954": {
    link: "annika-aakjaer",
    artist: "Annika Aakjær",
  },

  "wp-image-955": {
    link: "eran-dd",
    artist: "Eran DD",
  },

  "wp-image-956": {
    link: "koppel-mulberry-street",
    artist: "Koppel Mulberry Street",
  },

  "wp-image-957": {
    link: "mads-langer",
    artist: "Mads Langer",
  },
};

//Her angiver vi en styling-klasse, som vi vil give til alle <a>-tag, så de kan styles ens, fx med en hover-effekt
let anchorTagClassName = "concert-link";

//Vi sætter funktionen addAnchorTagToIMG i gang
addAnchorTagToIMG();

//Her kalder vi andre funktioner med en eventlistener - de kalder på en toogle-funktion
document
  .querySelector(".jatak_tilmeld_knap")
  .addEventListener("mousedown", jatak);
document
  .querySelector(".maaske_tilmeld_knap")
  .addEventListener("mousedown", jamaaske);

//Toogle-funktion fra kaldet "jatak"
function jatak() {
  document.querySelector(".tilmeld_jatak_js").classList.toggle("display_none");
  document.querySelector(".tilmeld_maaske_js").classList.add("display_none");
}

//Toogle-funktion fra kaldet "jamaaske"
function jamaaske() {
  document.querySelector(".tilmeld_maaske_js").classList.toggle("display_none");
  document.querySelector(".tilmeld_jatak_js").classList.add("display_none");
}

//funktionen addAnchorTagToIMG begynder. I denne funktion, vil vi gerne tilføje værdierne fra "let image"-objecterne
function addAnchorTagToIMG() {
  //Obejct.keys(images) refererer til at vi tager nøglerne i "let images", altså link og artist
  //Vi kører et forEach-loop, og for hvert "element" i dette loop ...
  Object.keys(images).forEach((element) => {
    //vi laver en variabel, hvor vi giver det et ".", for at lave det til en klasse som kan styles i css.
    let imageTag = document.querySelector("." + element);

    //Vi benytter en if-statement til at tjekke om klasserne på billederne findes (da de kun skal kunne findes på forsiden, hvor de ligger)
    //Hvis imageTag IKKE er null (udefineret), ELLER imageTag = IKKE er udefineret ... (altså at billederne FINDES)...
    //... Da tilføjer vi et <a>-tag. som vi kalder anchorTag, som vi giver href-værdien fra "link"...
    //... Og tilføjer addAnchorTagToIMG så vi kan lave en hover på billedet
    if (imageTag != null || imageTag != undefined) {
      let anchorTag = document.createElement("a");
      anchorTag.href = images[element].link;
      anchorTag.className = anchorTagClassName;

      //Nu tager vi og tilføjer <a>-tagget og sætter vores <img>-tag (billedet fra vores obejct) sammen
      imageTag.parentNode.appendChild(anchorTag);
      anchorTag.appendChild(imageTag);

      //I HTML ser det således ud:
      //<figure>
      //<a>
      //<img/>
      //</a>
      //</figure>

      //Nu fungerer billedet som et <a>-tag

      console.log(imageTag);
    }
  });
}
