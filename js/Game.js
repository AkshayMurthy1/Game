class Game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
        
        this.leadeboardTitle = createElement("h2");
    
    }
    start(){
        player = new Player();
        playerCount = player.getPlayerCount();
        this.getState()
        form = new Form();
        form.display()
        paddle1 = createSprite(width*1/12, height/2, 100, 10);
        paddle1.addImage(paddle1_img)
        paddle1.scale = 0.5
        
        paddle2 = createSprite(width*11/12, height/2, 100, 10);
        paddle2.addImage(paddle2_img)
        paddle2.scale = 0.2
        
        paddles = [paddle1, paddle2];


        

    }


    handleElements() {
        form.hide();
        form.titleImg.position(40, 50);
        form.titleImg.class("gameTitleAfterEffect");
    
        this.resetTitle.html("Reset Game");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width / 2 + 200, 40);
    
        this.resetButton.class("resetButton");
        this.resetButton.position(width / 2 + 230, 100);
    
        this.leadeboardTitle.html("Leaderboard");
        this.leadeboardTitle.class("resetText");
        this.leadeboardTitle.position(width / 3 - 60, 40);
    
        this.leader1.class("leadersText");
        this.leader1.position(width / 3 - 50, 80);
    
        this.leader2.class("leadersText");
        this.leader2.position(width / 3 - 50, 130);
      }

      updateState(state){
          database.ref("/").update({
            gameState : state
          })
      }
      getState(){
        database.ref("gameState").on("value", data => {
            gameState = data.val()
        })

      }
    play(){
        drawSprites()
        this.handleElements()

    }






}