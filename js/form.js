class Form {
constructor(){
    this.input = createInput(`Name`)
    this.button = createButton(`Start`);
    this.greeting = createElement(`h2`);
}

hide(){
   this.button.hide()
    this.input.hide()
    this.greeting.hide()   
    
}

display(){
var Title = createElement(`h2`);
Title.html("Car Racing Game");
Title.position(displayWidth/2-70,20);


this.input.position(displayWidth/2-70,displayHeight/2-40);

this.button.position(displayWidth/2,displayHeight/2);

this.button.mousePressed(()=>{
this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount = playerCount+1;
    player.index = playerCount;
    player.update();

    player.updateCount(playerCount);
    this.greeting.html("Hello "+player.name);
    this.greeting.position(displayWidth/2-70,displayHeight/2-40)
})
    
}
}