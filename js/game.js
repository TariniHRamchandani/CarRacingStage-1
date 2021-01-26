class Game{
    constructor(){

    }
    getState(){
        var gameStateref=database.ref("gameState");
        //reading the gameState value from the database.
        gameStateref.on("value",function(data){
            gameState=data.val();
            //turn on the permanent listener-which will continously read the values.
            //whatever data-putting ut in gameState variable.
        });
    }
    update(state){
        //line 14=updating the gameState.
        database.ref("/").update({
            //maindatabase=/ we are updating the gameState variable.
            gameState:state
            //assigning it the new values.
        })
    }
    start(){
        if(gameState===0){
        form=new Form();
        //calling the start function.
        //the reason we wrote it here : because it checks if the gameState is 0-then only will it only display the form.
        form.display();
        }
    }
}