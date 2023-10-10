let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {

    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchFrom = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchFrom.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}



let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    cartItem.classList.remove('active');
}

function redirectToBuyPage() {
    window.location.href = 'main1.html';
  }
  function redirectToBuyPage() {
    window.location.href = 'main2.html';
  }
  function redirectToBuyPage() {
    window.location.href = 'main3.html';
  }
  function redirectToBuyPage() {
    window.location.href = 'main4.html';
  }
  function redirectToBuyPage() {
    window.location.href = 'main5.html';
  }
  function redirectToBuyPage() {
    window.location.href = 'main6.html';
  }
 function mymenu(){
    window.location.href='main.html';
 }