const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click', () => {
		//Toggle nav
		nav.classList.toggle('nav-active');

	
		// Animate links
	navLinks.forEach((link, index) =>{
		if (link.style.animation) {
			link.style.animation = ''
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
		}
		});
	//burger animation
	burger.classList.toggle('toggle');
	});

}

navSlide()
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}