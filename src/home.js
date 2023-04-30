const HomeElement = ` <section class="hero">
          <img src="./assets/hero2.png" alt="Wow Foods for you!" />
        </section>
        <main>
          <p>
            Welcome to "Wow Foods" - the ultimate destination for foodies who
            crave a taste of perfection! Our restaurant is dedicated to serving
            up delicious and innovative dishes that will make your taste buds
            dance with joy. Whether you're in the mood for classic comfort foods
            or bold and exotic flavors, we've got you covered. And with our
            commitment to using only the freshest ingredients and carefully
            crafted recipes, you can be sure that every bite will be a
            mouthwatering masterpiece. But that's not all - we also pride
            ourselves on creating a welcoming and comfortable atmosphere that
            will make you feel like part of our family. So come on in and
            discover the "Wow" factor for yourself. Our friendly and attentive
            staff is ready to make your dining experience one to remember!
          </p>
        </main>
        <section class="food-items">
          <div class="item"><img src="./assets/f1.jpg" alt="Burger" /></div>
          <div class="item">
            <img src="./assets/f2.jpg" alt="Chciken Grill" />
          </div>
          <div class="item">
            <img src="./assets/f3.jpg" alt="Fried Chicken" />
          </div>
          <div class="item">
            <img src="./assets/f4.jpg" alt="Spring Roll" />
          </div>
        </section>`;

function Home() {
  const element = document.createElement("div");
  element.innerHTML = HomeElement;
  element.setAttribute("id", "home-content");
  return element;
}

export default Home;
