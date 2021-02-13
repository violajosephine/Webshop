//shorten the link
const url = "https://kea-alt-del.dk/t7/api/products/1543";
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page

function showProduct(product) {
  console.log(product);

  document.querySelector(".category").textContent = product.subcategory + "/ ";
  document.querySelector(".product_name").textContent =
    product.productdisplayname;

  document.querySelector(".product_image").src =
    "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
  document.querySelector(".product_image").alt = product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".description").innerHTML = product.description;
  document.querySelector(".color_box").style.backgroundColor =
    product.basecolour;
}

// <li class="category"><a href="product_list.css">Topwear/ </a></li>
//<li class="product_name">Sahara Team India Fanwear Round Neck Jersey<a href=""></a></li>
