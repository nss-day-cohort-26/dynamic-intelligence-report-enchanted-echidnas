
const navHeader = "Ruben Torosian";
const navLinks = [];

const linkHREF = ["rl__h2", "bs__h2", "jh__h2", "eh__h2"];
const linkText = ["Executive Summary", "Rap Sheet", "News Feed", "Financial Interests"];
for (let i = 0; i < linkHREF.length; i++) {
  const aTag = document.createElement("a");
  aTag.setAttribute("href", `#${linkHREF[i]}`);
  const textContent = document.createTextNode(linkText[i]);
  aTag.appendChild(textContent);
  // aTag.textContent = linkText[i];
  console.log(aTag);
  navLinks.push(aTag);
}

const navbar = createSection(navHeader, navLinks);
navbar.setAttribute("class", "navbar");
const navArray = [navbar];
