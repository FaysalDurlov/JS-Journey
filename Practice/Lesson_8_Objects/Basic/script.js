product_1 = {
    name:"Basketball",
    price: 2000
}
product_2 = {
    name:"Basketball",
    price: 2000
}
function comparePrice(product1,product2){
    if (product1.name === product2.name){
        if(product1.price<=product2.price){
            return product1;
        }else if(product1.price>product2.price){
            return product2;
        }
    }
}
function isSameProduct(product1,product2){
    if(product1.name ===product2.name){
        if(product1.price===product2.price){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}








product_1.price = 500;
product_1['delivery-time'] = "3 days";
console.log(product_1,product_2);
let cheatPrice = comparePrice(product_1,product_2);
console.log(cheatPrice);
console.log(isSameProduct(product_1,product_2));
console.log("Good Morning".toLowerCase());
console.log("test".repeat(2));