console.log("Custom JS virker!");

gsap.registerPlugin(ScrollTrigger);

const containers = document.querySelectorAll("h2");

containers.forEach((container) => {
  const h2s = container.querySelector("gsapTry");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 50%",
        end: "+=200",
        scrub: true,
        //pin: true,
        // markers: true,
      },
    })

    .from(h2s, {
      duration: 2,
      opacity: 0,
    });
});

console.log("GSAP VIRKER");

document.querySelector(".jazz_btn").addEventListener("click", clickCategori);

function clickCategori() {
  document.querySelector(".jazz").classList.toggle("jazz_display");
}
console.log("Knap virker");
