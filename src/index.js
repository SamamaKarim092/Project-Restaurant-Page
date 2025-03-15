import "./styles.css";
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';
import loadAboutPage from './about.js';

document.addEventListener("DOMContentLoaded", () => {
  // Initial page load
  loadHomePage();
  
  // Get references to navigation buttons
  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const contactBtn = document.getElementById('contact-btn');
  const aboutBtn = document.getElementById('about-btn');
  
  // Get reference to the content container
  const content = document.getElementById('content');
  
  // Add click event listeners to each navigation button
  homeBtn.addEventListener('click', () => {
    clearContent();
    loadHomePage();
  });
  
  menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenuPage();
  });
  
  contactBtn.addEventListener('click', () => {
    clearContent();
    loadContactPage();
  });
  
  aboutBtn.addEventListener('click', () => {
    clearContent();
    loadAboutPage();
  });
  
  // Function to clear the content div
  function clearContent() {
    content.innerHTML = '';
  }
});