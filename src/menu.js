const MenuElement = `<img src="./assets/menu.jpg" alt="Wow Foods Menu" />`;

function Menu() {
  const element = document.createElement("div");
  element.classList.add("menu");
  element.setAttribute("id", "menu-content");
  element.innerHTML = MenuElement;
  return element;
}

export default Menu;
