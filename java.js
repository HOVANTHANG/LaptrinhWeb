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
    // Chuyển hướng sang trang mua hàng (ví dụ: 'buy.html')
    window.location.href = 'http://127.0.0.1:5500/main1.html';
  }