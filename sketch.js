var database;
var game,player,form;
var gameState = 0;
var playerCount;
var allPlayers;
var c1,c2,c3,c4,cars=[];

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-10,displayHeight-20);

  game = new Game();
  game.getState()
  game.start()
}

function draw(){
 
   if(playerCount===4){
   game.update(1)
   }

   if(gameState === 1){
    clear();
    game.play();
   }
  
}

