import "./styles/style.css"
import webIcon from "./images/icon/cutlery.png"

// Favicon Loader
const iconContainer = document.querySelector('.favicon')
iconContainer.href = webIcon

// Main Content Container
const docCont = document.querySelector('.content')

// Header Loader
import { headerLoad } from "./pages/header"
docCont.appendChild(headerLoad())

// Service Loader
import { serviceLoad } from "./pages/service"
docCont.appendChild(serviceLoad())

// Best Delivered Item Loader
import { deliveryItems } from "./pages/deliveryItems"
docCont.appendChild(deliveryItems())

// Menu Selection Loader
import { menuLoader } from "./pages/menuLoader"
docCont.appendChild(menuLoader())

// Discount Loader
import { discountOffer } from "./pages/offer"
docCont.appendChild(discountOffer())

// Footer image loader
import { footerLoader } from "./pages/footerLoader"
footerLoader()






