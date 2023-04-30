const FooterElement = `<nav>
          <ul>
            <li id="home">Home</li>
            <li id="menu">Menu</li>
            <li id="about">About</li>
            <li id="Disclaimer">Disclaimer</li>
            <li id="Contact">Contact</li>
          </ul>
        </nav>

        <div class="intro">
          <img src="./assets/footer2.png" alt="We value your feedback" />
          <p>
            We value your feedback :). Let's share your experience with us and
            allow us to offer even better foods!
          </p>
        </div>

        <div class="social">
          <ul>
            <li><img src="./assets/facebook.png" alt="facebook" /></li>
            <li><img src="./assets/twitter.png" alt="twitter" /></li>
            <li><img src="./assets/instagram.png" alt="instagram" /></li>
            <li><img src="./assets/youtube.png" alt="youtube" /></li>
            <li><img src="./assets/whatsapp.png" alt="whatsapp" /></li>
            <li><img src="./assets/pinterest.png" alt="pinterest" /></li>
          </ul>
        </div>`;

function Footer() {
  const element = document.createElement("footer");
  element.innerHTML = FooterElement;
  return element;
}

export default Footer;
