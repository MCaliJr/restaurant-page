import { generateMenu } from "./menu";

// home page
function generateHomePage() {
  const switchableContent = document.querySelector(".switchable-content");

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
  orderButton.onclick = generateMenu;

  orderButton.classList.add("order-button");
  orderButton.setAttribute("id", "orderButton");

  switchableContent.appendChild(h1Title);
  switchableContent.appendChild(imgHome);
  switchableContent.appendChild(h4TextOne);
  switchableContent.appendChild(h4TextTwo);
  switchableContent.appendChild(orderButton);
}

export { generateHomePage };
