function setup(params) {
    createCanvas(800, 500);
    console.log('Setup function');
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function draw(params) {
    r = getRandomArbitrary(0, 255);
    g = getRandomArbitrary(0, 255);
    b = getRandomArbitrary(0, 255);
    fill(r,g,b);
    ellipse(mouseX, mouseY, 50, 50);
}
