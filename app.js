const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	//add click listener
	burger.addEventListener("click", () => {
		//adding class "nav-active"
		nav.classList.toggle("nav-active");

		//animate the links
		navLinks.forEach((link, index) => {
			// adding animation and distribute the delay with index divide by 7
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.8
				}s`;
			}
		});
	});
};

navSlide();
