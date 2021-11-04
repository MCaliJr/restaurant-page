import "./style.css";
import { generateAboutUs } from "./aboutUs";

const content = document.querySelector("#content");

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = "DOM <br />SCHABOWEGO";
  header.appendChild(logo);

  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.innerHTML = "Home";
  li1.onclick = generateHomePage;
  const li2 = document.createElement("li");
  li2.innerHTML = "Menu";
  li2.onclick = generateMenu;
  const li3 = document.createElement("li");
  li3.innerHTML = "About us";
  li3.onclick = generateAboutUs;
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  header.appendChild(ul);

  content.appendChild(header);
}

createHeader();

// switchable content creation
const page = document.createElement("div");
page.classList.add("page");

const switchableContent = document.createElement("div");
switchableContent.classList.add("switchable-content");

page.appendChild(switchableContent);

content.appendChild(page);

// home page
function generateHomePage() {
  switchableContent.innerHTML = "";

  const h1Title = document.createElement("h1");
  h1Title.innerHTML = "Best schabowy<br />in the city";

  const imgHome = document.createElement("img");
  imgHome.classList.add("photo-home");
  imgHome.src = "/src/foodForHome.jpg";

  const h4TextOne = document.createElement("h4");
  h4TextOne.innerHTML = "Made with magic since 2001";

  const h4TextTwo = document.createElement("h4");
  h4TextTwo.innerHTML =
    "Check out menu, reserve a table and feel like you magically came back to your grandma house.";

  const orderButton = document.createElement("button");
  orderButton.innerHTML = "Check menu now!";

  orderButton.classList.add("order-button");
  orderButton.setAttribute("id", "orderButton");

  switchableContent.appendChild(h1Title);
  switchableContent.appendChild(imgHome);
  switchableContent.appendChild(h4TextOne);
  switchableContent.appendChild(h4TextTwo);
  switchableContent.appendChild(orderButton);
}

generateHomePage();

// menu page

function newMenuCard(
  dishNameInnerHTML,
  dishDescriptionInnerHTML,
  imgDishSrc,
  priceInnerHTML
) {
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-card");

  const dishNameAndDescription = document.createElement("div");
  dishNameAndDescription.classList.add("dish-name-and-description");

  const dishName = document.createElement("div");
  dishName.classList.add("dish-name");
  dishName.innerHTML = dishNameInnerHTML;

  const dishDesctiption = document.createElement("div");
  dishDesctiption.classList.add("dish-description");
  dishDesctiption.innerHTML = dishDescriptionInnerHTML;

  const photoAndPrice = document.createElement("div");
  photoAndPrice.classList.add("photo-and-price");

  const imgDish = document.createElement("img");
  imgDish.src = imgDishSrc;

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerHTML = priceInnerHTML;

  menuCard.appendChild(dishNameAndDescription);
  dishNameAndDescription.appendChild(dishName);
  dishNameAndDescription.appendChild(dishDesctiption);

  menuCard.appendChild(photoAndPrice);
  photoAndPrice.appendChild(imgDish);
  photoAndPrice.appendChild(price);

  switchableContent.appendChild(menuCard);
}
function generateMenu() {
  switchableContent.innerHTML = "";
  newMenuCard(
    "1. Pork Chop",
    "Simple slice of meat aroused with amazlingly crunchy bread coating!",
    "/src/porkChop.jpg",
    "$12"
  );

  newMenuCard(
    "2. Steak Benedict",
    "Poached egg, steak, bell pepper, hollandaise, side of potatoes!",
    "/src/steakBenedict.jpg",
    "$16"
  );

  newMenuCard(
    "3. Country Sandwich",
    "NY strip, bacon, parmesan cheese sauce, mesclun, egg!",
    "/src/countrySandwitch.jpg",
    "$18"
  );

  newMenuCard(
    "4. Veggie Skillet",
    "potatoes, sautéed veggies, cheese, served with choice of toast or pancakes (egg $2, shrimp $3, steak $4, crab $6, lobster $9)!",
    "/src/veggies.jpeg",
    "$16"
  );

  newMenuCard(
    "5. Pancakes (7)",
    "Buttermilk pancakes, whipped butter, maple syrup!",
    "/src/panckakes.jpg",
    "$13"
  );
}

// about us page
