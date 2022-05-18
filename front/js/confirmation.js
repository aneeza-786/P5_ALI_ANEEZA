let basket = localStorage.basket;


const order = {
    "products" : basket,
    "contact":{
        "firstName":"ANEEZA",
        "lastName":"ALI",
        "address":"24 RUE DU COLONEL MOLL",
        "email":"amali78696@gmail.com",
        "city":"LE BOURGET"
    }
}

console.log(order);

let xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:3000/api/products/order');
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
  }
};

// envoi d'une chaine de caractères:
xhr.send(JSON.stringify(order));


/*contact: {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    email: string
 }
  products: [string]*/