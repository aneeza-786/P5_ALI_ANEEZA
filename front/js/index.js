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

      items.innerHTML += `
      <a href=./product.html?id=${product._id}>
        <article>
          <img src=${product.imageUrl} alt=${product.altTxt}>
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
      </a>
      `

    }})
  .catch(function(err) {
    // Une erreur est survenue
  });
