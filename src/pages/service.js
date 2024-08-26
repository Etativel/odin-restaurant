const serviceLoad = () => {
    const serviceContainer = document.createElement('div')
    serviceContainer.classList.add('center-overflow', 'service')
    const service = `
    <ul class="info-container">
    <li>
        <div class="delivery-info">
            <p class="info-title">
                Speedy Delivery
            </p>
            <p class="info-subtitle">
                Get your meal hot and fresh at your doorstep within 1-2 hours, guaranteed.
            </p>
        </div>
    </li>
    <li>
        <div class="delivery-info">
            <p class="info-title">
                Always Fresh
            </p>
            <p class="info-subtitle">
                We take pride in delivering food that’s 100% fresh, straight from our kitchen to your table - never stale, always delicious.
            </p>
        </div>
    </li>
    <li>
        <div class="delivery-info">
            <p class="info-title">
                Free Delivery
            </p>
            <p class="info-subtitle">
                Enjoy your favorite dishes with zero delivery fees. Just order, relax, and savor the flavor!
                
            </p>
        </div>
        </li>
    </ul>`
    serviceContainer.innerHTML = service
    return serviceContainer
}
export {serviceLoad}