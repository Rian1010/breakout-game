// let cvs = document.getElementById("breakout");
// let ctx = cvs.getContext("2d");

// // Borders of the canvas

// // Paddle values
// const PADDLE_WIDTH = 100;
// const PADDLE_HEIGHT = 20;
// const PADDLE_BOTTOM_SPACE = 50;

// function background() {
//     requestAnimationFrame(background)
// }
// background();

// function drawRectangle(x, y) {
//     cvs.style.border = "solid 1px black";
//     ctx.fillStyle = "blue";
//     ctx.fillRect(x, y, 50, 50);
// }
// drawRectangle(100, 10);

// const PADDLE = {
//     x: cvs.width / 2 - PADDLE_WIDTH / 2,
//     y: cvs.height / 2 - PADDLE_HEIGHT - PADDLE_BOTTOM_SPACE,
//     width: PADDLE_WIDTH,
//     height: PADDLE_HEIGHT,
// }

// function paddleStyle() {
//     ctx.fillStyle = "lightblue";
//     ctx.fillRect(PADDLE.x, PADDLE.y, PADDLE.width, PADDLE.height)
// }
// paddleStyle()

$(document).ready(function () {
    let gameSection = document.getElementById("gameSection");
    let paddle = document.getElementById("paddle");
    let sectionWidth = $(gameSection).width();
    let sectionHeight = $(gameSection).height();

    const PADDLE_WIDTH = 200;
    const PADDLE_HEIGHT = 30;
    const PADDLE_BOTTOM = 30;

    const PADDLESTYLE = {
        x: sectionWidth / 2 - PADDLE_WIDTH / 2,
        y: sectionHeight - PADDLE_HEIGHT - PADDLE_BOTTOM,
        width: PADDLE_WIDTH,
        height: PADDLE_HEIGHT,
    }
    // Initialise the paddle
    function paddlePosition() {
        paddle.style.width = PADDLESTYLE.width + "px";
        paddle.style.height = PADDLESTYLE.height + "px";
        paddle.style.top = PADDLESTYLE.y + "px";
        paddle.style.left = PADDLESTYLE.x + "px";
    }
    paddlePosition();

    // Cause paddle to move by pressing the right or left arrow
    document.addEventListener("keydown", movePaddle)
    function movePaddle(e) {
        let key_code = e.which || e.keyCode;

        switch (key_code) {
            case 39:
                moveRight();
                break;
            case 37:
                moveLeft();
                break;
        }
    }
    let increaseSpeed = 60;
    // Move paddle to the right 
    function moveRight() {
        if (parseInt(paddle.style.left) >= 0 && parseInt(paddle.style.left) < sectionWidth - PADDLESTYLE.width*1.2) {
            paddle.style.left = parseInt(paddle.style.left) + increaseSpeed + "px";
        }
    }
    console.log(sectionWidth - PADDLESTYLE.width/2, parseInt(paddle.style.left), PADDLESTYLE.width, PADDLESTYLE.x + PADDLESTYLE.width)
    // Move paddle to the left
    function moveLeft() {
        if (parseInt(paddle.style.left) >= 20 && parseInt(paddle.style.left) < sectionWidth - PADDLESTYLE.width) {
            paddle.style.left = parseInt(paddle.style.left) - increaseSpeed + "px";
        }
    }

    let ball = document.getElementById("ball");
    const RADIUS = 70;
    // Initialise the ball
    const BALLSTYLE = {
        x: sectionWidth / 2 - RADIUS/2,
        y: PADDLESTYLE.y - RADIUS,
        radius: RADIUS
    }

    function ballPosition() {
        ball.style.width = RADIUS + "px";
        ball.style.height = RADIUS + "px";
        ball.style.top = BALLSTYLE.y + "px";
        ball.style.left = BALLSTYLE.x + "px";
    }
    ballPosition()

    document.addEventListener("keydown", moveBall)
    function moveBall(e) {
        let key_code = e.which || e.keyCode;

        switch (key_code) {
            case 39:
                moveRight();
                break;
            case 37:
                moveLeft();
                break;
        }
    }
});