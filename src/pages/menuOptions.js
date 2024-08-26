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

export {menuOptions}