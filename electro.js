

//hamburg

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// countdown




// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
    document.querySelectorAll('.label').forEach(label => label.innerHTML = "EXPIRED");
  }
}, 1000);


document.addEventListener('DOMContentLoaded', function () {
  const abthead = document.querySelector('.abthead');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const target = entry.target;

          if (entry.isIntersecting) {
              // Add class to trigger animation when the element is in view
              target.classList.add('animate');
          } else {
              // Remove the class when the element goes out of view
              target.classList.remove('animate');
          }
      });
  }, { threshold: 0.1 }); // Adjust threshold as needed

  observer.observe(abthead);
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // $(".slides").css('display','none');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // $(dots[i]).removeClass("active");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }


  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


setInterval(function (){


console.log(slideIndex);
plusSlides(1);




}, 3000);


function Scrollabt() {
  // Get the first element with class 'abt'
  const targetSection = document.querySelector('.abt');
  
  if (targetSection) {
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  } else {
      console.error('Element with class "abt" not found.');
  }
}










