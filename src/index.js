import "./styles/style.css"

import hugeHeaderImage from "./images/food/burger.png"
import headerMascotImage from "./images/icon/mascot-nobg.png"
import webIcon from "./images/icon/cutlery.png"

// favicon
const iconContainer = document.querySelector('.favicon')
iconContainer.href = webIcon


import { headerLoad } from "./pages/header"
const docCont = document.querySelector('.content')
console.log(headerLoad())
docCont.appendChild(headerLoad())

// Best item image
import bestNoodle from "./images/food/noodle-lomein.png"
import bestChicken from "./images/food/chicken.png"
import bestBurger from "./images/food/mayoburger.png"

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

addMenu('Classic Beef Patty',' 241','$4.40',"./images/food/mayoburgerMenu.png")
addMenu('Homemade Cookies',' 130','$2.20',"./images/food/cookies.png")
addMenu('Lo Mein Noodles',' 223','$3.20',"./images/food/noodle-lomeinMenu.png")
addMenu('Pad Thai Noodles',' 130','$4.20',"./images/food/pad-thai.png")
addMenu('Pepperoni Pizza',' 112','$5.20',"./images/food/pizaa.png")
addMenu('Beef Shawarma',' 140','$4.40',"./images/food/shawarma.png")
addMenu('Soft Chicken Tacos',' 111','$3.40',"./images/food/tacos.png")
addMenu('Classic Cheese Burger',' 230','$4.40',"./images/food/burger.png")
addMenu('Original Fried Chicken',' 211','$4.30',"./images/food/chicken.png")



// need to make this dynamically
// const imageAddresses = menuOptions.items.map(item => item['image']);
import classicBeefPattyImg from './images/food/mayoburgerMenu.png';
import homemadeCookiesImg from './images/food/cookies.png';
import loMeinNoodlesImg from './images/food/noodle-lomeinMenu.png';
import padThaiNoodlesImg from './images/food/pad-thai.png';
import pepperoniPizzaImg from './images/food/pizaa.png';
import beefShawarmaImg from './images/food/shawarma.png';
import softBeefTacosImg from './images/food/tacos.png';
import classicCheeseBurgerImg from './images/food/burger.png';
import originalFriedChickenImg from './images/food/chicken.png';

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
                menuBuyBtn.classList.add('menu-buy-btn', 'pink-button')
                menuBuyBtn.textContent = "Buy now"
        
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


const sosmedImgContainer = document.querySelector('.sosmed-img-container')

import igImg from './images/icon/instagram.png'
import twitterImg from './images/icon/twitter.png'
import facebookImg from './images/icon/facebook.png'

const sosmedImages = [igImg, twitterImg, facebookImg];

for (let i = 0; i < sosmedImages.length; i++){
    const img = document.createElement('img')
    img.classList.add('sosmed-img')
    img.src = sosmedImages[i]

    sosmedImgContainer.appendChild(img)
}


// //Discount section image

import land1 from './images/discount-food/landscape-1.png'
import land2 from './images/discount-food/landscape-2.png'
import land3 from './images/discount-food/landscape-3.png'

import port1 from './images/discount-food/portrait.png'
import port2 from './images/discount-food/portrait-2.png'

const landscape1 = document.querySelector('.discount-1')
landscape1.style.backgroundImage = `url(${land1})` 

const landscape2 = document.querySelector('.discount-4')
landscape2.style.backgroundImage = `url(${land2})` 

const landscape3 = document.querySelector('.discount-5')
landscape3.style.backgroundImage = `url(${land3})` 

const portrait1 = document.querySelector('.discount-2')
portrait1.style.backgroundImage = `url(${port1})` 
const portrait2 = document.querySelector('.discount-3')
portrait2.style.backgroundImage = `url(${port2})`



