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

const vid_open = document.getElementById("video-open");
const vid_close = document.getElementById("video-close");
const modal_bg = document.getElementById("modal");
vid_open.addEventListener("click", () => {
	modal_bg.style.display = "block";
});
vid_close.addEventListener("click", () => {
	modal_bg.style.display = "none";
});
