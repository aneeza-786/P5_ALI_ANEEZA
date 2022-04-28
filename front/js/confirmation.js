fetch("http://localhost:3000/api/products/order")
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value) {
    console.log("heeeeeey");
})