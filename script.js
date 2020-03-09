// let cvs = document.getElementById("breakout");
// let ctx = cvs.getContext("2d");

// // Borders of the canvas

// // Paddle values
// const PADDLE_WIDTH = 170;
// const PADDLE_HEIGHT = 20;
// const PADDLE_BOTTOM_SPACE = 40;

// function background() {
//     requestAnimationFrame(background)
// }
// background();

// // function drawRectangle(x, y) {
// //     cvs.style.border = "solid 1px black";
// //     ctx.fillStyle = "blue";
// //     ctx.fillRect(x, y, 50, 50);
// // }

// const PADDLE = {
//     x: (cvs.width - PADDLE_WIDTH) / 2,
//     y: cvs.height - PADDLE_HEIGHT - PADDLE_BOTTOM_SPACE,
//     width: PADDLE_WIDTH,
//     height: PADDLE_HEIGHT,
// }

// function paddleStyle() {
//     cvs.style.border = "solid 1px black";
//     ctx.fillStyle = "lightblue";
//     ctx.fillRect(PADDLE.x, PADDLE.y, PADDLE.width, PADDLE.height)
// }
// paddleStyle()

// // I learned the code above from the following link to get me started: https://www.youtube.com/watch?v=FyZ4_T0GZ1U

// document.addEventListener("keydown", movePaddle);

// function movePaddle(e) {

//         switch (paddleStyle()) {
//             case e.keyCode == 39:
//                 moveRight();
//                 break;
//             case e.keyCode == 37:
//                 moveLeft();
//                 break;
//         }
// }

// let increaseSpeed = 60;
//     // Move paddle to the right 
//     function moveRight() {
//             PADDLE.x++
        
//     }
//     console.log(sectionWidth - PADDLESTYLE.width / 2, parseInt(paddle.style.left), PADDLESTYLE.width, PADDLESTYLE.x + PADDLESTYLE.width)
//     // Move paddle to the left
//     function moveLeft() {
//         if (parseInt(paddle.style.left) >= 20 && parseInt(paddle.style.left) < sectionWidth - PADDLESTYLE.width) {
//             paddle.style.left = parseInt(paddle.style.left) - increaseSpeed + "px";
//         }
//     }






// Everything below was my first try
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
        if (parseInt(paddle.style.left) >= 0 && parseInt(paddle.style.left) < sectionWidth - PADDLESTYLE.width * 1.2) {
            paddle.style.left = parseInt(paddle.style.left) + increaseSpeed + "px";
        }
    }
    console.log(sectionWidth - PADDLESTYLE.width / 2, parseInt(paddle.style.left), PADDLESTYLE.width, PADDLESTYLE.x + PADDLESTYLE.width)
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
        x: sectionWidth / 2 - RADIUS / 2,
        //y: sectionHeight - RADIUS - sectionHeight + RADIUS,
        y: PADDLESTYLE.y - RADIUS,
        dx: 3 * (Math.random() * 2 - 1),
        dy: -3
    }

    function ballPosition() {
        ball.style.width = RADIUS + "px";
        ball.style.height = RADIUS + "px";
        ball.style.top = BALLSTYLE.y + "px";
        ball.style.left = BALLSTYLE.x + "px";
    }
    ballPosition()

    // First try
    // document.addEventListener("keydown", moveBall)

    // function moveBall(e) {
    //     let key_code = e.which || e.keyCode;

    //     switch (key_code) {
    //         case 32:
    //             startBall();
    //             break;
    //     }
    // }

    

    function startBall() {
        let interval = setInterval(initialBallMove, 2);
        let interval2 = setInterval(topHit, 5);
        if (parseInt(ball.style.width) == RADIUS && parseInt(ball.style.height) == RADIUS && parseInt(ball.style.top) == BALLSTYLE.y && parseInt(ball.style.left) == BALLSTYLE.x) {
            initialBallMove();
        }
        
        else if (parseInt(ball.style.top) == sectionHeight - RADIUS - sectionHeight + RADIUS) {
            clearInterval(interval)
            topHit();
        }
    }
    startBall()

    function initialBallMove() {
        BALLSTYLE.x--;
        BALLSTYLE.y--;
        ball.style.top = BALLSTYLE.y + 'px';
        ball.style.left = BALLSTYLE.x + 'px';        
    }
    console.log(ball.style.top = BALLSTYLE.y + 'px')
    
    function topHit() {
        BALLSTYLE.x++
        BALLSTYLE.y++;
        ball.style.top = BALLSTYLE.y + 'px';
        ball.style.left = BALLSTYLE.x + 'px'; 
    }




//     // Second try
// //   if (parseInt(ball.style.top) == 0) {
// //     BALLSTYLE.x--;
// //     BALLSTYLE.y--;
// //     ball.style.top = BALLSTYLE.y + 'px';
// //     ball.style.left = BALLSTYLE.x + 'px';
// //   } 
// //   else if(parseInt(ball.style.left) <= 0) {
// //     BALLSTYLE.x++;
// //     BALLSTYLE.y++;
// //     ball.style.top = BALLSTYLE.y + 'px';
// //     ball.style.left = BALLSTYLE.x + 'px';
// //   }
// // || parseInt(ball.style.left) == 0 || parseInt(ball.style.left) == sectionWidth - RADIUS || parseInt(ball.style.top) == sectionHeight
// //   else if (parseInt(ball.style.top) == 0 || parseInt(ball.style.left) == sectionWidth - RADIUS) {
// //     BALLSTYLE.x--;
// //     BALLSTYLE.y++;
// //     ball.style.top = BALLSTYLE.y + 'px';
// //     ball.style.left = BALLSTYLE.x + 'px';
// //   }
// //  else {
// //     BALLSTYLE.x--;
// //     BALLSTYLE.y--;
// //     ball.style.top = BALLSTYLE.y + 'px';
// //     ball.style.left = BALLSTYLE.x + 'px';
// //   }
 });