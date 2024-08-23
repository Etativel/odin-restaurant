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

// Best item image
import bestNoodle from "./images/noodle-lomein.png"
import bestChicken from "./images/chicken.png"
import bestBurger from "./images/mayoburger.png"

const bestItemList = [bestChicken, bestBurger,bestNoodle]
const bestItemName = ['Fried Cicken', 'Burger', 'Noodle']

// append to this element with class "best-item-1"
const appendBestItem = function(){
    for (let i = 0; i < bestItemList.length; i++){
        const bestItemImageContainer = document.createElement("img")
        bestItemImageContainer.src = bestItemList[i]
        bestItemImageContainer.classList.add(`best-item-img-${i}`)
        const currentItem = document.querySelector(`.best-item-${i+1}`)
        currentItem.appendChild(bestItemImageContainer)
        console.log(currentItem)

        //This is the title and order link container
        const bestItemTitleContainer = document.createElement("div") 
        bestItemTitleContainer.classList.add(`b-title-container`)

        //This is the order title
        const bestItemTitle = document.createElement("p") 
        bestItemTitle.textContent = bestItemName[i]
        bestItemTitle.classList.add(`b-item-title`)

        //This is the order link
        const bestItemOrder = document.createElement("a")
        bestItemOrder.classList.add(`b-item-order-link`)
        bestItemOrder.textContent = "Order Now"
        bestItemOrder.href = "#coming-soon"

        //Append the both p tag. The title and the link
        bestItemTitleContainer.appendChild(bestItemTitle)
        bestItemTitleContainer.appendChild(bestItemOrder)

        //Append to the main container for current item
        currentItem.appendChild(bestItemTitleContainer)
    }
}

appendBestItem()

const menuImgs = document.querySelectorAll('.menu-img');

// Loop through each element and append an image
menuImgs.forEach(menuImg => {
    const menuImageElem = document.createElement('img');
    menuImageElem.src = hugeHeaderImage;
    menuImageElem.classList.add('image-1');
    menuImg.appendChild(menuImageElem);
});


