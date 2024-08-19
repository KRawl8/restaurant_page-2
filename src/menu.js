import "./menu.css";
import Food1 from "../src/img/pizza.jpg";
import Food2 from "../src/img/pasta.jpg";
import Food3 from "../src/img/burger.jpg";
import Food4 from "../src/img/chicken-tikka.avif";

const menuPage = () => {
  let content = document.querySelector("#content");

  let menuContent = document.createElement("div");
  menuContent.id = "menu-content";

  let food1 = document.createElement("div");
  food1.id = "food-1";
  let foodImage1 = document.createElement("img");
  foodImage1.src = Food1;
  foodImage1.id = "food-image-1";
  let foodTitle1 = document.createElement("h3");
  foodTitle1.textContent = "Pizza";
  let foodText1 = document.createElement("p");
  foodText1.textContent =
    "Our famous margherita pizza, topped with fresh tomatoes and cheese.";
  food1.append(foodImage1, foodTitle1, foodText1);

  let food2 = document.createElement("div");
  food2.id = "food-2";
  let foodImage2 = document.createElement("img");
  foodImage2.src = Food2;
  foodImage2.id = "food-image-2";
  let foodTitle2 = document.createElement("h3");
  foodTitle2.textContent = "Pasta";
  let foodText2 = document.createElement("p");
  foodText2.textContent =
    "The most flavourful pasta dish, covered in the finest tasting bolognese.";
  food2.append(foodImage2, foodTitle2, foodText2);

  let food3 = document.createElement("div");
  food3.id = "food-3";
  let foodImage3 = document.createElement("img");
  foodImage3.src = Food3;
  foodImage3.id = "food-image-3";
  let foodTitle3 = document.createElement("h3");
  foodTitle3.textContent = "Burger";
  let foodText3 = document.createElement("p");
  foodText3.textContent =
    "A juicy beef burger containing onions, tomatoes and our unique sauces.";
  food3.append(foodImage3, foodTitle3, foodText3);

  let food4 = document.createElement("div");
  food4.id = "food-4";
  let foodImage4 = document.createElement("img");
  foodImage4.src = Food4;
  foodImage4.id = "food-image-4";
  let foodTitle4 = document.createElement("h3");
  foodTitle4.textContent = "Chicken Tikka Masala";
  let foodText4 = document.createElement("p");
  foodText4.textContent =
    "Finely cooked chicken swimming in a mildly spicy creamy sauce.";
  food4.append(foodImage4, foodTitle4, foodText4);

  menuContent.append(food1, food2, food3, food4);

  content.append(menuContent);
};

export { menuPage };
