var blinkables = document.querySelectorAll('.blinkable');

blinkables.forEach(function (blinkable) {
  blinkable.addEventListener('click', function (event) {
    event.preventDefault();
    var target = document.querySelector(blinkable.getAttribute('href'));
    target.classList.remove('blink-twice');
    void target.offsetWidth; // Force reflow to restart animation
    target.classList.add('blink-twice');
  });
});

// ------- scroll-to-top button functionality ------ //
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// button to hide 9 points
const toggleButton = document.getElementById("toggle-button");
const content = document.getElementById("content");

function toggleContent() {
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

toggleButton.addEventListener("click", toggleContent);