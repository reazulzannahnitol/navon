function openNavbar() {
  document.getElementById('mobileNavbar').style.right = '0'; // Show the navbar
}

function closeNavbar() {
  document.getElementById('mobileNavbar').style.right = '-300px'; // Hide the navbar
}

// Close the navbar by clicking outside of it
document.addEventListener('click', function(event) {
  const navbar = document.getElementById('mobileNavbar');
  const isClickInside = navbar.contains(event.target) || document.querySelector('.navbar-toggler').contains(event.target);
  
  if (!isClickInside && navbar.style.right === '0px') {
      closeNavbar(); // Close if clicking outside
  }
});

// Automatically close the navbar when clicking a link inside it
document.querySelectorAll('#mobileNavbar a').forEach(link => {
  link.addEventListener('click', closeNavbar);
});

function toggleSubmenu(event) {
  const submenu = event.currentTarget.nextElementSibling;
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // Toggle display
}







function showSlide(slideNumber) {
    // Hide all slides
    const slides = document.querySelectorAll(".slider-content");
    slides.forEach(slide => slide.style.display = "none");

    // Hide all images
    const images = document.querySelectorAll(".value-image");
    images.forEach(img => img.style.display = "none");

    // Show the selected slide
    document.getElementById("slide" + slideNumber).style.display = "block";
    
    // Show the corresponding image
    document.getElementById("image" + slideNumber).style.display = "block";
}

// Ensure the first slide is shown when the page loads
window.onload = function() {
    showSlide(1);
};













function playVideo() {
    const video = document.getElementById('navon-video');
    const playButton = document.querySelector('.play-button');
    video.play();
    playButton.style.display = 'none';
  }
  

  







  let currentLogoSlide = 0;

function updateLogoSlider() {
  const slides = document.querySelectorAll('.logo-slide');
  const dots = document.querySelectorAll('.logo-dot');
  const slider = document.querySelector('.logo-slider');
  
  // Hide/show arrows based on the slide index
  document.querySelector('.logo-left-arrow').style.display = currentLogoSlide > 0 ? 'block' : 'none';

  // Adjust the right arrow visibility based on screen width and current slide
  const isDesktop = window.innerWidth >= 992;
  const maxSlide = isDesktop ? 1 : slides.length - 1;
  document.querySelector('.logo-right-arrow').style.display = currentLogoSlide < maxSlide ? 'block' : 'none';
  
  // Update slide position
  slider.style.transform = `translateX(-${currentLogoSlide * 100}%)`;
  
  // Update dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentLogoSlide].classList.add('active');
}

function nextLogoSlide() {
  const isDesktop = window.innerWidth >= 992;
  const maxSlide = isDesktop ? 1 : document.querySelectorAll('.logo-slide').length - 1;

  if (currentLogoSlide < maxSlide) {
    currentLogoSlide++;
    updateLogoSlider();
  }
}

function prevLogoSlide() {
  if (currentLogoSlide > 0) {
    currentLogoSlide--;
    updateLogoSlider();
  }
}

function goToLogoSlide(index) {
  currentLogoSlide = index;
  updateLogoSlider();
}

// Initialize the slider on page load
updateLogoSlider();

function setupPaginationDots() {
  const paginationContainer = document.querySelector('.logo-pagination');
  paginationContainer.innerHTML = ''; // Clear existing dots

  // Determine the number of dots based on screen width
  const dotCount = window.innerWidth >= 992 ? 2 : document.querySelectorAll('.logo-slide').length;

  // Create and append the dots
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('logo-dot');
    dot.setAttribute('onclick', `goToLogoSlide(${i})`);
    paginationContainer.appendChild(dot);
  }
}

// Call setupPaginationDots initially
setupPaginationDots();

// Update dots on window resize
window.addEventListener('resize', () => {
  setupPaginationDots();
  updateLogoSlider();
});
