/*in js import "./styles.css";*/

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/* function showPrice() {
  console.log("price here!");
}
document.addEventListener("mouseover", showPrice);

function showProd(){
  console.log("products!!!!!");
}
let products = document.querySelectorAll('.ProductCard');
console.log(products);

products.addEventListener("mouseover", showProd);


function showProd(){
  console.log("rowlin!!!!!");
}
let products = document.querySelector('.ProductList.ProductList--grid');
console.log(products);

products.addEventListener("mouseover", showProd);
Hi guys, can anyone help me on  this Js problem. Each time my mouseover an element it's supposed to push the name and the price of a product. But so far Im only pushing element in the console.
let products = document.querySelector('.ProductList.ProductList--grid');
console.log(products);
products.addEventListener("mouseover", function(e){
console.log("here :", e.target.tagName);
});

let price = document.getElementsByClassName('ProductCard')[i].getElementsByTagName('strong')[0].innerHTML;
let name = document.getElementsByClassName('ProductCard')[i].innerHTML;
 v1 
let data ='name, price';
let elements = Array.from(document.getElementsByClassName('ProductCard'));
elements.forEach((element) => {
  let price = document.getElementsByClassName('ProductCard')[1].getElementsByTagName('strong')[0].innerHTML;
  let name = document.getElementsByClassName('ProductCard')[1].innerHTML;
});
data += `${name} ${price}`;
console.log(data);
v2
let data ='name, price';
let elements = Array.from(document.querySelector('.ProductList.ProductList--grid'));
elements.forEach((element) => {
  let price = document.getElementsByClassName('ProductCard')[1].getElementsByTagName('strong')[0].innerHTML;
  let name = document.getElementsByClassName('ProductCard__title')[1].getElementsByTagName("div")[0].innerHTML;
});
data += `${name}, ${price}`;
console.log(data);

v3
let products = document.querySelector('.ProductList.ProductList--grid');
let data ='';

  let price = document.getElementsByClassName('ProductCard')[1].getElementsByTagName('strong')[0].innerHTML;
  let name = document.getElementsByClassName('ProductCard__title')[1].getElementsByTagName("div")[0].innerHTML;
data += `${name}, ${price}`;

console.log(data);

products.addEventListener("mouseover", function(e){
console.log("here :", data);
});

v4
let products = document.querySelector('.ProductList.ProductList--grid');
console.log(products);

let data ='';
let elements = Array.from(document.querySelector('.ProductList.ProductList--grid'));
elements.forEach((element) => {
  let price = document.getElementsByClassName('ProductCard')[1].getElementsByTagName('strong')[0].innerHTML;
  let name = document.getElementsByClassName('ProductCard__title')[1].getElementsByTagName("div")[0].innerHTML;
});
data += `${name}, ${price}`;
console.log(data);



products.addEventListener("mouseover", function(e){
console.log("here :", data);
});


*/
