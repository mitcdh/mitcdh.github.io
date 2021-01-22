$(function() {
	var imagesArray = [
			["ocean.jpg", "center bottom"],
			["river.jpg", "center left"],
			["harbour.jpg", "center right"],
			["canyon.jpg", "center center"],
			["mountain.jpg", "center right"],
			["balloon.jpg", "center bottom"],
			["desert.jpg", "center center"],
			["ruins.jpg", "center center"],
			["valley.jpg", "center right"],
			["cliff.jpg", "center center"],
		],
		num = Math.floor(imagesArray.length * Math.random());
	$(".glitch__img").css({"background-image":"url(img/" + imagesArray[num][0] + ")", "background-position":imagesArray[num][1]});
});
