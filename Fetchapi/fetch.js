fetch("https://dummyjson.com/products/1").then(function (a) {
    return a.json();
}).then(function (b) {
    // console.log(b);
    // console.log("Company - " + b.brand);
    // console.log("Product - " + b.category)
    // console.log("price - " + b.price)

    document.getElementById("#brand").innerHTML = "Company " + b.brand;
    document.getElementById("#Product").innerHTML = "Product " + b.category;
    document.getElementById("#price").innerHTML = "price " + b.price;


})