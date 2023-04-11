'use strict';

const result = document.getElementById('result');
const button = document.getElementById('button');
const unsei = ['大吉', '吉', '凶'];

button.addEventListener('click', () => {
    const value = Math.floor(Math.random() * unsei.length);
    result.textContent = unsei[value];
});