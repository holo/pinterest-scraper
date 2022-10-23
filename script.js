let scrolls = 10;
let delay = 1000; 
let output = "";

function scrape() {
	let elements = document.querySelectorAll('[data-test-id="pinWrapper"]');
	for (element of elements) {
		get_links(element)
	}
}

function get_links(element) {
	let img = element.querySelectorAll('[data-test-id="non-story-pin-image"]')
	if (img.length < 1)
		return;

	let link = img[0].getElementsByTagName("img")[0].src.replace("236x", "736x")+"\n";

	for (span of element.getElementsByTagName("span")) {
		if (span.innerHTML == "Promoted by")
			return;
	}

	if (output.includes(link)) {
		return;
	}

	output += link;
}

let interval = setInterval(function() {
	window.scrollTo(0, document.body.scrollHeight);
	scrolls--;
	console.log(scrolls+" scrolls remaining");
	scrape();

	if (scrolls == 0) {
		clearInterval(interval);
		console.log(output);
	}
}, delay)
