import land1 from '../images/discount-food/landscape-1.png'
import land2 from '../images/discount-food/landscape-2.png'
import land3 from '../images/discount-food/landscape-3.png'

import port1 from '../images/discount-food/portrait.png'
import port2 from '../images/discount-food/portrait-2.png'

const discountOffer = () => {
    const discountContainer = document.createElement('div')
    discountContainer.classList.add('discount-container')

    const discount = `


        <div class="discount-1 discount-style">
        </div>  
        <div class="discount-2 discount-style">
        </div>
        <div class="discount-3 discount-style">
        </div>
        <div class="discount-4 discount-style">
        </div>
        <div class="discount-5 discount-style">
        </div>
    `
    discountContainer.innerHTML = discount;

    const landscape1 = discountContainer.querySelector('.discount-1')
    landscape1.style.backgroundImage = `url(${land1})` 
    const landscape2 = discountContainer.querySelector('.discount-4')
    landscape2.style.backgroundImage = `url(${land2})` 
    const landscape3 = discountContainer.querySelector('.discount-5')
    landscape3.style.backgroundImage = `url(${land3})` 

    const portrait1 = discountContainer.querySelector('.discount-2')
    portrait1.style.backgroundImage = `url(${port1})` 
    const portrait2 = discountContainer.querySelector('.discount-3')
    portrait2.style.backgroundImage = `url(${port2})`

    return discountContainer
}
export {discountOffer}