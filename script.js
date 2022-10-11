let scrolls = 10;
let delay = 500; 
let output = "";

function scrape() {
	let images = document.querySelectorAll('[data-test-id="non-story-pin-image"]');
	for (image of images) {
		let img = image.children[0].children[0]
		let link = img.src.replace("236x", "originals")+"\n"

		if (output.includes(link) || !img.alt.includes("contains")) {
			console.log(`skipped ${link}`)
			continue
		}
		output += link;
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
