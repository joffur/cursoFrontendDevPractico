const mainSection = document.querySelector('.main-container');
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const titleCartContainer = document.querySelector('.title-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailImage = document.querySelector('.product-detail__image');
const productDetailPrice = document.querySelector('.product-info__price');
const productDetailName = document.querySelector('.product-info__name');
const cardsContainer = document.querySelector('.cards-container');
const productsCartContainer = document.querySelector('.my-order-content');
const addToCartButton = document.querySelector('.add-to-cart-button');
const itemsCartBubble = document.querySelector('#itemsCart');

/* Variables a usar en el codigo */
const productList = [];
let shoppingCartList = [];
let itemsCartQuantity = shoppingCartList.length; 
let tempValueTotal = 0;
let idItemCart = 0;

/* Disparadores de Funciones para renderizar elementos dinamicamente */
renderQuantityItemsCart();
mainSection.addEventListener('click', closeMenus);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
titleCartContainer.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
addToCartButton.addEventListener('click', addProductToCartList);

/* Funciones para renderizar elementos dinamicamente */
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

/* Agregar dinamicamente los elementos a la pagina principal */
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

/* Dibujar los elementos en HTML en la pagina principal */
function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
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

/* Agregar productos al carrito de compras */
function addProductToCartList(event) {
  let price;
  try {
    price = event.target.parentElement.childNodes[5].childNodes[1].innerText;
    price = parseFloat(price.slice(1));
    shoppingCartList.push({
      id: "item-value" + idItemCart,
      name: event.target.parentElement.childNodes[5].childNodes[3].innerText,
      price: price,
      image: event.target.parentElement.childNodes[3].src,
    });
  } catch (error) {
    price = event.target.parentElement.parentElement.childNodes[5].childNodes[1].innerText;
    price = parseFloat(price.slice(1));
    shoppingCartList.push({
      id: "item-value" + idItemCart,
      name: event.target.parentElement.parentElement.childNodes[5].childNodes[3].innerText,
      price: price,
      image: event.target.parentElement.parentElement.childNodes[3].src,
    });
  }
  
  tempValueTotal += price;
  idItemCart += 1;
  renderCartList(shoppingCartList);
  closeProductDetailAside();
}

/* Funcion que elmina los elementos del carrito */
function deleteProductToCartList(event) {
  const idItemDeleted = event.target.id;
  let indexItemDeleted;
  shoppingCartList.forEach(function(item, idItem) {
    if (item.id === idItemDeleted) {
      indexItemDeleted = idItem;
      tempValueTotal -= item.price;
    }
  });
  shoppingCartList.splice(indexItemDeleted, 1);
  renderCartList(shoppingCartList);
}

/* Dibujar el carrito de compras */
function renderCartList(arr) {
  productsCartContainer.innerText = "";
  if (shoppingCartList.length === 0) {
    renderQuantityItemsCart();
    return;
  }
  for (const product of arr) {
    const figureContent = document.createElement('figure');
    const imageContent = document.createElement('img');
    imageContent.setAttribute('src', product.image);
    figureContent.append(imageContent);

    const nameContent = document.createElement('p');
    nameContent.innerText = product.name;

    const priceContent = document.createElement('p');
    priceContent.innerText = "$" + product.price;

    const closeIcon = document.createElement('img');
    closeIcon.classList.add('shopping-cart__close');
    closeIcon.setAttribute('src', './icons/icon_close.png');
    closeIcon.setAttribute('alt', 'close');
    closeIcon.setAttribute('id', product.id);
    closeIcon.addEventListener('click', deleteProductToCartList);

    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');
    shoppingCart.append(figureContent, nameContent, priceContent, closeIcon);

    productsCartContainer.append(shoppingCart);
  }

  const totalCart = document.createElement('div');
  totalCart.classList.add('order');

  const nameTotal = document.createElement('p');
  const total = document.createElement('span');
  total.innerText = "Total"
  nameTotal.append(total);

  const valueTotal = document.createElement('p');
  
  valueTotal.innerText = "$" + tempValueTotal;

  totalCart.append(nameTotal, valueTotal);

  productsCartContainer.append(totalCart);

  const checkoutCartButton = document.createElement('button');
  checkoutCartButton.classList.add('primary-button');
  checkoutCartButton.innerText = 'Checkout';

  productsCartContainer.append(checkoutCartButton);
  renderQuantityItemsCart();
}

/* Actualizar la burbuja de cantidad de elementos en el carrito */
function renderQuantityItemsCart() {
  itemsCartQuantity = shoppingCartList.length;
  itemsCartBubble.innerText = itemsCartQuantity;
}