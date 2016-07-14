Template.game.rendered = function (){
    


    // Session.setPersistent('roundNumber', 1);//the current round number, doesnt shown in the practise page  
    // Session.setPersistent('gameCounter', 0);
    // Session.setPersistent('displayPopularityOne', 0);
    // Session.setPersistent('displayPopularityTwo', 0);
    // Session.setPersistent('displayPopularityThree', 0);
    // Session.setPersistent('progressBar',1);
    // Session.setPersistent('probability',1);
    // Session.setPersistent('pointOne',0);
    // Session.setPersistent('pointTwo',0);
    // Session.setPersistent('pointThree',0);
    // Session.setPersistent('boxOne',0);
    // Session.setPersistent('boxTwo',0);
    // Session.setPersistent('boxThree',0);
    Session.set('roundNumber', 1);//the current round number, doesnt shown in the practise page  
    Session.set('gameCounter', 0);
    Session.set('displayPopularityOne', 0);
    Session.set('displayPopularityTwo', 0);
    Session.set('displayPopularityThree', 0);
    Session.set('displayPopularityFour', 0);
    Session.set('progressBar',1);
    Session.set('probability',1);
    Session.set('pointOne',0);
    Session.set('pointTwo',0);
    Session.set('pointThree',0);
    Session.set('pointFour',0);
    Session.set('boxOne',0);
    Session.set('boxTwo',0);
    Session.set('boxThree',0);
    Session.set('boxFour',0);
    Session.set('blockIndex',0);

    if(Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).distributions[0] == 0){
        var p = [Math.random(),Math.random(),Math.random(),Math.random()];

        var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
        cursor.fetch().forEach(function(obj){
            Games.update({ _id : obj._id}, { $set : { 'distributions' : p}});
        });

    }



    var elemRound = document.getElementById("roundBar");
    elemRound.style.width = 100/roundNumber + '%';
    document.getElementById("roundLabel").innerHTML = 'Round 1'; 


/*    Tracker.autorun(function (trackRound){

        Session.get("roundNumber");

        Tracker.autorun(function (trackKickout){

            var i = Session.get('kickoutIndex');

            if(i === 1){

                IDLE_TIMEOUT = 5; //seconds
                var _idleSecondsTimer = null;
                _idleSecondsCounter = 0;

                document.onclick = function() {
                    _idleSecondsCounter = 0;
                };

                _idleSecondsTimer = window.setInterval(CheckIdleTime, 1000);

                function CheckIdleTime() {
                     _idleSecondsCounter++;
                     var oPanel = document.getElementById("SecondsUntilExpire"); //
                     if (oPanel)
                         oPanel.innerHTML = (IDLE_TIMEOUT - _idleSecondsCounter) + "";
                    if (_idleSecondsCounter >= IDLE_TIMEOUT) {
                        window.clearInterval(_idleSecondsTimer);
                        alert("Please make a choice now!!");
                        //document.location.href = "logout.html";
                    }
                }

                console.log('Im in');
            }
        });

    });*/


    checkBlock = window.setInterval(blockPageCheck, 5000); //check every 5 seconds 

    function blockPageCheck() {
        if(Session.get('blockIndex')){//if clicked, then break
            window.clearInterval(checkBlock);
            console.log('have cleared the repeat cycle');
        }else{
            alert("Please make a choice now!!"); //if not, then alert 
            window.clearInterval(checkBlock);
        }
                     
                }






};