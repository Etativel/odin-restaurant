import "./styles/style.css"

import hugeHeaderImage from "./images/burger.png"
import headerMascotImage from "./images/mascot-nobg.png"

const imageContainer = document.querySelector(".image-container")
const headImage = document.createElement("img")
headImage.src = hugeHeaderImage
headImage.classList.add('huge-image')
imageContainer.appendChild(headImage)

const mascotContainer = document.querySelector('.mascot-img-container')
const mascotImage = document.createElement("img")
mascotImage.src = headerMascotImage
mascotImage.classList.add('mascot-img')
mascotContainer.appendChild(mascotImage)
