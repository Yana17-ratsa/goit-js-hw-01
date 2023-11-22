'use strict';

function getElementWidth(content, padding, border) {
    const borderBox = Number.parseFloat(content) + (Number.parseFloat(padding) + Number.parseFloat(border)) * 2;
    return borderBox + "px";
}

const result3 = getElementWidth();
console.log(result3);