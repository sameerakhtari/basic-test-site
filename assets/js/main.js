$(function () {
    $(".menu-link").click(function () {
      $(".menu-link").removeClass("is-active");
      $(this).addClass("is-active");
    });
  });
  
  $(function () {
    $(".main-header-link").click(function () {
      $(".main-header-link").removeClass("is-active");
      $(this).addClass("is-active");
    });
  });
  
  // Handle dropdown
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdowns.forEach((c) => c.classList.remove("is-active"));
      dropdown.classList.add("is-active");
    });
  });
  
  $(".search-bar input")
    .focus(function () {
      $(".header").addClass("wide");
    })
    .blur(function () {
      $(".header").removeClass("wide");
    });
  
  $(document).click(function (e) {
    const container = $(".status-button");
    const dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      dd.removeClass("is-active");
    }
  });
  
  $(function () {
    $(".dropdown").on("click", function (e) {
      $(".content-wrapper").addClass("overlay");
      e.stopPropagation();
    });
    $(document).on("click", function (e) {
      if (!$(e.target).is(".dropdown")) {
        $(".content-wrapper").removeClass("overlay");
      }
    });
  });
  
  // Show pop-up & overlay
  $(function () {
    $(".status-button:not(.open)").on("click", function () {
      $(".overlay-app").addClass("is-active");
    });
    $(".pop-up .close").click(function () {
      $(".overlay-app").removeClass("is-active");
    });
  });
  
  $(".status-button:not(.open)").click(function () {
    $(".pop-up").addClass("visible");
  });
  
  $(".pop-up .close").click(function () {
    $(".pop-up").removeClass("visible");
  });
  
  // Toggle light/dark mode
  const toggleButton = document.querySelector(".dark-light");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });





  // Get necessary elements
const hamburgerMenu = document.querySelector(".hamburger-menu");
const leftPanel = document.querySelector(".left-side");
const overlay = document.createElement("div"); // Create overlay dynamically

// Add overlay to the body
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Toggle left panel and overlay
const toggleLeftPanel = () => {
  const isActive = leftPanel.classList.contains("is-active");
  if (isActive) {
    leftPanel.classList.remove("is-active");
    overlay.classList.remove("is-active");
  } else {
    leftPanel.classList.add("is-active");
    overlay.classList.add("is-active");
  }
};

// Close left panel and overlay
const closeLeftPanel = () => {
  leftPanel.classList.remove("is-active");
  overlay.classList.remove("is-active");
};

// Event listeners
hamburgerMenu.addEventListener("click", toggleLeftPanel); // Toggle on hamburger click
overlay.addEventListener("click", closeLeftPanel); // Close on overlay click
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLeftPanel(); // Close on Escape key press
});


