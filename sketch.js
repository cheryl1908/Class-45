var gameState=0;
var form,game,allPlayers;
var database; 
var player;
var playerCount=0;   

function preload(){
  track = loadImage("Images/road.jpg");  
}

function setup() {

  database = firebase.database();
  createCanvas(displayWidth-10,displayHeight-10);
  game=new Game();
  game.start();
  game.getState();
  //player1 = createSprite(400, 200, 50, 50);
}

function draw() {
  console.log(gameState);
  if(playerCount===2){
    console.log("inside if");
    //gameState=1;
    game.update(1);
}
  if(gameState===1){
    game.play();
  }

}
