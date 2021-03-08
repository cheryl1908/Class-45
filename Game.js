class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
    }
  
    play(){
      form.hide();
      console.log("inside play");
      Player.getPlayerInfo();
      //player.getCarsAtEnd();
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
  
      
        if(player.index===1){
          
          if(keyDown(RIGHT_ARROW)){
            player.x+=30;
            player.update();
          }
          if(keyDown(UP_ARROW)){
            player.y+=-30;
            player.update();
          }
          if(keyDown(LEFT_ARROW)){
            player.x+=-30;
            player.update();
          }
          if(player.x>1800){
            player.x=900;
          }
        }else if(player.index===2){
           this.spawnVehicles();
          }
        //console.log(allPlayers);
      
  
      }
    }
    spawnVehicles(){
      if(mouseClicked()){
        player.x=mouseX;
        player.y=mouseY;
      }
    }
  }
    
  