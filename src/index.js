import "./styles/style.css"
import { serviceLoad } from "./pages/service"
import { deliveryItems } from "./pages/deliveryItems"
import { menuLoader } from "./pages/menuLoader"
import { discountOffer } from "./pages/offer"
import { pageLoader } from "./pages/loadDOM";

// Main Content Container
const docCont = document.querySelector('.content')

document.addEventListener('DOMContentLoaded', ()=>{
    pageLoader();
});

const offerBtn = document.querySelector('.offer')
const serviceBtn = document.querySelector('.service')
const menu = document.querySelector('.menu')
// const aboutBtn = document.querySelector('.about-us')
const homeTitle = document.querySelector('.app-name')
const homeBtn = document.querySelector('.home')

offerBtn.addEventListener('click', ()=>{
    docCont.innerHTML = ""
    docCont.appendChild(discountOffer())
})

serviceBtn.addEventListener('click', ()=>{
    docCont.innerHTML = ""
    docCont.appendChild(serviceLoad())
})

menu.addEventListener('click', ()=>{
    docCont.innerHTML = ""
    docCont.appendChild(deliveryItems())
    docCont.appendChild(menuLoader())
})

// aboutBtn.addEventListener('click', ()=>{
//     alert("hello")
// })

homeTitle.addEventListener('click', ()=>{
    docCont.innerHTML = ""
    pageLoader()
})

homeBtn.addEventListener('click', ()=>{
    docCont.innerHTML = ""
    pageLoader()
})





