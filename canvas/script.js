const x = document.getElementById("x")
const y = document.getElementById("y")
const container = document.querySelector(".container")

function split() {
    const posX = x.value, posY = y.value

    container.innerHTML = ""
    container.style.gridTemplateRows = `repeat(${posX}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${posY}, 1fr)`

    for (let i = 0; i < posY; i++) {
        for (let a = 0; a < posX; a++) {
            container.innerHTML += `<div class="item" style="background-position: ${100 / posX}% ${100 / posY}%; background-size: ${(100/posX-1) * a}% ${(100/posY-1) * i}%;"></div>`
        }
    }
}

function anim() {
    const item = document.querySelectorAll(".item")

    let delay = 0

    item.forEach(e=>{
        setTimeout(()=>{e.style.opacity = 0}, delay)
        delay+=200
    })
}