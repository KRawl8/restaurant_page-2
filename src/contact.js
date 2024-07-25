import "./contact.css";

let contactPage = () => {
  let content = document.querySelector("#content");

  let contactContent = document.createElement("div");
  contactContent.id = "contact-content";

  let contactTitle = document.createElement("h2");
  contactTitle.id = "contact-title";
  contactTitle.textContent = "Contact Us";

  let contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";

  let leftContact = document.createElement("div");
  leftContact.className = "contact-item";
  let icon1 = document.createElement("img");
  icon1.id = "email-icon";
  icon1.src = "../src/img/email.png";
  let text1 = document.createElement("p");
  text1.className = "contact-text";
  text1.textContent = "Email Us: restaurant.two@email.com";
  leftContact.append(icon1, text1);

  let rightContact = document.createElement("div");
  rightContact.className = "contact-item";
  let icon2 = document.createElement("img");
  icon2.id = "phone-icon";
  icon2.src = "../src/img/phone.png";
  let text2 = document.createElement("p");
  text2.className = "contact-text";
  text2.textContent = "Phone Us: 111-111-1111";
  rightContact.append(icon2, text2);

  contactInfo.append(leftContact, rightContact);

  contactContent.append(contactTitle, contactInfo);
  content.append(contactContent);
};

export { contactPage };
