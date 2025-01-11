
//text
document.addEventListener("DOMContentLoaded", () => {
  const text = "Tech-a-thon";
  const animatedText = document.getElementById("animated-text");
  let index = 0;

  const typeLetter = () => {
      if (index < text.length) {
          animatedText.textContent += text.charAt(index);
          index++;
          setTimeout(typeLetter, 150); // Adjust speed (150ms per letter)
      }
  };

  typeLetter();
});




//hamburg

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
    // navMenu.classList.toggle('active');
});


// countdown




// Set the date we're counting down to
var countDownDate = new Date("Feb 20, 2025 15:37:25").getTime();

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







// back


function timeline(){
  // console.log("yes")
	var threshold_position = window.scrollY + window.innerHeight *2/3;
	//compare scrolltop with scrolltop on each timeline event
	var timeline_events = document.querySelectorAll('.timeline li');
  // console.log(timeline_events);
  timeline_events.forEach((time_e)=>{
    if(time_e.offsetTop + time_e.parentElement.offsetTop < threshold_position){
      // console.log("hi");
			time_e.classList.add('visible');
		} else {
      // console.log("hix");
			time_e.classList.remove('visible');
		}
  })
}
timeline();

document.addEventListener('scroll', timeline);


