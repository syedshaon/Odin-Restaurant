import "./style.scss";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Menu from "./menu";
import About from "./about";

// function component() {

// const myIcon = new Image();
// myIcon.src = About;
// myIcon.src = Logo;

const mainElement = document.getElementById("main-content");

// element.appendChild(Header());
// element.appendChild(Footer());

document.getElementById("home").addEventListener("click", () => {
  mainElement.innerHTML = "";
  mainElement.appendChild(Home());
});
document.getElementById("logo").addEventListener("click", () => {
  mainElement.innerHTML = "";
  mainElement.appendChild(Home());
});
document.getElementById("menu").addEventListener("click", () => {
  mainElement.innerHTML = "";
  mainElement.appendChild(Menu());
});
document.getElementById("about").addEventListener("click", () => {
  mainElement.innerHTML = "";
  mainElement.appendChild(About());
});

mainElement.appendChild(Home());
// mainElement.appendChild(Menu());
// mainElement.appendChild(About());

// const btn = document.createElement("button");
// element.innerHTML = "Hello webpack";
// btn.innerHTML = "Click me and check the console!";
// element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(element);

//  Import Images

import Logo from "./assets/logo.png";
import Hero from "./assets/hero2.png";
import f1 from "./assets/f1.jpg";
import f2 from "./assets/f2.jpg";
import f3 from "./assets/f3.jpg";
import f4 from "./assets/f4.jpg";
import feedback from "./assets/footer2.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.png";
import whatsapp from "./assets/whatsapp.png";
import pinterest from "./assets/pinterest.png";
import menu from "./assets/menu.jpg";
import chef from "./assets/about.jpg";
