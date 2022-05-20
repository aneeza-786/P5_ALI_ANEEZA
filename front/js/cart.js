let basketParse = JSON.parse(localStorage.basket);
console.log("basket = ",basketParse)

for (let index = 0; index < basketParse.length; index++) {
  let title = document.getElementById("title")
  let price = document.getElementById("price");
  let product = basketParse[index];
  console.log("product=", product);
  document.getElementById("cart__items").innerHTML += `
  <article class="cart__item" data-id=${product.id} data-color= ${product.color};}>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${product.title}</h2>
        <p>${product.color}</p>
        <p>${product.price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" id ="item-${product.id}" class="itemQuantity" name="itemQuantity" min="1" max="100" onchange="changeQuantity('${product.id}','${product.color}')" value=${product.quantity}>
        </div>
        <div class="cart__item__content__settings__delete">
          <p id="delete-${product.id}" class="deleteItem" onclick="removeFromBasket('${product.id}','${product.color}')">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`
}

function getBasket() {
  let basket = localStorage.getItem("basket");
  if(basket == null){
    return [];
  }
  else{
    return JSON.parse(basket);
  }
}

function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function removeFromBasket(productId, color) {
  console.log("produit supprimé");
  let basket = getBasket();
  basket = basket.filter(el => !(el.id == productId && el.color == color)); 
  saveBasket(basket);
  window.location.reload();
}


function totalQuantity() {
  let totalQuantity = 0;
  for (let index = 0; index < basketParse.length; index++) {
  let parseQuantity = parseInt(basketParse[index].quantity);
  totalQuantity += parseQuantity;
  }
document.getElementById("totalQuantity").innerHTML = totalQuantity;
}

totalQuantity();

function changeQuantity(productId, color) {
  let quantity = parseInt(document.getElementById("item-"+ productId).value);
  console.log("id du produit", productId, color, quantity)
  let basket = getBasket();
  let foundProduct = basket.find(el => el && el.id == productId && el.color == color);
  if (foundProduct != undefined){
    foundProduct.quantity = quantity
    if(quantity <= 0){
    removeFromBasket(productId, color);
    } else{
    saveBasket(basket);
    }
  basketParse = JSON.parse(localStorage.basket);
  } 
  totalQuantity();
  totalPrice();
}

function totalPrice() {
    let totalPrice = 0;
  for (let index = 0; index < basketParse.length; index++) {
  let parsePrice = parseInt(basketParse[index].price);
  totalPrice += basketParse[index].quantity * parsePrice;
  }
  document.getElementById("totalPrice").innerHTML = totalPrice;
}

totalPrice();


function saveFormData() {
  const contact = {
  firstName : document.getElementById('firstName').value,
  lastName : document.getElementById('lastName').value,
  address : document.getElementById('address').value,
  city : document.getElementById('city').value,
  email : document.getElementById('email').value
}
  localStorage.setItem("contact", JSON.stringify(contact));
}