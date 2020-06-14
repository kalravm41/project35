class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Student Election");
        title.position(200,200);
        var Input = createInput("Email Id");
        Input.position(200,125);
        var Input1 = createInput("Your Vote");
        Input1.position(200,150);
        var Input2 = createInput("Name")
        Input2.position(200,175);
        var button = createButton("Submit");
        button.position(200,225);
        var greetings = createElement("h3");
        button.mousePressed(function(){
            Input.hide();
            Input1.hide();
            Input2.hide();
            button.hide();
            var Name = Input2.value();
            var VoterEmail = Input.value();
            var Votervote = Input1.value();
            voterCount+=1;
            voterName.update(Name);
            voterCount.update(voterCount);
            voterEmail.updateEmail(VoterEmail);
            votervote.updatevote(Votervote);
            greetings.html("Thanks "+name+"For Voting");
            greetings.position(200,250);
        })
    }
}