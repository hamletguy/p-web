let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select the search bar and all car sections
  const searchBar = document.getElementById("searchbar");
  const carSections = document.querySelectorAll("section.car");

  // Add an event listener to the search bar
  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase().trim();

    // Loop through each car section
    carSections.forEach((section) => {
      // Get the car name and description
      const carName = section.id.toLowerCase();
      const description = section
        .querySelector(".text")
        .textContent.toLowerCase();

      // Check if the search term matches the car name or description
      if (carName.includes(searchTerm) || description.includes(searchTerm)) {
        section.classList.remove("hidden"); // Show the section by removing 'hidden' class
      } else {
        section.classList.add("hidden"); // Hide the section by adding 'hidden' class
      }
    });
  });
});
