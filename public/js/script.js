var attributes = {
	canonHeight: 50,
	canonWidth: 50,
	canonY: 240,
	canonBlueX: 20,
	canonRedX: 730,
	canonBlueAngle: 0,
	ctx: (document.getElementById("main-canvas")).getContext("2d"),
	images: loadImages(),
};

function loadImages(){
	var images = {};
	var imageNames = ["canonBlue", "canonRed", "background"];
	for(var i=0; i<imageNames.length; i++){
		images[imageNames[i]] = document.getElementById(imageNames[i]);
	}
	return images;
}

function game(){
	console.log("game started!");
	var images = loadImages();
	drawBackground();
	console.log(images);
	draw(attributes["canonBlueX"], attributes["canonY"], images["canonBlue"]);
	draw(attributes["canonRedX"], attributes["canonY"], images["canonRed"]);
	// drawRotated(10, 0, images["canonBlue"], 30);
}