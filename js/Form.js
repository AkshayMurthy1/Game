class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder","Enter your name");
        this.playButton = createButton("Play")
        this.title = createElement()
        this.greeting = createElement("h2")
        

    }

setElementsPosition() {
    this.title.position(width/2-180, height/2-200);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
      }

setElementsStyle(){
    this.title.class("titleText");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
}
hide(){
    this.input.hide()
    this.playButton.hide()
    this.title.hide()
    this.greeting.hide()
}
mousePressed(){
    
    this.playButton.mousePressed(() =>{
       this.input.hide()
       this.playButton.hide()
       var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
    player.addPlayer();//aa
      player.updateCount(playerCount); // BP
    });
    
}

display(){
    this.title.html("Pong but Better")
    this.setElementsPosition();
    this.setElementsStyle();
    this.mousePressed();
}

}