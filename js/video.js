var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	// Initialize the video element
	video = document.querySelector("#player1");

	// Turn off autoplay and turn off looping
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	// Update the volume information
	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	// Slow the current video speed by 10% each time the button is clicked
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	// Increase the current video speed by an amount proportional to the slow down.
	// Slowing down multiplies by 0.9, so speeding up divides by 0.9 (the exact
	// reverse) so that slow down + speed up returns to the original speed.
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	// Advance the current video by 10 seconds.
	// If the video length has been exceeded go back to the start of the video - no farther.
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current video time is " + video.currentTime + " seconds");
});

document.querySelector("#mute").addEventListener("click", function() {
	// Mute/unmute the video and update the text in the button
	video.muted = !video.muted;
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	// Change the volume based on the slider and update the volume information
	// The slider ranges from 0 to 100, while volume ranges from 0.0 to 1.0
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	// Utilize the existing oldSchool class on the video element
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	// Remove the oldSchool class from the video
	video.classList.remove("oldSchool");
});
