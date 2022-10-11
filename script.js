let scrolls = 10;
let delay = 500; 
let output = "";

function scrape() {
	let images = document.querySelectorAll('[data-test-id="non-story-pin-image"]');
	for (image of images) {
		let img = image.children[0].children[0].src.replace("236x", "originals")+"\n"

		if (output.includes(img)) {
			continue
		}
		output += img;
	}
}

let interval = setInterval(function() {
	window.scrollTo(0, document.body.scrollHeight);
	scrolls--;
	console.log(scrolls+" scrolls remaining");
	scrape();

	if (scrolls == 0) {
		clearInterval(interval)
		console.log(output)
	}
}, delay)
