let scene = document.getElementById("scene__one");
var parallaxInstance = new Parallax(scene, {
	relativeInput: true,
});
let scenetwo = document.getElementById("scene__two");
var parallaxInstanceTwo = new Parallax(scenetwo, {
	relativeInput: true,
});

let scenethree = document.getElementById("scene__three");
var parallaxInstanceThree = new Parallax(scenethree, {
	relativeInput: true,
});

let scenefour = document.getElementById("scene__four");
var parallaxInstanceFour = new Parallax(scenefour, {
	relativeInput: true,
});

const navbarBttn = document.querySelector(".hamburger-menu");
const bar = document.querySelector(".bar");
const headerWrap = document.querySelector(".header-container");
navbarBttn.addEventListener("click", navbar);
headerWrap.addEventListener("click", navbar);
function navbar() {
	bar.classList.toggle("animate");
	headerWrap.classList.toggle("open__nav");
}
window.addEventListener(
	"scroll",
	function () {
		var header = document.querySelector(".header-container");
		header.classList.toggle("header--sticky", window.scrollY > 0);
	},
	{ passive: true }
);
document
	.querySelector(".list-item-copy__bttn-copy")
	.addEventListener("click", selectText);
function selectText() {
	let node = this.parentElement.querySelector("p");
	if (document.body.createTextRange) {
		const range = document.body.createTextRange();
		range.moveToElementText(node);
		range.select();
		document.execCommand("copy");
	} else if (window.getSelection) {
		const selection = window.getSelection();
		const range = document.createRange();
		range.selectNodeContents(node);
		selection.removeAllRanges();
		selection.addRange(range);
		document.execCommand("copy");
	} else {
		console.warn("Could not select text in node: Unsupported browser.");
	}
}
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 250, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 350, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
