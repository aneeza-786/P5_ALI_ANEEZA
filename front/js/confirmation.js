let basketParse = JSON.parse(localStorage.basket);
let contactParse = JSON.parse(localStorage.contact);

let productIdArray = []
for (let index = 0; index < basketParse.length; index++) {
  let productId = basketParse[index].id;
  console.log(productId);
  productIdArray.push(productId);
}
console.log(productIdArray);

const order = {
    "products" : productIdArray,
    "contact": contactParse
}

console.log(order);

let xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:3000/api/products/order');
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    let response = JSON.parse(xhr.responseText);
    console.log(response);
    document.getElementById("orderId").innerHTML = response.orderId;
  }
};

// envoi d'une chaine de caractères:
xhr.send(JSON.stringify(order));