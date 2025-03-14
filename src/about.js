// In about.js
import cutleryIcon from "./icons/cutlery_6956481.png";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

function loadAboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = ''; 
    
    // Reference existing header and navigation elements
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    nav.classList.add("main-nav");
    
    // Clear existing nav contents
    nav.innerHTML = '';
    
    // Create logo container with icon
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    
    const icon = document.createElement("img");
    icon.src = cutleryIcon;
    icon.alt = "Restaurant Icon";
    icon.classList.add("logo-icon");
    
    logoContainer.appendChild(icon);
    
    // Create navigation links
    const navLinks = document.createElement("div");
    navLinks.classList.add("nav-links");
    
    const links = ["Home", "Menu", "About", "Contact"];
    links.forEach(text => {
        const link = document.createElement("button");
        link.textContent = text;
        link.classList.add("nav-button");
        
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            if (text === "Home") {
                loadHomePage();
            } else if (text === "Menu") {
                loadMenuPage();
            } else if (text === "About") {
                loadAboutPage();
            } else if (text === "Contact") {
                loadContactPage();
            }
        });
        
        navLinks.appendChild(link);
    });

    // Create search bar
    const searchBar = document.createElement("div");
    searchBar.classList.add("search-container");
    
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search...";
    searchInput.classList.add("search-input");
    
    searchBar.appendChild(searchInput);

    // Add all nav elements
    nav.appendChild(logoContainer);
    nav.appendChild(navLinks);
    nav.appendChild(searchBar);
    
    // Create main content section
    const mainSection = document.createElement("main");
    mainSection.classList.add("main-content", "about-page");

    // Create about heading
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About Us";
    aboutHeading.classList.add("about-heading");
    mainSection.appendChild(aboutHeading);

    // Create about paragraph
    const aboutPara = document.createElement("div");
    aboutPara.classList.add("about-paragraph");
    aboutPara.innerHTML = `
        <p>Welcome to <strong>BiteRush Restaurant</strong>, where we serve delicious meals crafted with passion and fresh ingredients. Our goal is to provide an unforgettable dining experience that delights your taste buds.</p>
        <p>This project is part of <strong>The Odin Project</strong>, where I built a dynamic restaurant page that showcases our menu, pricing, and restaurant information. Through this project, I enhanced my skills in <strong>Webpack</strong> and developed the entire website using only <strong>DOM manipulation</strong>.</p>
        <p>Enjoy your time exploring our restaurant page, and we hope to serve you soon!</p>
    `;
    
    // Append the paragraph to main section
    mainSection.appendChild(aboutPara);
    
    // Add main section to content
    content.appendChild(mainSection);

    // Update the footer
    const footer = document.querySelector("footer");
    footer.classList.add("footer");
    footer.textContent = "© 2025 BiteRush Restaurant   ||   Made by Samama Karim";
}

export default loadAboutPage;

