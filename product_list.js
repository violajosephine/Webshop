const urlParams = new URLSearchParams(window.location.search);
//in the url grab catgory and store them under category
const category = urlParams.get("category");
console.log(category);

const url =
  "https://kea-alt-del.dk/t7/api/products?limit=200&category=" + category;
//Get the data.
//Then return the json data.
//Then call the function that loops the data
//Then show apply function to each piece of data
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductlist(data);
  });

function handleProductlist(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  document.querySelector(".category").textContent = product.category;
  document.querySelector("h1").textContent = product.category;

  //grab template
  const template = document.querySelector("#reg_product_template").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content

  copy.querySelector("a").href = "product.html?id=" + product.id;

  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector("article img").src =
    "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
  copy.querySelector("article img").alt = product.productdisplayname;
  copy.querySelector(".price").textContent =
    product.price -
    (product.discount / 100) * product.price.toPrecision(2) +
    "kr.";
  copy.querySelector(".discount_percent").textContent =
    product.discount + "% off";
  copy.querySelector(".prev_price").textContent = product.price + "kr.";

  //add sold out and discount classes
  if (product.soldout) {
    copy.querySelector("article").classList.add("sold_out");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("on_sale");
  }

  //grab parent
  const parent = document.querySelector("section");
  //append child
  parent.appendChild(copy);
}
