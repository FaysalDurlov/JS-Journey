let cart = Number(localStorage.getItem('cart'));
function updateCart(value){
    cart+= Number(value);
    document.querySelector('.Result').innerHTML = cart;
    localStorage.setItem('cart',cart);
}
function showQuantity(){
    document.querySelector('.Result').innerHTML = cart;
}
document.querySelector('.Result').innerText = localStorage.getItem('cart');