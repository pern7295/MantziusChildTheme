console.log("Custom JS virker!");

//JSON object med hver enkelte image. Hver "key" i objektet er den klasse som et image tag har, herunder kan du angive
//linket som det billede skal føre hen til.
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
    link: "kultimangoes",
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

//Her angiver du den klasse som anchor-tags'ne kan have.
let anchorTagClassName = "concert-link";

//#region Metode kald

addAnchorTagToIMG();

document
  .querySelector(".jatak_tilmeld_knap")
  .addEventListener("mousedown", jatak);
document
  .querySelector(".maaske_tilmeld_knap")
  .addEventListener("mousedown", jamaaske);

//#endregion

//#region Metoder
function jatak() {
  document.querySelector(".tilmeld_jatak_js").classList.toggle("display_none");
  document.querySelector(".tilmeld_maaske_js").classList.add("display_none");
}

function jamaaske() {
  document.querySelector(".tilmeld_maaske_js").classList.toggle("display_none");
  document.querySelector(".tilmeld_jatak_js").classList.add("display_none");
}

//Method adds each <a>-tag to the parent div of the div with the class of element.
function addAnchorTagToIMG() {
  //Element er streng-værdien af de klasser af de img-tags, som vi gerne vil tilføje et link til
  Object.keys(images).forEach((element) => {
    let imageTag = document.querySelector("." + element);

    //Check for om ImageTag eksistere.
    if (imageTag != null || imageTag != undefined) {
      let anchorTag = document.createElement("a");
      anchorTag.href = images[element].link;
      anchorTag.className = anchorTagClassName;

      imageTag.parentNode.appendChild(anchorTag);
      anchorTag.appendChild(imageTag);

      console.log(imageTag);
    }
  });
}

//#endregion
