import hugeHeaderImage from "../images/food/burger.png"
import headerMascotImage from "../images/icon/mascot-nobg.png"

const headerLoad = () => {
    const headerContainer = document.createElement('header')
    const header = `
            <div class="landing">
                <div class="left-landing">
                    <div class="huge-title">
                        From Classic Fast Food to Authentic Local Dishes
                    </div>
                    <div class="owner-rev">
                        <!-- user image -->
                            <div class="mascot-img-container">
            
                            </div>
                        <p>Quick Bites, Authentic Delights. Ready to Serve with a Click!</p>
                    </div>
                    <div class="head-order">
                        <button class="buy-btn pink-button">
                            Buy Now
                        </button>
                        <div class="order-btn-container">
                            <button class="order-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                    
                            </button>
                            How to Order
                        </div>
            
                    </div>
                </div>
                <div class="right-landing">
                    <!-- Huge image here -->
                        <div class="image-container">
            
                        </div>
                </div>
            </div>`
        headerContainer.innerHTML = header

        const imageContainer = headerContainer.querySelector(".image-container")
        const headImage = document.createElement("img")
        headImage.src = hugeHeaderImage
        headImage.classList.add('huge-image')
        imageContainer.appendChild(headImage)

        const mascotContainer = headerContainer.querySelector('.mascot-img-container')
        const mascotImage = document.createElement("img")
        mascotImage.src = headerMascotImage
        mascotImage.classList.add('mascot-img')
        mascotContainer.appendChild(mascotImage)

        return headerContainer
}

export {headerLoad}
