const x = document.getElementById("x");
const y = document.getElementById("y");
const container = document.querySelector(".container");

function split() {
  const posX = parseInt(x.value),
    posY = parseInt(y.value);

  container.innerHTML = "";
  container.style.gridTemplateRows = `repeat(${posX}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${posY}, 1fr)`;

  for (let i = 0; i < posX; i++) {
    for (let j = 0; j < posY; j++) {
      container.innerHTML += `
          <div class="item" style="
            background-position: ${(j * 100) / (posY - 1)}% ${
        (i * 100) / (posX - 1)
      }%;
            background-size: ${posY * 100}% ${posX * 100}%;
          "></div>
        `;
    }
  }
}

function anim() {
  const item = document.querySelectorAll(".item");

  let delay = 0;

  item.forEach((e) => {
    setTimeout(() => {
      e.style.opacity = 0;
    }, delay);
    delay += 200;
  });
}
