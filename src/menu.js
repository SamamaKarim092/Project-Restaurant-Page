import cutleryIcon from "./icons/cutlery_6956481.png";
import loadHomePage from "./home.js"; // Import the home module
import loadAboutPage from "./about.js";
import loadContactPage from "./contact.js";

import burgerAnimation from "./icons/burger.mp4"; 
import doubleDeckerBurger from "./icons/double decker.mp4"; 
import softDrinks from "./icons/soft drinks.mp4"; 
import vegeBurger from "./icons/vege burger.mp4";    
import chickenRoll from "./icons/chicken roll.mp4";    
import beefRoll from "./icons/beef roll.mp4";    
import fries from "./icons/fries.mp4";    
import onionRings from "./icons/onion rings.mp4";    
import milkshake from "./icons/milkshake.mp4";    


function loadMenuPage() {
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
    
    // Create navigation links (replacing the buttons)
    const navLinks = document.createElement("div");
    navLinks.classList.add("nav-links");
    
    const links = ["Home", "Menu", "About", "Contact"];
    links.forEach(text => {
        const link = document.createElement("button"); // Using button as in your HTML
        link.textContent = text;
        link.classList.add("nav-button");
        
        // Add event listeners for each navigation button
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
    searchInput.placeholder = "Search";
    searchInput.classList.add("search-input");
    
    searchBar.appendChild(searchInput);

    // Add all nav elements
    nav.appendChild(logoContainer);
    nav.appendChild(navLinks);
    nav.appendChild(searchBar);
    
    // Create main content section
    const mainSection = document.createElement("main");
    mainSection.classList.add("main-content", "menu-page");
    
    // Create menu heading
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Our Menu";
    menuHeading.classList.add("menu-heading");
    mainSection.appendChild(menuHeading);
    
    // Create menu categories
    const menuCategories = document.createElement("div");
    menuCategories.classList.add("menu-categories");
    
    // Create category tabs
    const categories = ["All", "Burgers", "Wraps", "Sides", "Drinks"];
    
    const categoryTabs = document.createElement("div");
    categoryTabs.classList.add("category-tabs");
    
    categories.forEach(category => {
        const tab = document.createElement("button");
        tab.textContent = category;
        tab.classList.add("category-tab");
        if (category === "All") {
            tab.classList.add("active");
        }
        
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            document.querySelectorAll(".category-tab").forEach(t => {
                t.classList.remove("active");
            });
            
            // Add active class to clicked tab
            tab.classList.add("active");
            
            // Filter menu items based on category
            if (category === "All") {
                document.querySelectorAll(".menu-item").forEach(item => {
                    item.style.display = "flex";
                });
            } else {
                document.querySelectorAll(".menu-item").forEach(item => {
                    if (item.dataset.category === category) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                });
            }
        });
        
        categoryTabs.appendChild(tab);
    });
    
    menuCategories.appendChild(categoryTabs);
    mainSection.appendChild(menuCategories);
    
    // Create menu items container
    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");
    
    // Menu items data with animations for all items
    const menuItems = [
        {
            name: "Classic Burger",
            price: "$8.99",
            description: "Juicy beef patty with lettuce, tomato, cheese, and our special sauce.",
            category: "Burgers",
            imageClass: "burger-img",
            animation: burgerAnimation
        },
        {
            name: "Double Decker",
            price: "$12.99",
            description: "Two beef patties with bacon, cheese, and all the fixings.",
            category: "Burgers",
            imageClass: "double-burger-img",
            animation: doubleDeckerBurger
        },
        {
            name: "Veggie Burger",
            price: "$9.99",
            description: "Plant-based patty with fresh vegetables and vegan sauce.",
            category: "Burgers",
            imageClass: "veggie-burger-img",
            animation: vegeBurger
        },
        {
            name: "Chicken Wrap",
            price: "$7.99",
            description: "Grilled chicken with lettuce, tomato, and ranch dressing.",
            category: "Wraps",
            imageClass: "chicken-wrap-img",
            animation: chickenRoll
        },
        {
            name: "Spicy Beef Wrap",
            price: "$8.49",
            description: "Seasoned beef with jalapeños and spicy mayo.",
            category: "Wraps",
            imageClass: "beef-wrap-img",
            animation: beefRoll
        },
        {
            name: "French Fries",
            price: "$3.99",
            description: "Crispy golden fries with our signature seasoning.",
            category: "Sides",
            imageClass: "fries-img",
            animation: fries
        },
        {
            name: "Onion Rings",
            price: "$4.49",
            description: "Crispy battered onion rings served with dipping sauce.",
            category: "Sides",
            imageClass: "onion-rings-img",
            animation: onionRings
        },
        {
            name: "Soft Drink",
            price: "$2.49",
            description: "Your choice of soda or lemonade.",
            category: "Drinks",
            imageClass: "soda-img",
            animation: softDrinks
        },
        {
            name: "Milkshake",
            price: "$4.99",
            description: "Thick and creamy shake in vanilla, chocolate, or strawberry.",
            category: "Drinks",
            imageClass: "milkshake-img",
            animation: milkshake
        }
    ];
    
    // Create menu items
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.dataset.category = item.category;
        
        // Create video element for all items that have animations
        if (item.animation) {
            const itemVideo = document.createElement("video");
            itemVideo.classList.add("item-image", item.imageClass);
            itemVideo.src = item.animation;
            itemVideo.loop = true;
            itemVideo.muted = true;
            itemVideo.preload = "auto";
            
            // Add event listeners for hover
            menuItem.addEventListener("mouseenter", () => {
                itemVideo.play();
            });
            
            menuItem.addEventListener("mouseleave", () => {
                itemVideo.pause();
                itemVideo.currentTime = 0; // Reset to first frame when not hovering
            });
            
            menuItem.appendChild(itemVideo);
        } else {
            // Fallback for items without animation (shouldn't happen with current setup)
            const itemImage = document.createElement("div");
            itemImage.classList.add("item-image", item.imageClass);
            menuItem.appendChild(itemImage);
        }
        
        // Create item info
        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");
        
        // Create item header (name and price)
        const itemHeader = document.createElement("div");
        itemHeader.classList.add("item-header");
        
        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        itemName.classList.add("item-name");
        
        const itemPrice = document.createElement("span");
        itemPrice.textContent = item.price;
        itemPrice.classList.add("item-price");
        
        itemHeader.appendChild(itemName);
        itemHeader.appendChild(itemPrice);
        
        // Create item description
        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        itemDescription.classList.add("item-description");
        
        // Create add to cart button
        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to cart";
        addToCartBtn.classList.add("add-to-cart-btn");
        
        addToCartBtn.addEventListener("click", () => {
            console.log(`Added ${item.name} to cart`);
            // Add your cart functionality here
        });
        
        // Assemble item info
        itemInfo.appendChild(itemHeader);
        itemInfo.appendChild(itemDescription);
        itemInfo.appendChild(addToCartBtn);
        
        // Assemble menu item - make sure the video is before the info for proper layout
        menuItem.appendChild(itemInfo);
        
        // Add menu item to container
        menuItemsContainer.appendChild(menuItem);
    });
    
    mainSection.appendChild(menuItemsContainer);
    
    // Add main section to content
    content.appendChild(mainSection);

    // Update the footer
    const footer = document.querySelector("footer");
    footer.classList.add("footer");
    footer.textContent = "© 2025 BiteRush Restaurant   ||   Made by Samama Karim";
}

export default loadMenuPage;