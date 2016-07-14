Template.game.events({
'click .four': function (event) {
    //if ( Session.get('blockClick') == 0) {//allow click 
    
        event.preventDefault;

        if(Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).rewards[Session.get('roundNumber') - 1][0] == null){
            var index = Session.get('roundNumber') - 1; 
            var setModifierOneOne = { $set: {} };
                setModifierOneZero = { $set: {} };
                setModifierTwoOne = { $set: {} };
                setModifierTwoZero = { $set: {} };
                setModifierThreeOne = { $set: {} };
                setModifierThreeZero = { $set: {} };
                setModifierFourOne = { $set: {} };
                setModifierFourZero = { $set: {} };
            setModifierOneOne.$set['rewards.' + index + '.0'] = 1; 
            setModifierOneZero.$set['rewards.' + index + '.0'] = 0; 
            setModifierTwoOne.$set['rewards.' + index + '.1'] = 1; 
            setModifierTwoZero.$set['rewards.' + index + '.1'] = 0; 
            setModifierThreeOne.$set['rewards.' + index + '.2'] = 1;
            setModifierThreeZero.$set['rewards.' + index + '.2'] = 0; 
            setModifierFourOne.$set['rewards.' + index + '.3'] = 1; 
            setModifierFourZero.$set['rewards.' + index + '.3'] = 0; 

            if(Math.random() <= Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).distributions[0]){
                //console.log('im in oneone');
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, {$set: {'rewards.0.0' : 1}}, {multi: true});
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, setModifierOneOne, {multi: true});
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.fetch().forEach(function(obj){
                Games.update({ _id : obj._id}, setModifierOneOne);
                });

            }else{
                //console.log('im in one');
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, {$set: {'rewards.0.0' : 0}}, {multi: true});
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, setModifierOneZero, {multi: true});
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.fetch().forEach(function(obj){
                Games.update({ _id : obj._id}, setModifierOneZero);
                });

            }

            if(Math.random() <= Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).distributions[1]){
                //console.log('im in twoone');
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, {$set: {'rewards.0.1' : 1}}, {multi: true});
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, setModifierTwoOne, {multi: true});
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.fetch().forEach(function(obj){
                Games.update({ _id : obj._id}, setModifierTwoOne);
                });
            }else{
                //console.log('im in two');
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, setModifierTwoZero, {multi: true});
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.fetch().forEach(function(obj){
                Games.update({ _id : obj._id}, setModifierTwoZero);
                });
            }

            if(Math.random() <= Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).distributions[2]){
                //console.log('im in threeone');
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, setModifierThreeOne, {multi: true});
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.fetch().forEach(function(obj){
                Games.update({ _id : obj._id}, setModifierThreeOne);
                });
            }else{
                //console.log('im in three');
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, setModifierThreeZero, {multi: true});
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.fetch().forEach(function(obj){
                Games.update({ _id : obj._id}, setModifierThreeZero);
                });
            }

            if(Math.random() <= Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).distributions[3]){
                //console.log('im in fourone');
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, setModifierFourOne, {multi: true});
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.fetch().forEach(function(obj){
                Games.update({ _id : obj._id}, setModifierFourOne);
                });
            }else{
                //console.log('im in four');
                //Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }).collection.update({}, setModifierFourZero, {multi: true});
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.fetch().forEach(function(obj){
                Games.update({ _id : obj._id}, setModifierFourZero);
                });
            }


        }



        var REWARD = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).rewards[Session.get('roundNumber') - 1][3];  
        

        var a = Session.get('pointFour');
        var b = REWARD;
        Session.set('pointFour', a + b);

        var image = document.getElementById('armFourGame');
        if (REWARD) {
        image.src = "win.png";
        } else {
        image.src = "fail.png";
        }
        Meteor.setTimeout(function(){
            var image = document.getElementById('armFourGame');
            image.src = "slotmachine.png";
        }
        , 1000);

        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $inc : { 'box.3' : 1}}); //record the total click number that box4 got
        Session.set('boxThree', Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).box[3]);

        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $set : { 'boxCurrent.2' : 0}});
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $set : { 'boxCurrent.0' : 0}});
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $set : { 'boxCurrent.1' : 0}});
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $set : { 'boxCurrent.3' : 1}});
        
        var index = Session.get('roundNumber') - 1;
        var setModifier = { $set: {} };
        setModifier.$set['choices.' + index] = [4, REWARD]; //record the click result in Games.choices : [box, point]
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifier);

        Session.set('show', true); //when click, then can shown the result 

        var totalPoint = Session.get('gameCounter') + REWARD;//update total point one get 
        Session.set('gameCounter', totalPoint); //the total poits that one got so far //save it to the collection when it's the last round
        
        //Games.update({ _id : Games.findOne({ userId : Meteor.userId()})._id}, { $inc : { 'box.2' : 1}}); //record the total click number that box3 got

        function clickCheckFunc(){
            var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }); //check if everyone in the group has clicked
            var clickCheck = 0;
            cursor.forEach(function(Games){
                if(Games.choices[index][0] != null ){ //if dose， then go to next round  
                clickCheck = clickCheck + 1;
                return clickCheck;
                }
                else{
                return clickCheck;
                }
            });
            return clickCheck;
        }

        Tracker.autorun(function (trackFour){

            if (clickCheckFunc() == groupSize) {

                var boxOneCount = 0; boxTwoCount = 0; boxThreeCount = 0; boxFourCount = 0;
                var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                cursor.forEach(function(Games){
                    boxOneCount = boxOneCount + Games.boxCurrent[0];
                    boxTwoCount = boxTwoCount + Games.boxCurrent[1];
                    boxThreeCount = boxThreeCount + Games.boxCurrent[2];
                    boxFourCount = boxFourCount + Games.boxCurrent[3];
                }); 

                var index = Session.get('roundNumber') - 1; 
                 
                
                var setModifierOne = { $set: {} };
                    setModifierTwo = { $set: {} };
                    setModifierThree = {$set: {} };
                    setModifierFour = {$set: {} };
                setModifierOne.$set['boxPopularity.' + index + '.0'] = boxOneCount; //the popularity box 1 have after this round 
                setModifierTwo.$set['boxPopularity.' + index + '.1'] = boxTwoCount; 
                setModifierThree.$set['boxPopularity.' + index + '.2'] = boxThreeCount;
                setModifierFour.$set['boxPopularity.' + index + '.3'] = boxFourCount;
                Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifierOne);
                Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifierTwo);
                Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifierThree);
                Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifierFour);




                var passer = 0;
                passer = Session.get('roundNumber') + 1;
                if(Session.get('roundNumber') < roundNumber){  
                Session.set('roundNumber', passer);

                $.unblockUI();
                Session.set('blockIndex',0);

                var elemRound = document.getElementById("roundBar");
                var elemRoundFix = document.getElementById("roundBarFix");
                elemRound.style.width = passer*100/roundNumber + '%';
                elemRoundFix.style.width = (passer-1)*100/roundNumber + '%';
                document.getElementById("roundLabel").innerHTML = 'Round '+ passer;

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

                //Session.set('blockClick', 0);
                //Session.set('showWaiting', 0);

                }
                else{
                    Meteor.setTimeout(function(){
                        $.unblockUI();
                        window.clearInterval(checkBlock);
                        Router.go('finish'); 

                    }
                    , 1000);
                }


                var elemOne = document.getElementById("myBarOneGame");
                var elemTwo = document.getElementById("myBarTwoGame");
                var elemThree = document.getElementById("myBarThreeGame");
                var elemFour = document.getElementById("myBarFourGame");

                //var handleOne = Tracker.autorun(function () {
                // var widthOne = 0;
                // var widthTwo = 0;
                // var widthThree = 0;
                // var widthFour = 0;
                var one = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][0];
                var two = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][1];
                var three = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][2];
                var four = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][3];
                var total = one + two + three + four;
                var widthOne = 100*one/total;
                var widthTwo = 100*two/total;
                var widthThree =  100*three/total;
                var widthFour = 100*four/total;
                elemOne.style.width = widthOne + '%';
                elemTwo.style.width = widthTwo + '%';
                elemThree.style.width = widthThree +'%';
                elemFour.style.width = widthFour +'%';   
                document.getElementById("labelOneGame").innerHTML =  widthOne.toFixed(2) + '%';      
                document.getElementById("labelTwoGame").innerHTML =  widthTwo.toFixed(2) + '%';      
                document.getElementById("labelThreeGame").innerHTML =  widthThree.toFixed(2) + '%'; 
                document.getElementById("labelFourGame").innerHTML =  widthFour.toFixed(2) + '%';  
                //});   

                
                
                trackFour.stop();
                return;

                
            }
            else {
                 //let spinner shown, and tell the current player to waiit 
                //Session.set('blockClick', 1);
                $.blockUI({ message: '<h3>Please wait for the others to make choices...</h3>',
                css: { 
                border: 'none', 
                padding: '5px', 
                width: '60%',
                top:  '40%', 
                left:  '20%',
                textAlign: 'center',
                backgroundColor: '#000', 
                '-webkit-border-radius': '10px', 
                '-moz-border-radius': '10px', 
                opacity: .4, 
                color: '#fff' 
                }});

                Session.set('blockIndex', 1);
            }

        }); 
    //}
}
});