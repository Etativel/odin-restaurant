import "./styles/style.css"

import image from "./images/burger.png"

const imageContainer = document.querySelector(".image-container")
const headImage = document.createElement("img")
headImage.src = image
headImage.classList.add('huge-image')
imageContainer.appendChild(headImage)
