var paddle1, paddle2;
var paddles, form;
var player, playerCount;
var form, gameState;
var database;
var game;




function setup() {
  createCanvas(1500,800);
  database = firebase.database()
  paddle1_img = loadImage("./assets/download.jpg")
  paddle2_img = loadImage("./assets/sddefault1.jpg")
  game = new Game();
  game.start()
}

function draw() {
  background("blue");
  if (playerCount == 2){
    game.updateState(1)
    console.log(gameState)
  }
  
  if(gameState == 1){
    game.play()
    console.log("THIS IS BUGGED")
  }
}