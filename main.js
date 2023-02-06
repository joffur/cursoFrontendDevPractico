const mainSection = document.querySelector('.main-container');
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailImage = document.querySelector('.product-detail__image');
const productDetailPrice = document.querySelector('.product-info__price');
const productDetailName = document.querySelector('.product-info__name');
const cardsContainer = document.querySelector('.cards-container');

mainSection.addEventListener('click', closeMenus);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function closeMenus() {
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('slide-right');
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle('slide-right');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}
function toggleCartAside() {
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('slide-right');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}
function openProductDetailAside(event) {
  productDetailContainer.classList.remove('inactive');
  productDetailImage.setAttribute('src', event.target.src);
  productDetailPrice.innerText = event.target.parentElement.childNodes[1].childNodes[0].childNodes[0].innerText;
  productDetailName.innerText = event.target.parentElement.childNodes[1].childNodes[0].childNodes[1].innerText;
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: "Acelerómetro ADXL345",
  price: 11600,
  image: "https://moviltronics.com/wp-content/uploads/2015/10/1538-thickbox_default-Modulo-Acelerometro-3-ejes-ADXL345-600x600.jpg",
});
productList.push({
  name: "Arduino Nano CH340",
  price: 48200,
  image: "https://moviltronics.com/wp-content/uploads/2018/06/M10009-600x450.png",
});
productList.push({
  name: "Paquete Resistencias surtidas",
  price: 2500,
  image: "https://moviltronics.com/wp-content/uploads/2020/05/Resistencias-600x600.jpg",
});
productList.push({
  name: "Bluetooth CC2541",
  price: 23000,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/2083-thickbox_default-Modulo-Bluetooth-CC2541-600x600.jpg",
});
productList.push({
  name: "Potenciómetro Sencillo",
  price: 900,
  image: "https://moviltronics.com/wp-content/uploads/2019/10/56-1-600x585.jpg",
});
productList.push({
  name: "Brazo Robotico Dobot Magician Basic",
  price: 9200,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/2471-thickbox_default-Brazo-Robotico-Dobot-Magician-Basic-600x600.jpg",
});
productList.push({
  name: "Chasis Mini Sumo",
  price: 199000,
  image: "https://moviltronics.com/wp-content/uploads/2019/07/Chasis-Mini-Sumo_0000_DSC00342-600x600.jpg",
});
productList.push({
  name: "Kit Arduino Starter",
  price: 264600,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/Kit-Arduino-Starter-600x600.jpg",
}); 
productList.push({
  name: "Kit Arduino Starter",
  price: 264600,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/Kit-Arduino-Starter-600x600.jpg",
}); 
productList.push({
  name: "Kit Arduino Starter",
  price: 264600,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/Kit-Arduino-Starter-600x600.jpg",
}); 
productList.push({
  name: "Kit Arduino Starter",
  price: 264600,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/Kit-Arduino-Starter-600x600.jpg",
}); 
productList.push({
  name: "Kit Arduino Starter",
  price: 264600,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/Kit-Arduino-Starter-600x600.jpg",
}); 
productList.push({
  name: "Kit Arduino Starter",
  price: 264600,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/Kit-Arduino-Starter-600x600.jpg",
}); 
productList.push({
  name: "Kit Arduino Starter",
  price: 264600,
  image: "https://moviltronics.com/wp-content/uploads/2018/07/Kit-Arduino-Starter-600x600.jpg",
});

function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    // productCard.addEventListener('click', console.log);
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.classList.add('product-img');
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.append(productImgCart);
  
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);