const divs = document.querySelectorAll(".left");
const rounds = document.querySelectorAll(".round");
const btn = document.querySelector(".btn");

divs.forEach((elem, index) => {
  //Moves the arrows on click
  elem.addEventListener("click", () => stylesArrow(elem, index));
});

btn.addEventListener("click", () => {
  //Reset all functionality.
  divs.forEach((elem, index) => {
    elem.style.justifyContent = "space-between";
    rounds[index].style.backgroundColor = getRoundColor(index);
  });
});

//Styles the round after click.
function stylesArrow(elem, index) {
  elem.style.justifyContent = "start";
  rounds[index].style.backgroundColor = "grey";
}

//Reset the color of round
function getColorReset(index) {
  switch (index) {
    case 0:
      return "yellow";
    case 1:
      return "rgb(23, 87, 236)";
    case 2:
      return "red";
    default:
      return "green";
  }
}
