import { menuOptions } from "../pages/menuOptions"
import classicBeefPattyImg from '../images/food/mayoburgerMenu.png';
import homemadeCookiesImg from '../images/food/cookies.png';
import loMeinNoodlesImg from '../images/food/noodle-lomeinMenu.png';
import padThaiNoodlesImg from '../images/food/pad-thai.png';
import pepperoniPizzaImg from '../images/food/pizaa.png';
import beefShawarmaImg from '../images/food/shawarma.png';
import softBeefTacosImg from '../images/food/tacos.png';
import classicCheeseBurgerImg from '../images/food/burger.png';
import originalFriedChickenImg from '../images/food/chicken.png';

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

const menuLoader = () => {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add("menu-container")

    const menu = `
        <div class="menu-title">
        <div class="deliver-title">
            Our 
            <span class="text-color-red">
                Regular 
            </span>
            Menu
        </div>
        <div class="menu-subtitle">
            <p><span class="text-color-red">Check out </span>our regular menu and order anything that catches your eye!</p>
            <button class="see-all-btn pink-button">See all</button>
        </div>
    </div>
    <div class="menu-selection-container">
        <!-- From Js -->
    </div>`
    menuContainer.innerHTML = menu;

    const menuSelectionContainer = menuContainer.querySelector('.menu-selection-container')

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
    return menuContainer
}
export {menuLoader}