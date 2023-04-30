const HeaderElement = `<div class="logo">
          <img src="./assets/logo.png" alt="Wow Restaurant Logo" />
        </div>
        <nav>
          <ul>
            <li id="home">Home</li>
            <li id="menu">Menu</li>
            <li id="about">About</li>
          </ul>
        </nav>`;

function Header() {
  const element = document.createElement("header");
  element.innerHTML = HeaderElement;
  return element;
}

export default Header;
