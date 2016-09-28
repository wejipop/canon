function draw(x, y, image){
	attributes["ctx"].drawImage(image, x, y, image.width, image.height);
}

function drawRotated(x, y, image, angle){
	attributes["ctx"].save();
	attributes["ctx"].rotate(angle*Math.PI/180);
 	draw(x, y, image);
    attributes["ctx"].restore();
}

function drawBackground(){
	console.log(attributes);
	var bg = attributes["images"]["background"];
	draw(0, 0, bg);
}

