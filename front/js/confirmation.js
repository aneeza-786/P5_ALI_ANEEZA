let xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:3000/api/products/order');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    alert(xhr.responseText);
  }
};

// envoi d'une chaine de caractères:
xhr.send(order);

const order = {
    "products" : [],
    "contact":{
        "firstName":"ANEEZA",
        "lastName":"ALI",
        "address":"24 RUE DU COLONEL MOLL",
        "email":"amali78696@gmail.com",
        "city":"LE BOURGET"
    }
}

console.log(order);


/*contact: {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    email: string
 }
  products: [string]*/