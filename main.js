const collapseRows = document.querySelectorAll("a[data-collapse-id]");

for (let collapseRow of collapseRows) {
  collapseRow.addEventListener("click", event => {
    let collapseContent = document.getElementById(event.currentTarget.dataset.collapseId);

    event.currentTarget.querySelector('span').classList.toggle("show"); // rotate arrow
    collapseContent.classList.toggle("show");
    if (collapseContent.style.maxHeight){
      collapseContent.style.maxHeight = null;
      setTimeout(()=> {
        collapseContent.style.padding = null;
      }, 150);

    } else {
      collapseContent.style.maxHeight = collapseContent.scrollHeight + "px";
      collapseContent.style.padding = "20px 0";
    }
  })
};

const personaSliderBox = document.querySelector(".personaSliderBox");

if (personaSliderBox) {
  let sliderPersona = tns({
    "container": ".personaSliderBox",
    "items": 3,
    "preventScrollOnTouch": "auto",
    "speed": 400,
    "nav": false,
    "navContainer": ".dots_nav",
    "controlsContainer": ".persona-slider__controls"
  });
}

const dotsNav = document.querySelectorAll(".dots_nav li"),
      prevBtn = document.querySelector("button[data-controls='prev']"),
      nextBtn = document.querySelector("button[data-controls='next']");

for(let [index, dotNav] of dotsNav.entries()) {
  dotNav.addEventListener("click", event => {

    if (index+1 > 3) {

    }

    dotsRender(event.currentTarget);
  })
}

const prevDot = ()=> {
 let  target = document.querySelector(".dots_nav li.active").previousElementSibling,
      lastElement = dotsNav[dotsNav.length - 1];

 dotsRender(target ? target : lastElement);

}

const nextDot = ()=> {
  let target = document.querySelector(".dots_nav li.active").nextElementSibling;

  dotsRender(target ? target : dotsNav[0]);
}

const dotsRender = target => {
  for(let dotNav of dotsNav) {
    dotNav.classList.remove("active");
  }

  target.classList.add("active")
}

prevBtn.addEventListener("click", prevDot);
nextBtn.addEventListener("click", nextDot);