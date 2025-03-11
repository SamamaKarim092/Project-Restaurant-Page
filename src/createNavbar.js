import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
// Import loadAboutPage and loadContactPage when available

export function createNavbar() {
    const content = document.getElementById("content");
    content.innerHTML = ''; // Clear existing content

    // Create header
    const header = document.createElement("header");

    // Create nav
    const nav = document.createElement("nav");
    nav.classList.add("main-nav");

    // Create logo container with icon
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");

    const icon = document.createElement("img");
    icon.src = "./assets/cutleryIcon.png"; // Update path if needed
    icon.alt = "Restaurant Icon";
    icon.classList.add("logo-icon");

    logoContainer.appendChild(icon);

    // Create navigation links
    const navLinks = document.createElement("div");
    navLinks.classList.add("nav-links");

    const links = ["Home", "About", "Menu", "Contact"];
    links.forEach(text => {
        const link = document.createElement("a");
        link.textContent = text;
        link.href = "#"; // Placeholder link

        // Add event listeners for navigation
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent the default link behavior

            if (text === "Home") {
                loadHomePage();
            } else if (text === "Menu") {
                loadMenuPage();
            } else if (text === "About") {
                console.log("About page clicked"); // Replace with loadAboutPage();
            } else if (text === "Contact") {
                console.log("Contact page clicked"); // Replace with loadContactPage();
            }
        });

        navLinks.appendChild(link);
    });

    // Create search bar
    const searchBar = document.createElement("div");
    searchBar.classList.add("search-container");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search";
    searchInput.classList.add("search-input");

    searchBar.appendChild(searchInput);

    // Add elements to nav
    nav.appendChild(logoContainer);
    nav.appendChild(navLinks);
    nav.appendChild(searchBar);

    header.appendChild(nav);
    content.appendChild(header);
}
