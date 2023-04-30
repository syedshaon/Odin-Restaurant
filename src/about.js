const AboutElement = ` <div class="wow-image">
          <img src="./assets/about.jpg" alt="About Wow Foods" />
        </div>
        <div class="wow-details">
          <p>
            Welcome to "Wow Foods", where culinary excellence meets innovation!
            Our restaurant has a rich history that spans decades, and our team
            of passionate chefs is dedicated to creating a dining experience
            like no other. We pride ourselves on offering a fusion of flavors
            that combines traditional techniques with innovative ideas,
            resulting in dishes that are both unique and delicious.
          </p>

          <p>
            From the very beginning, our restaurant was known for its commitment
            to quality and innovation. Our chefs spent hours in the kitchen,
            experimenting with new flavors and ingredients, and perfecting
            recipes that would become our signature dishes. We quickly earned a
            reputation for serving up some of the best food in town, and our
            customers kept coming back for more.
          </p>
          <p>
            Over the years, we've continued to push the boundaries of what's
            possible in the kitchen. We've combined classic flavors with modern
            techniques, creating dishes that are both familiar and exciting. Our
            menu features a wide range of options, from hearty comfort foods to
            exotic delicacies, so there's something for everyone to enjoy.
          </p>
          <p>
            One of our specialties is our use of fresh, locally sourced
            ingredients. We work closely with local farmers and suppliers to
            ensure that everything we use is of the highest quality. From our
            meats to our vegetables to our herbs and spices, we take pride in
            using only the freshest ingredients in our dishes.
          </p>
          <p>
            Another specialty of ours is our commitment to innovation. We're
            always experimenting with new flavors and techniques, and we're not
            afraid to try something new. Our chefs are constantly pushing the
            boundaries of what's possible in the kitchen, and our customers are
            always excited to see what we'll come up with next.
          </p>

          <p>
            At "Wow Foods", we're committed to providing our customers with an
            exceptional dining experience. Whether you're a foodie looking for
            something new or just in the mood for a great meal, we've got
            something for everyone. Come join us for a culinary adventure that
            will leave you saying "Wow"!
          </p>
        </div>`;

function About() {
  const element = document.createElement("div");
  element.classList.add("about");
  element.setAttribute("id", "about-content");
  element.innerHTML = AboutElement;
  return element;
}

export default About;
