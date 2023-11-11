// Initially hide the "Play Birthday Song" button, cake image, text wishes, and message
document.getElementById("playButton").style.display = "none";
document.getElementById("cakeImage").style.display = "none";
document.getElementById("textWishes").style.display = "none";

function startBlastAnimation() {
    var pinButton = document.getElementById("pinButton");
    var playButton = document.getElementById("playButton");
    var balloonImage = document.getElementById("balloonImage");
    var cakeImage = document.getElementById("cakeImage");
    var textWishes = document.getElementById("textWishes");

    // Hide the pin button
    pinButton.style.display = "none";

    // Show the "Play Birthday Song" button
    playButton.style.display = "block";

    // Fly away animation for the balloon
    balloonImage.style.transition = "transform 1s ease-in-out"; // Apply transition to balloon
    balloonImage.style.transform = "translateY(-100%)";

    // Hide the paragraph message initially
    textWishes.style.display = "none";

    // Make the balloon vanish after the fly-away animation
    setTimeout(function () {
        balloonImage.style.display = "none";
        // Show the paragraph message after the balloon vanishes
        textWishes.style.display = "block";
        showMessage(); // Show the message after the balloon vanishes
    }, 1000); // Adjust the delay as needed

    // Preload the cake image
    var img = new Image();
    img.src = "cake.jpg";
    img.onload = function () {
        // Display the cake image after the fly-away animation
        setTimeout(function () {
            cakeImage.src = img.src;
            cakeImage.style.display = "block";
        }, 1000); // Adjust the delay as needed
    };
}

function showMessage() {
    alert("🎉 The balloon has flown away! 🎈 Now enjoy the cake and have a fantastic day! 🎂🎉");
}

function playMusic() {
    var audio = document.getElementById("birthdayAudio");
    audio.play();
    alert("🎉🎶 Happy Birthday to You! 🎶🎉");
}
