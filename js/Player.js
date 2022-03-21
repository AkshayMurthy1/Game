class Player{
    constructor(){
        this.name = null
        this.index = null
        this.positionX = 0
        this.positionY = 0
    }
addPlayer(){
    var playerIndex = "players/player" + this.index

    if(this.index == 1){
        this.positionX = width * 11/12
        this.positionY = height/2
    }
    else{
        this.positionX = width * 1/12
        this.positionY = height/2
    }

    database.ref(playerIndex).set({
        name : this.name,
        positionX : this.positionX,
        positionY: this.positionY,

    })
}

updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }
  
readPosition(){
    database.ref("players/player" + this.index).on("value", data => {
        var values = data.val()
        this.positionX = values.positionX
        this.positionY = values.positionY
    })
}

getPlayerCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }


}