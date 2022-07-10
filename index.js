"use strict";

const menuBar = document.querySelector(".fa-solid");
const cancelBar = document.querySelector(".fa-xmark");

const navbarItems = document.getElementById("navbar--items");

const menuDropdown = function () {
  if (menuBar.classList.contains("fa-bars")) {
    menuBar.classList.remove("fa-bars");
    menuBar.classList.add("fa-xmark");
    navbarItems.style.visibility = "visible";
    navbarItems.style.transform = "scaleY(1)";
  } else if (menuBar.classList.contains("fa-xmark")) {
    menuBar.classList.add("fa-bars");
    menuBar.classList.remove("fa-xmark");
    navbarItems.style.visibility = "hidden";
    navbarItems.style.transform = "scaleY(0)";
  }
};

menuBar.addEventListener("click", menuDropdown);
