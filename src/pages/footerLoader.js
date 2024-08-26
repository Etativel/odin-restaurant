import igImg from '../images/icon/instagram.png'
import twitterImg from '../images/icon/twitter.png'
import facebookImg from '../images/icon/facebook.png'

const footerLoader = () => {
    const footerContainer = document.querySelector('footer')

    const footer = `
                <div class="left-footer-container">
                <div class="footer-company-name footer-red-font">
                    Plateful
                </div>
                <div class="copyright">Continue Plateful 2024 all rights reserved</div>
                <div class="company-social-media footer-red-font" >
                    Follow Us On
                </div>
                <div class="sosmed-img-container">
                    
                </div>
            </div>
            <div class="left-left-footer">
                <div class="footer-red-font">
                    Menu
                </div>
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Service</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div class="right-footer">
                <div class="footer-red-font">
                    Information
                </div>
                <ul>
                    <li>Menu</li>
                    <li>Quality</li>
                    <li>Make an Offer</li>
                    <li>Delivery</li>
                    <li>Subscription</li>
                </ul>
            </div>
            <div class="right-right-footer">
                <div class="footer-red-font">
                    Contact
                </div>
                <ul>
                    <li>+123 456 789</li>
                    <li>Explore More</li>
                    <li>Info@Plateful.com</li>
                    <li>1234, New York, USA</li>
                </ul>
            </div>`
            footerContainer.innerHTML = footer;
            const sosmedImgContainer = footerContainer.querySelector('.sosmed-img-container')
            const sosmedImages = [igImg, twitterImg, facebookImg];
            for (let i = 0; i < sosmedImages.length; i++){
                const img = document.createElement('img')
                img.classList.add('sosmed-img')
                img.src = sosmedImages[i]
                sosmedImgContainer.appendChild(img)
            }
            return footerContainer
}

export {footerLoader}