import "./header.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

for (let i = 1; i < document.styleSheets.length; i++) {
  document.styleSheets.item(i).disabled = true;
}

homePage();
document.styleSheets.item(1).disabled = false;

let navList = document.querySelectorAll("button");
navList.forEach((navButton) => {
  navButton.addEventListener("click", () => {
    navList.forEach((button) => {
      button.id = undefined;
    });
    navButton.id = "current-page";
    if (navButton.textContent === "Home") {
      loadPage(homePage);
      document.styleSheets.item(1).disabled = false;
    } else if (navButton.textContent === "Menu") {
      loadPage(menuPage);
      document.styleSheets.item(2).disabled = false;
    } else if (navButton.textContent === "Contact") {
      loadPage(contactPage);
      document.styleSheets.item(3).disabled = false;
    }
  });
});

// When a new page is clicked it disables all other styleSheets and HTML elements and then loads the page
const loadPage = (clickedPage) => {
  for (let i = 1; i < document.styleSheets.length; i++) {
    document.styleSheets.item(i).disabled = true;
  }
  const content = document.querySelector("#content");
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
  clickedPage();
};
