import "./home.css";

const homePage = () => {
  let content = document.querySelector("#content");

  let image = document.createElement("img");
  image.src = "..src/img/food.avif";
  image.alt = "Picture of food";

  let mainContent = document.createElement("div");
  mainContent.id = "home-content";

  let about = document.createElement("article");
  about.id = "about";
  about.textContent =
    "Restaurant Two has the best food around, cooked by our masterful chefs with decades of experiece between them. We are dedicated to amazing customer service and always maintain a blissful atmosphere for our wonderful customers.";

  let openingTimes = document.createElement("section");
  openingTimes.id = "opening-times";

  let openTimesTitle = document.createElement("h2");
  openTimesTitle.textContent = "Opening Times:";

  let timesList = document.createElement("ul");
  timesList.id = "times-list";
  let monday = document.createElement("li");
  monday.textContent = "Monday: 6am - 6pm";
  let tuesday = document.createElement("li");
  tuesday.textContent = "Tuesday: 6am - 6pm";
  let wednesday = document.createElement("li");
  wednesday.textContent = "Wednesday: 6am - 6pm";
  let thursday = document.createElement("li");
  thursday.textContent = "Thursday: 6am - 9pm";
  let friday = document.createElement("li");
  friday.textContent = "Friday: 6am - 10pm";
  let saturday = document.createElement("li");
  saturday.textContent = "Saturday: 8am - 10pm";
  let sunday = document.createElement("li");
  sunday.textContent = "Sunday: 8am - 8pm";
  timesList.append(
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  );

  openingTimes.append(openTimesTitle, timesList);

  let address = document.createElement("article");
  address.id = "address";
  address.textContent = "Find us: 123 Restaurant Road, London";

  mainContent.append(about, openingTimes, address);

  content.append(image, mainContent);
};

export { homePage };
