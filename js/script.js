"use strict";

const button = document.querySelector(".nav-button");
const menu = button.querySelector(".nav-button__toggle");
const menuList = document.querySelector(".main-nav");

button.addEventListener("click", function (){
    menu.classList.toggle("close");
    menuList.classList.toggle("main-nav--closed");
});