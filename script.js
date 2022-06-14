function createGrid() {
  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 16; j++) {
      let box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
    }
    document.getElementById("container").appendChild(row);
  }
}
function buttonHover() {
  this.style.border = "3px solid white";
}

const boxhover = document.querySelectorAll(".box");
boxhover.forEach((boxhover) =>
  boxhover.addEventListener("mouseover", buttonHover)
);
