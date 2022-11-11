//Cambio de cantidad de productos ingresados por el usuario
let minusBtn = document.querySelector(".input_minus");
let plusBtn = document.querySelector(".input_plus");
let userInput = document.querySelector(".input_number");

let userInputNumer = 0;

plusBtn.addEventListener("click", () => {
  userInputNumer++;
  userInput.value = userInputNumer;
});

minusBtn.addEventListener("click", () => {
  userInputNumer--;
  if (userInputNumer <= 0) {
    userInputNumer = 0;
  }
  userInput.value = userInputNumer;
});

//Agregar el total al carrito
const addToCartBtn = document.querySelector('.details_button');
let cartNotification = document.querySelector('.header_cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", ()=>{
    lastValue = lastValue + userInputNumer;
    cartNotification.innerText = lastValue;
    cartNotification.style.display='block'; 
    proceModal.innerHTML = `$1,350.00 x ${lastValue} <span>$${lastValue*1350}.00</span>`;
})

//Mostrar carrito
const cartBtn = document.querySelector('.header_cart');
const cartModal = document.querySelector('.cart-modal');
let proceModal = document.querySelector('.cart-modal_price-container');

cartBtn.addEventListener("click", ()=>{
    cartModal.classList.toggle("show");
    proceModal.innerHTML = `$1,350.00 x ${lastValue} <span>$${lastValue*1350}.00</span>`;
})
