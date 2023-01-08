let btn = document.querySelector(".hamburger");
console.log(btn);
let menu2 = document.querySelector(".menu2");
btn.addEventListener("click", function(){
    if(menu2.style.display == "block"){
        menu2.style.display = "none";
    }
    else{
    menu2.style.display = "block";
    }
});
//Slider
var sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function init() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

init();

//Filter
const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};
/*Another way to filter
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}
*/
//Prepare Cookies
function setCookie(cookieName, cookieValue) {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = `${cookieName}=${cookieValue};expires=${date}`;
}

function getCookie(cookieName) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      cookies[i] = cookies[i].replace(" ", "");
      cookies[i] = cookies[i].split("=");
      if (cookies[i][0] == cookieName) {
        return cookies[i][1];
      }
    }
  }


//Add to card
let carts=document.querySelectorAll(".add-cart");
let addToCart= document.getElementById("addCart")
//let clearTheCart= document.getElementById("clearCart")
if(getCookie("count")){
    addToCart.innerHTML= `Cart ${getCookie("count")}`;
}
else{
    addToCart.innerHTML= "Cart";
    setCookie('count', 0);
}
for (let index = 0; index < carts.length; index++) {
    carts[index].addEventListener('click', () =>{
        let count = parseInt(getCookie("count"));
        count++;
        setCookie('count', count);
        var addToCart= document.getElementById("addCart")
        addToCart.innerHTML= `Cart ${count}`;    
    } ) 
     
}
 
// Navigation in website
//Home Page
let getHeader= document.getElementsByClassName("list")
//console.log(getHeader)
getHeader[1].setAttribute("href", "./Home.html");
getHeader[2].setAttribute("href", "./ContactUs.html");
getHeader[3].setAttribute("href", "./About.html");


// Top button 
let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  