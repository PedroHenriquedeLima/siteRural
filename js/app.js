document.addEventListener("DOMContentLoaded", function () {
    // Modal functionality
    const menuToggle = document.getElementById("menu-toggle");
    const modal = document.getElementById("menu-modal");
    const closeBtn = document.querySelector(".close");
    const navlinks = document.querySelectorAll(".navlink");
  
    const btnIrrigacao = document.getElementById("irrigacao");
    const btnConsorcio = document.getElementById("consorcio");
    const btnAgrofloresta = document.getElementById("agrofloresta");
  
    const detailIrrigacao = document.getElementById("detail-irrigacao");
    const detailConsorcio = document.getElementById("detail-consorcio");
    const detailAgrofloresta = document.getElementById("detail-agrofloresta");
  
    const closeDetailIrrigacao = document.getElementById("close-detail-irrigacao");
    const closeDetailConsorcio = document.getElementById("close-detail-consorcio");
    const closeDetailAgrofloresta = document.getElementById("close-detail-agrofloresta");
  
    // Event handlers for detail sections
    function toggleDetailSection(button, detail, displayStyle = "block") {
      button.addEventListener("click", function () {
        detail.style.display = displayStyle;
      });
    }
  
    function closeDetailSection(closeButton, detail) {
      closeButton.addEventListener("click", function () {
        detail.style.display = "none";
      });
    }
  
    toggleDetailSection(btnIrrigacao, detailIrrigacao);
    closeDetailSection(closeDetailIrrigacao, detailIrrigacao);
  
    toggleDetailSection(btnConsorcio, detailConsorcio, "flex");
    closeDetailSection(closeDetailConsorcio, detailConsorcio);
  
    toggleDetailSection(btnAgrofloresta, detailAgrofloresta, "flex");
    closeDetailSection(closeDetailAgrofloresta, detailAgrofloresta);
  
    // Modal event handlers
    menuToggle.addEventListener("click", function () {
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  
    // Navlink functionality for small screens
    function addNavlinkEventListeners() {
      navlinks.forEach(function (navlink) {
        if (window.innerWidth < 768) {
          navlink.addEventListener("click", function () {
            console.log("Navlink clicked:", navlink.getAttribute("href"));
            modal.style.display = "none";
          });
        }
      });
    }
  
    function checkScreenSize() {
      if (window.innerWidth < 768) {
        addNavlinkEventListeners();
      }
    }
  
    // Smooth scroll functionality
    function smoothScroll(target, duration) {
      const targetElement = document.querySelector(target);
      const targetPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  
    // Initial setup
    checkScreenSize();
  
    // Recheck screen size on window resize
    window.addEventListener("resize", checkScreenSize);
  });
      