"use strict";

const button = document.querySelector(".nav-button");
const menu = button.querySelector(".nav-button__toggle");
const menuList = document.querySelector(".main-nav");

button.addEventListener("click", function (){
    menu.classList.toggle("close");
    menuList.classList.toggle("main-nav--closed");
});


function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) {
    age--;
  }
  return age;
}

const age_field = document.querySelector(".happy-br");
const birthDate = new Date(1991, 9, 14);
age_field.textContent = calculateAge(birthDate)
