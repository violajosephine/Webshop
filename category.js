//fetch data
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(gotData);

//loop through
function gotData(data) {
  data.forEach(showCategory);
}

function showCategory(category) {
  //   console.log(category);

  //grab template
  const template = document.querySelector("template").content;

  //clone a copy
  const copy = template.cloneNode(true);
  //change content of copy
  copy.querySelector("h2").textContent = category.category;
  //grab parent
  const parent = document.querySelector("section");
  //append child
  parent.appendChild(copy);
}
