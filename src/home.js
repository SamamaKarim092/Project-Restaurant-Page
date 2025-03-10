import cutleryIcon from "./icons/cutlery_6956481.png";

function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = ''; 

    // Create header
    const header = document.createElement("header");

    // Create nav
    const nav = document.createElement("nav");
    nav.classList.add("main-nav");

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
    
    const links = ["Home", "About", "Menu", "Contact"];
    links.forEach(text => {
        const link = document.createElement("a");
        link.textContent = text;
        link.href = "#"; // Placeholder link
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

    // Add all nav elements
    nav.appendChild(logoContainer);
    nav.appendChild(navLinks);
    nav.appendChild(searchBar);
    
    header.appendChild(nav);
    content.appendChild(header);

    // Create main content section
    const mainSection = document.createElement("main");
    mainSection.classList.add("main-content");
    
    // Create text content section
    const textContent = document.createElement("div");
    textContent.classList.add("text-content");
    
    // Create headline with Special MENU
    const specialText = document.createElement("h1");
    specialText.textContent = "Bite";
    specialText.classList.add("special-text");
    
    const menuText = document.createElement("h1");
    menuText.textContent = "RUSH";
    menuText.classList.add("menu-text");
    
    // Add lorem ipsum paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = "At BiteRush, we serve up bold flavors, sizzling hot meals, and fast service that keeps you coming back for more! Whether you're craving juicy burgers, crispy fries, or delicious wraps, we bring the perfect bite—fast and fresh.";
    paragraph.classList.add("description");
    
    // Create a container for the button and info
    const actionContainer = document.createElement("div");
    actionContainer.classList.add("action-container");
    
    // Add Read more button
    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read more";
    readMoreBtn.classList.add("read-more-btn");
    
    // Create the info container (initially hidden)
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    infoContainer.style.display = "none"; // Initially hidden
    
    // Create hours section
    const hoursSection = document.createElement("div");
    hoursSection.classList.add("hours-section");
    
    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Hours";
    hoursTitle.classList.add("info-title");
    
    const hoursList = document.createElement("ul");
    hoursList.classList.add("hours-list");
    
    const hours = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
    ];
    
    hours.forEach(day => {
        const listItem = document.createElement("li");
        listItem.textContent = day;
        hoursList.appendChild(listItem);
    });
    
    hoursSection.appendChild(hoursTitle);
    hoursSection.appendChild(hoursList);
    
    // Create location section
    const locationSection = document.createElement("div");
    locationSection.classList.add("location-section");
    
    const locationTitle = document.createElement("h3");
    locationTitle.textContent = "Location";
    locationTitle.classList.add("info-title");
    
    const locationText = document.createElement("p");
    locationText.textContent = "Block 16, North Karachi, Karachi";
    locationText.classList.add("location-text");
    
    locationSection.appendChild(locationTitle);
    locationSection.appendChild(locationText);
    
    // Add hours and location to info container
    infoContainer.appendChild(hoursSection);
    infoContainer.appendChild(locationSection);
    
    // Add event listener to the Read more button
    readMoreBtn.addEventListener("click", function() {
        // Toggle the visibility of the info container
        if (infoContainer.style.display === "none" || infoContainer.style.display === "") {
            infoContainer.style.display = "flex";
            readMoreBtn.textContent = "Show less";
        } else {
            infoContainer.style.display = "none";
            readMoreBtn.textContent = "Read more";
        }
    });
    
    // Add button and info container to the action container
    actionContainer.appendChild(readMoreBtn);
    actionContainer.appendChild(infoContainer);
    
    // Add all text elements
    textContent.appendChild(specialText);
    textContent.appendChild(menuText);
    textContent.appendChild(paragraph);
    textContent.appendChild(actionContainer);
    
    // Create image section with food illustration
    const imageSection = document.createElement("div");
    imageSection.classList.add("image-section");
    
    // Instead of a single image, we'll use this div to apply a background
    const foodIllustration = document.createElement("div");
    foodIllustration.classList.add("food-illustration");
    
    imageSection.appendChild(foodIllustration);
    
    // Add content sections to main
    mainSection.appendChild(textContent);
    mainSection.appendChild(imageSection);
    
    // Add main section to content
    content.appendChild(mainSection);

    // Footer
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = "© 2025 Special Menu Restaurant   ||   Made by Samama Karim";
    content.appendChild(footer);
}

export default loadHomePage;