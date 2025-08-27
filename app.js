// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Lightbox functionality
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  lightboxImage.src = imageSrc;
  lightbox.style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Close lightbox when clicking outside the image
window.onclick = function (event) {
  const lightbox = document.getElementById("lightbox");
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
};
