'use strict';

function getElementWidth(content, padding, border) {
    const borderBox = Number.parseFloat(content) + (Number.parseFloat(padding) + Number.parseFloat(border)) * 2;
    return borderBox;
}

const result3 = getElementWidth("50px", "8px", "4px");
console.log(result3);
const result3_1 = getElementWidth("60px", "12px", "8.5px");
console.log(result3_1);
const result3_2 = getElementWidth("200px", "0px", "0px");
console.log(result3_2);