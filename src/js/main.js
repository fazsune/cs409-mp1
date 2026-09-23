/* Your JS here. */
// console.log('Hello World!')

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
	if (window.scrollY > 60) {
		navbar.style.height = "40px";
		navbar.querySelectorAll("button").forEach(button => {
			//button.style["font-size"] = "40cqh";
		});
	} else {
		navbar.style.height = "60px";
		navbar.querySelectorAll("button").forEach(button => {
			//button.style["font-size"] = "30cqh";
		});
	}
});
