import cutleryIcon from "./icons/cutlery_6956481.png";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

function loadContactPage() {
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
    mainSection.classList.add("main-content-contact", "contact-page");

    // Create contact heading
    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "Contact Us";
    contactHeading.classList.add("contact-heading");
    mainSection.appendChild(contactHeading);

    // Contact information array
    const contacts = [
        { name: "Samama Karim", role: "Manager", phone: "0328-2077180" },
        { name: "Muhammad Ahmed", role: "Chef", phone: "0319-14239001" },
        { name: "Asadullah Bin Tufail", role: "Chef", phone: "0329-9301931" }
    ];

    // Create contact list container
    const contactList = document.createElement("div");
    contactList.classList.add("contact-list");

    contacts.forEach(person => {
        const contactItem = document.createElement("div");
        contactItem.classList.add("contact-item");
        
        const name = document.createElement("h3");
        name.textContent = person.name;
        name.classList.add("contact-name");
        
        const role = document.createElement("p");
        role.textContent = person.role;
        role.classList.add("contact-role");
        
        const phone = document.createElement("p");
        phone.textContent = person.phone;
        phone.classList.add("contact-phone");
        
        contactItem.appendChild(name);
        contactItem.appendChild(role);
        contactItem.appendChild(phone);
        contactList.appendChild(contactItem);
    });

    mainSection.appendChild(contactList);
    content.appendChild(mainSection);

    // Update the footer
    const footer = document.querySelector("footer");
    footer.classList.add("footer");
    footer.textContent = "© 2025 BiteRush Restaurant   ||   Made by Samama Karim";
}

export default loadContactPage;
