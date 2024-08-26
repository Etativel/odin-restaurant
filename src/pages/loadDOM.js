import "../styles/style.css"
import webIcon from "../images/icon/cutlery.png"
import { headerLoad } from "./header"
import { serviceLoad } from "./service"
import { deliveryItems } from "./deliveryItems"
import { menuLoader } from "./menuLoader"
import { discountOffer } from "./offer"
import { footerLoader } from "./footerLoader"


const pageLoader = () => {
    // Favicon Loader
    const iconContainer = document.querySelector('.favicon')
    iconContainer.href = webIcon

    // Main Content Container
    const docCont = document.querySelector('.content')

    // Header Loader
    docCont.appendChild(headerLoad())

    // Service Loader
    docCont.appendChild(serviceLoad())

    // Best Delivered Item Loader
    docCont.appendChild(deliveryItems())

    // Menu Selection Loader
    docCont.appendChild(menuLoader())

    // Discount Loader
    docCont.appendChild(discountOffer())

    // Footer image loader
    footerLoader()
}

export {pageLoader}