//shorten the link
const url = "https://kea-alt-del.dk/t7/api/products/1164";
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page

function showProduct(product) {
  console.log(product);

  document.querySelector(".product_img").src =
    "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".description"). = product.description;
  document.querySelector(".color_box").style.backgroundColor =
    product.basecolour;
}

// <li class="price"><p>895kr</p></li>

