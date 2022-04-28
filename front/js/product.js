let str = window.location.href;                     // ADRESSE DU SITE ACTUEL OUVERT
let url = new URL(str);
let idProduct = url.searchParams.get("id");
let items = document.getElementById("items");
let itemImg = document.getElementsByClassName("item__img");
let title = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");
let colors = document.getElementById("colors");
      
      
fetch("http://localhost:3000/api/products/"+ idProduct)             //APPEL API
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value) {

  console.log(idProduct);
  console.log (value);

  itemImg.innerHTML += `
  <img src=${value.imageUrl} alt=${value.altTxt}
  `
  title.innerHTML += `${value.name}`
  price.innerHTML += `${value.price}`
  description.innerHTML += `${value.description}`

  for (let i = 0; i < value.colors.length; i++){  //PARCOURT LE TABLEAU DES COULEURS
    let color = value.colors[i];
    document.getElementById("colors").innerHTML +=
    `<option value="${value.colors[i]}">${value.colors[i]}</option>`;
  }
})

.catch(function(err) {
  // Une erreur est survenue
});


let addToCart = document.getElementById("addToCart");
let quantity = document.getElementById("quantity");

function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
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

function addtoBasket() {
  let color = document.getElementById("colors").value;
  let title = document.getElementById("title").textContent;
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").textContent;
  //let image = value.imageUrl;
  //let altTxt = value.altTxt;
  console.log("produit =", idProduct);
  let basket = getBasket();
  let foundProduct = basket.find(el => el && el.id == idProduct && el.color == color);
  console.log(foundProduct);
  console.log("basket =",basket);
  if(foundProduct){
    foundProduct.quantity++;
  }else{
    let product = {id : idProduct, quantity : quantity, color : color, title : title, price : price};
    basket.push(product);
  }
  saveBasket(basket);
}

addToCart.addEventListener('click', function (event) {  //Écoute de l'évènement click sur le bouton ajouter
  if (colors.value == false) {
    confirm("Veuillez sélectionner une couleur");
    }
  else if (quantity.value == 0) {
    confirm("Veuillez sélectionner le nombre d'articles souhaités");
    }
  else{
    addtoBasket();
  }  
});



