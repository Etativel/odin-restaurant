// Best item image
import bestNoodle from "../images/food/noodle-lomein.png"
import bestChicken from "../images/food/chicken.png"
import bestBurger from "../images/food/mayoburger.png"

const deliveryItems = () => {
    const bestDeliveredContainer = document.createElement('div')
    bestDeliveredContainer.classList.add('best-deliver-container')
    const topItems = `
        <div class="best-deliver-title">
        <div class="deliver-title" id="coming-soon">
            Best 
            <span class="text-color-red">
                Delivered 
            </span>
            Categories
        </div>
        <div class="deliver-subtitle">
            <span class="text-color-red">Ready to eat? </span>Take a look at our top choices and order now!
        </div>
    </div>
    <div class="best-item">
        <div class="best-item-1"></div>
        <div class="best-item-2"></div>
        <div class="best-item-3"></div>
    </div>`
    bestDeliveredContainer.innerHTML = topItems

    const bestItemList = [bestChicken, bestBurger,bestNoodle]
    const bestItemName = ['Fried Cicken', 'Burger', 'Noodle']

    // append to this element with class "best-item-1"
    const appendBestItem = function(){
        for (let i = 0; i < bestItemList.length; i++){
            const bestItemImageContainer = document.createElement("img")
            bestItemImageContainer.src = bestItemList[i]
            bestItemImageContainer.classList.add(`best-item-img-${i}`)
            const currentItem = bestDeliveredContainer.querySelector(`.best-item-${i+1}`)
            currentItem.appendChild(bestItemImageContainer)

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
    return bestDeliveredContainer
}
export {deliveryItems}