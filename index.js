// press Enter/Return to start game: when press return or enter,
// return audio for game and change text to: score

const startGame = document.getElementsByClassName("scoreboard__start")[0];
const gameboard = document.getElementsByClassName("gameboard")[0];
const paddle1 = document.getElementsByClassName("gameboard__paddle1")[0];
const paddle2 = document.getElementsByClassName("gameboard__paddle2")[0];
const pongBall = document.getElementsByClassName("gameboard__ball")[0];
const b = {
    x: 50,
    y: 30,
    w: 20,
    h: 20,
    dx: 1,
    dy: 1,
    speed: 5,
    ani: {},
    move: false,
};

pongBall.style.width = `${b.w}px`;
pongBall.style.height = `${b.h}px`;
pongBall.style.position = "absolute";
pongBall.style.left = `${b.x}px`;
pongBall.style.top = `${b.y}px`;





const pongBallRotate = document.getElementsByClassName("gameboard__ball-effect")[0];
const scorePlayer1 = document.getElementsByClassName("grid_score1")[0];
const scorePlayer2 = document.getElementsByClassName("grid_score2")[0];
const boardCoordinates = {
    bch: 600,
    bcw: 1000,

}



console.log(boardCoordinates);
const paddle1Coordinates = paddle1.getBoundingClientRect();

const paddle2Coordinates = paddle2.getBoundingClientRect();



let gameState = "pause";
 

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "Return") {
    
    return startGame.innerHTML = "Score";
  }
  
});

if (gameState === "start") {
        if (!b.move) {
            b.ani = requestAnimationFrame(mover);
            b.move = true;
        }
    };
//  console.log(mover);

//  if (gameState == "Start") {
//     if (e.key == "w") {
//       paddle_1.style.top =
//         Math.max(
//           board_coord.top,
//           paddle_1_coord.top - window.innerHeight * 0.06
//         ) + 'px';
//       paddle_1_coord = paddle_1.getBoundingClientRect();
//     }
//     if (e.key == 's') {
//       paddle_1.style.top =
//         Math.min(
//           board_coord.bottom - paddle_common.height,
//           paddle_1_coord.top + window.innerHeight * 0.06
//         ) + 'px';
//       paddle_1_coord = paddle_1.getBoundingClientRect();
//     }
  


  
  function mover() {
    if (b.x > boardCoordinates.bcw - b.w || b.x < 0) {
      b.dx *= -1;
    }
    if (b.y > boardCoordinates.bch - b.h || b.y < 0) {
      b.dy *= -1;
    }
  
    b.x += b.dx * b.speed;
    b.y += b.dy * b.speed;
    pongBall.style.left = `${b.x}px`;
    pongBall.style.top = `${b.y}px`;
    pongBall.style.backgroundColor = "purple";
    if (b.move) {
      b.ani = requestAnimationFrame(mover);
    }
  }


console.log(b.ani)