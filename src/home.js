import cutleryIcon from "./icons/cutlery_6956481.png";

function loadHomePage() {
    const content = document.getElementById("content");

    // Create header
    const header = document.createElement("header");

    // Create nav
    const nav = document.createElement("nav");

    // Create icon
    const icon = document.createElement("img");
    icon.src = cutleryIcon; 
    icon.height = 50; // Adjust size as needed
    icon.alt = "Restaurant Icon";

    // Create div for buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container"); // Add class for styling

    // Create navigation buttons
    const navButtons = ["Home", "About", "Menu", "Contact"];
    navButtons.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        buttonContainer.appendChild(button); // Append buttons inside the div
    });

    // Create the search bar
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.placeholder = "Search...";
    searchBar.id = "searchBar";

    // Append elements to nav
    nav.appendChild(icon); // Adds the icon at the start of nav
    nav.appendChild(buttonContainer); // Append button div
    nav.appendChild(searchBar); // Append search bar

    // Append nav to header
    header.appendChild(nav);

    // Create main content elements
    const headline = document.createElement("h1");
    headline.textContent = "Restaurant Page";

    const image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.height = 500; 
    image.alt = "Restaurant Pic";

    const description = document.createElement("p");
    description.textContent = "This is my Restaurant page";

    // Append elements to #content
    content.appendChild(header);
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
}

// Export function for use in index.js
export default loadHomePage;
