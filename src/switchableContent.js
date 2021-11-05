// switchable content creation

function createSwitchableContent() {
  const content = document.querySelector("#content");

  const page = document.createElement("div");
  page.classList.add("page");

  const switchableContent = document.createElement("div");
  switchableContent.classList.add("switchable-content");

  page.appendChild(switchableContent);

  content.appendChild(page);
}

export { createSwitchableContent };
