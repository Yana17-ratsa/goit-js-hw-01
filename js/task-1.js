'use strict';

function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

const result1 = makeTransaction(5, 3000);
console.log(result1);
const result1_1 = makeTransaction(3, 1000);
console.log(result1_1);
const result1_2 = makeTransaction(10, 500);
console.log(result1_2);