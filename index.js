const dropdownLink = document.querySelector(".dropdown a");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior

  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
    dropdownContent.style.width = "auto"; // Add this line to prevent width increase
  }
});
