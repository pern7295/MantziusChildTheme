console.log("Custom JS virker!");

document.querySelector(".jazz_btn").addEventListener("click", clickCategori);

function clickCategori() {
  document.querySelector(".jazz").classList.toggle("jazz_display");
}
console.log("Knap virker");
