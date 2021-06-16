class Game {
constructor(){



}

getState(){
    var gameStateRef = database.ref ("gameState");
    gameStateRef.on("value",function(data){
        gameState = data.val()
    })
}

update(state){
database.ref("/").update({
    gameState:state
})
}

start(){
    if(gameState===0){
      form = new Form();
      form.display();

      player= new Player();
      player.getCount();
    }
    c1 = createSprite(100,200)
    c2 = createSprite(300,200)
    c3 = createSprite(500,200)
    c4 = createSprite(700,200)
    cars = [c1,c2,c3,c4];
}

play(){
    form.hide();
   // textSize(30);
   // text("Game Start",120,100);
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
   // var display_position =130;
   
   //index of cars array
   var index = 0;
   //x and y positions of the cars
   var x = 0;
   var y;
        for(var plr in allPlayers){

            index = index + 1;
            y = displayHeight/2 - allPlayers[plr].distance;
            cars[index-1].y = y;

            if(index===player.index){
               cars[index-1].shapeColor='red';
               camera.position.x = displayWidth/2
               camera.position.y = cars[index-1].y
            }

           /*  display_position = display_position + 20;
            if(plr === "player"+player.index){
                fill("yellow")
             }
             else{
                fill("black")
             }
             textSize(16)
            text (allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_position) */

        }
    }
    if(keyDown(UP_ARROW) && player.index !== null){
     player.distance = player.distance + 50;
     player.update();
    }
    
    drawSprites()
}

}