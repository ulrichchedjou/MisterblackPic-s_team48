
var currentIndex = 0;
var totalSlides = document.querySelectorAll('.card').length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  var transformValue = -currentIndex * 100 + '%';
  document.querySelector('.carousel').style.transform = 'translateX(' + transformValue + ')';
}

var autoplayInterval = setInterval(nextSlide, 5000); // Change 3000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds).

// Pause autoplay when the mouse enters the carousel
document.getElementById('cardcontainer').addEventListener('mouseenter', function() {
  clearInterval(autoplayInterval);
});

// Resume autoplay when the mouse leaves the carousel
document.getElementById('cardcontainer').addEventListener('mouseleave', function() {
  autoplayInterval = setInterval(nextSlide, 5000); // Change 3000 to the desired interval in milliseconds.
});






var imageToEnlarge = document.querySelectorAll('.imagine');
var imageInfo = document.getElementById('imageInfo');

// Obtient les caractéristiques de l'image
function getImageInfo() {
  var info = 'Width: ' + imageToEnlarge.width + 'px<br>' +
             'Height: ' + imageToEnlarge.height + 'px';

  return info;
}

// Affiche les caractéristiques de l'image
function showImageInfo() {
  var info = getImageInfo();
  imageInfo.innerHTML = info;
  imageInfo.style.display = 'block';
}

// Cache les caractéristiques de l'image
function hideImageInfo() {
  imageInfo.style.display = 'none';
}

// Ajoute des écouteurs d'événements pour le survol de la souris
imageToEnlarge.addEventListener('mouseenter', showImageInfo);
imageToEnlarge.addEventListener('mouseleave', hideImageInfo);