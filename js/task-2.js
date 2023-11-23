'use strict';

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

const result2 = getShippingMessage("Australia", 120, 50);
console.log(result2);
const result2_1 = getShippingMessage("Germany", 80, 20);
console.log(result2_1);
const result2_2 = getShippingMessage("Sweden", 100, 20);
console.log(result2_2);
