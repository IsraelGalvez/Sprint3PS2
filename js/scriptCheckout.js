//
let minusCheckBtn = document.querySelector(".input-checkout_minus");
let plusCheckBtn = document.querySelector(".input-checkout_plus");
let userCheckInput = document.querySelector(".input-checkout_number");

let userCheckInputNumer = 0;

plusCheckBtn.addEventListener("click", () => {
  userCheckInputNumer++;
  userCheckInput.value = userCheckInputNumer;
});

minusCheckBtn.addEventListener("click", () => {
  userCheckInputNumer--;
  if (userCheckInputNumer <= 0) {
    userCheckInputNumer = 0;
  }
  userCheckInput.value = userCheckInputNumer;
});

//Agregar el total al carrito
const addToCartCheckBtn = document.querySelector(".gallery_checkout_button-add");
const delCartCheckBtn = document.querySelector('.gallery_checkout_button-delete');
let cartCheckNotification = document.querySelector(".header_cart--notification");
let lastValueCheck = parseInt(cartCheckNotification.innerText);

addToCartCheckBtn.addEventListener("click", () => {
    lastValueCheck = lastValueCheck + userCheckInputNumer;
    cartCheckNotification.innerText = lastValueCheck;
    userCheckInputNumer = 0;
    userCheckInput.value = userCheckInputNumer;
    cartCheckNotification.style.display = "block";
    drawProductInModal();
});

delCartCheckBtn.addEventListener("click", () => {
    productCheckContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    lastValueCheck = 0;
    cartCheckNotification.innerText = lastValueCheck;
  });

//Mostrar el carrito
const cartBtnCheck = document.querySelector(".header_cart");
const cartModalCheck = document.querySelector(".cart-modal");
const productContainerCheck = document.querySelector(".cart-modal_checkout-container");

cartBtnCheck.addEventListener("click", () => {
  cartModalCheck.classList.toggle("show");
  if (lastValue == 0) {
    productCheckContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
  }else{
    drawProductInModal();
  }
});



//Funciones
function deleteProduct() {
    //Borrar el contenido del carrito
    const deleteProductBtn = document.querySelector(".cart-modal_delete");
  
    deleteProductBtn.addEventListener("click", () => {
      productCheckContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
      lastValueCheck = 0;
      cartCheckNotification.innerText = lastValueCheck;
    });
  }
  
  function drawProductInModal() {
    productCheckContainer.innerHTML = `        
    <div class="cart-modal_details-container">
      <img class="cart-modal_image" src="img/image-article-thumnail_1-min.png" alt="img product">
      <div>
          <p class="cart-modal_product-container">Playera del Necaza edición limitada</p>
          <p class="cart-modal_price-container">$1,350.00 x 1 <span>$1,350.00</span></p>
      </div>
      <img class="cart-modal_delete" src="img/icon-delete.svg" alt="icon delete">
    </div>
    <button class="cart-modal_checkout">Chekout</button>`;
    deleteProduct();
    let proceModal = document.querySelector(".cart-modal_price-container");
    proceModal.innerHTML = `$1,350.00 x ${lastValueCheck} <span>$${
      lastValueCheck * 1350
    }.00</span>`;
  }
  
  function changeNextImage(imgContainer) {
    if (imgIndex === 3) {
      imgIndex = 1;
    } else {
      imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../img/image-article_${imgIndex}-min.png')`;
  }
  
  function changePreviusImage(imgContainer) {
    if (imgIndex === 1) {
      imgIndex = 3;
    } else {
      imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../img/image-article_${imgIndex}-min.png')`;
  }