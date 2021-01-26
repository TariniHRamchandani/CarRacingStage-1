class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2");
        //create title element-make the text label/tag-in this case h2-html;
        title.html("CAR RACING GAME");
        //title(.html-tag-what it should show)"what you what to display";
        title.position(130,0);
        //place of the title-x,y positions;
        var input=createInput("Name");
        //input-createInput-predefined function-so we can type the name in the textbox."Nmae"-name
        input.position(130,160);
        //position of the input variable
        var button=createButton("Play");
        //create a button-createButton-predefined function."Play"-text that is wanted
        button.position(250,200);
             //position
        button.mousePressed(function(){
input.hide();
button.hide();
//hiding-inviscibility in trex runner.
var name=input.value();
//What ever value entered in the input box stored in the name variable.line 12.
var greeting=createElement("h3");
//similar to line 7.
greeting.html("Hello  "+name);
//similar to line 9.(whatever ypu want to type/text in ""+what whever name given above).
greeting.position(130,160);
//position of the greeting.
        })
    }
}
