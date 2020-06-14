class Player{
    constructor(){}

    getCount(){
        var VoterCountref = database.ref("voterCount");
        VoterCountref.on("value",function(data){
            voterCount = data.val();
        })

    }

    getEmail(){
        var voterEmailref = database.ref("voterEmail");
        voterEmailref.on("value",function(data1){
            voterEmail = data1.val();
        })
    }

    updateEmail(Email){
        database.ref("/").update({
           voterEmail : Email 
        })
    }

    getvote(){
        var votervoteref = database.ref("votervote");
        votervoteref.on("value",function(data1){
            votervote = data1.val();
        })
    }

    updatevote(vote){
        database.ref("/").update({
           votervote : vote 
        })
    }

    updateCount(count){
        database.ref("/").update({
            voterCount : count
        })
    }

    update(name){
        var voterindex = "voter"+voterCount;
        database.ref(voterindex).set({
            voterName : name
        })
    }

}