function subscribe(){
    let SubButton = document.querySelector('.SubscribeButton');
    if(SubButton.innerHTML ==='Subscribe'){
        SubButton.innerText = 'Subscribed';
        SubButton.classList.add('isSubscribedButton');
    }else{
        SubButton.innerText = 'Subscribe';
        SubButton.classList.remove('isSubscribedButton');
    }
}
function calculate(){
    let price = Number(document.querySelector('.js_input_price').value);
    if(price<=40 && price>=0 ){
        document.querySelector('.final_price').classList.remove('warning');
        document.querySelector('.final_price').innerText = `$${price+10}`;
    }else if(price>40){
        document.querySelector('.final_price').classList.remove('warning');
        document.querySelector('.final_price').innerText = `$${price}`;
    }else{
        document.querySelector('.final_price').innerText = `Error: cost Must be Valid Positive Number`;
        document.querySelector('.final_price').classList.add('warning');
    }
}
function eventhandleCost(event){
    let key = event.key;
        if(key==='Enter'){
            calculate();
        }
}