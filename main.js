function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()
}

function preload() {
    song1 = loadSound("faded.mp3");
    song2 = loadSound("lovely.mp3");
}

function play() {
    song1.play();
    song2.play();
}

function draw() {
    image(video, 0, 0, 600, 500);
}
