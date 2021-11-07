import mapsPhoto from "./maps.png";

// about us page
function generateAboutUs() {
  const switchableContent = document.querySelector(".switchable-content");

  switchableContent.innerHTML = "";
  const about = document.createElement("div");
  about.classList.add("about");

  const telephone = document.createElement("div");
  telephone.classList.add("telephone");
  telephone.innerHTML = "📞 723 567 373";

  const location = document.createElement("div");
  location.classList.add("location");
  location.innerHTML = "🏠 Sezamkowa 29 Street, Warsaw";

  const imgMaps = document.createElement("img");
  imgMaps.src = mapsPhoto;

  about.appendChild(telephone);
  about.appendChild(location);
  about.appendChild(imgMaps);

  switchableContent.appendChild(about);
}

export { generateAboutUs };
