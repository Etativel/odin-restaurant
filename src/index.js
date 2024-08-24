import "./styles/style.css"

import hugeHeaderImage from "./images/burger.png"
import headerMascotImage from "./images/mascot-nobg.png"
import webIcon from "./images/cutlery.png"

// favicon
const iconContainer = document.querySelector('.favicon')
iconContainer.href = webIcon

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
        // console.log(currentItem)

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

// Append menu selection

const menuSelectionContainer = document.querySelector('.menu-selection-container')

const menuOptions = {
    items: []
  };

const addMenu = (name, reviews, price, image) => {
    menuOptions.items.push({
        'name':name,
        'reviews':reviews,
        'price':price,
        'image':image
        
    })
}

addMenu('Classic Beef Patty',' 241','$4.40',"./images/mayoburgerMenu.png")
addMenu('Homemade Cookies',' 130','$2.20',"./images/cookies.png")
addMenu('Lo Mein Noodles',' 223','$3.20',"./images/noodle-lomeinMenu.png")
addMenu('Pad Thai Noodles',' 130','$4.20',"./images/pad-thai.png")
addMenu('Pepperoni Pizza',' 112','$5.20',"./images/pizaa.png")
addMenu('Beef Shawarma',' 140','$4.40',"./images/shawarma.png")
addMenu('Soft Beef Tacos',' 111','$3.40',"./images/tacos.png")
addMenu('Classic Cheese Burger',' 230','$4.40',"./images/burger.png")
addMenu('Original Fried Chicken',' 211','$4.30',"./images/chicken.png")



// need to make this dynamically
// const imageAddresses = menuOptions.items.map(item => item['image']);
import classicBeefPattyImg from './images/mayoburgerMenu.png';
import homemadeCookiesImg from './images/cookies.png';
import loMeinNoodlesImg from './images/noodle-lomeinMenu.png';
import padThaiNoodlesImg from './images/pad-thai.png';
import pepperoniPizzaImg from './images/pizaa.png';
import beefShawarmaImg from './images/shawarma.png';
import softBeefTacosImg from './images/tacos.png';
import classicCheeseBurgerImg from './images/burger.png';
import originalFriedChickenImg from './images/chicken.png';

const imageList = [
    classicBeefPattyImg,
    homemadeCookiesImg,
    loMeinNoodlesImg,
    padThaiNoodlesImg,
    pepperoniPizzaImg,
    beefShawarmaImg,
    softBeefTacosImg,
    classicCheeseBurgerImg,
    originalFriedChickenImg
];

const addMenuToDOM = () => {
    for (let i = 0; i < menuOptions.items.length; i++){
        // Create menu
        const menu = document.createElement('div')
        menu.classList.add('menu')

            // Create menu img container
            const menuImgContainer = document.createElement('div')
            menuImgContainer.classList.add('menu-img')

            //create menu img
            const menuImg = document.createElement('img')
            menuImg.classList.add('image')
            menuImg.src = imageList[i]

            // Create menu name
            const menuName = document.createElement('div')
            menuName.classList.add('menu-name')
            menuName.textContent = menuOptions.items[i]['name']

            //create menu-rate and star
            const menuRate = document.createElement('div')
            menuRate.classList.add('menu-rate')
            for (let i = 0; i < 5; i++){
                const star = document.createElement('span')
                star.classList.add('fa', 'fa-star', 'star-checked')



                menuRate.appendChild(star)

            }
            const numRev = document.createElement('span')
            numRev.classList.add('total-rev')

            numRev.textContent = menuOptions.items[i]['reviews']
            menuRate.appendChild(numRev)
            // create price n buy btn container
            const priceContainer = document.createElement('div')
            priceContainer.classList.add('price-buy-btn-container')

                // create price and btn
                const price = document.createElement('div')
                price.classList.add('menu-price')
                price.textContent = menuOptions.items[i]['price']

                const menuBuyBtn = document.createElement('div') 
                menuBuyBtn.classList.add('menu-buy-btn')
                menuBuyBtn.textContent = "Buy Now"
        
        //append elemen
        menuImgContainer.appendChild(menuImg)
        priceContainer.appendChild(price)
        priceContainer.appendChild(menuBuyBtn)
        
        menu.appendChild(menuImgContainer)
        menu.appendChild(menuName)
        menu.appendChild(menuRate)
        menu.appendChild(priceContainer)
        


        menuSelectionContainer.appendChild(menu)
    }
}

addMenuToDOM()
