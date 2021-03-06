import porkChop from "./porkChop.jpg";
import steakBenedict from "./steakBenedict.jpg";
import countrySandwitch from "./countrySandwitch.jpg";
import veggies from "./veggies.jpeg";
import panckakes from "./panckakes.jpg";

// menu page

function newMenuCard(
  dishNameInnerHTML,
  dishDescriptionInnerHTML,
  imgDishSrc,
  priceInnerHTML
) {
  const switchableContent = document.querySelector(".switchable-content");

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
  const switchableContent = document.querySelector(".switchable-content");

  switchableContent.innerHTML = "";
  newMenuCard(
    "1. Pork Chop",
    "Simple slice of meat aroused with amazlingly crunchy bread coating!",
    porkChop,
    "$12"
  );

  newMenuCard(
    "2. Steak Benedict",
    "Poached egg, steak, bell pepper, hollandaise, side of potatoes!",
    steakBenedict,
    "$16"
  );

  newMenuCard(
    "3. Country Sandwich",
    "NY strip, bacon, parmesan cheese sauce, mesclun, egg!",
    countrySandwitch,
    "$18"
  );

  newMenuCard(
    "4. Veggie Skillet",
    "potatoes, saut??ed veggies, cheese, served with choice of toast or pancakes (egg $2, shrimp $3, steak $4, crab $6, lobster $9)!",
    veggies,
    "$16"
  );

  newMenuCard(
    "5. Pancakes (7)",
    "Buttermilk pancakes, whipped butter, maple syrup!",
    panckakes,
    "$13"
  );
}

export { generateMenu };
