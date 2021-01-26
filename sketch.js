var hypnoticBall, database;
var position;
var gameState=0;
var playerCount;
var form,player,game;
//creating new variables.

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
game.getState();
game.start();
//permamnent reading process.
}

function draw(){
  background("white");
  
   
}

