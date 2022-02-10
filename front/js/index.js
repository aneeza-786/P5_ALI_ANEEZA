fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value)
    for (let index= 0; index < value.length; index++) {
      let product = value[index];
      let items = document.getElementById("items");
      let itemImg = document.getElementsByClassName("item__img");
      let title = document.getElementById("title");
      let price = document.getElementById("price");
      let description = document.getElementById("description");

      items.innerHTML += `
      <a href=./product.html? + ${product._id}>
        <article>
          <img src=${product.imageUrl} alt=${product.altTxt}>
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
      </a>
      `
      /*

      itemImg.innerHTML += `
      <img src="../images/logo.png" alt="Photographie d'un canapé">
      `
      title.innerHTML += `${product.name}`
      price.innerHTML += `${product.price}`
      description.innerHTML += `${product.description}`
    
      */
    }
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
