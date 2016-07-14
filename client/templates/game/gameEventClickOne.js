Template.game.events({
'click .one': function (event) {
    //if ( Session.get('blockClick') == 0) { //if allow click 
    
        event.preventDefault;

        if(Games.findOne({ id: this.userId, time : Session.get('timeArray')[0]}).rewards[Session.get('roundNumber') - 1][0] == null){
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
    
        

        var REWARD = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).rewards[Session.get('roundNumber') - 1][0];   //generate random reward function 一个数

/*-------------------------------------store this round's result to Games.choices : [box, point]--------------------*/
        var a = Session.get('pointOne');
        var b = REWARD;
        Session.set('pointOne', a + b); //store accumulated points this player got from this arm

        var image = document.getElementById('armOneGame');
        if (REWARD) {
        image.src = "win.png";
        } else {
        image.src = "fail.png";
        }
        Meteor.setTimeout(function(){
            var image = document.getElementById('armOneGame');
            image.src = "slotmachine.png";
        }
        , 1000);
        
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $inc : { 'box.0' : 1}}); //record the total click number that box2 got
        Session.set('boxOne', Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).box[0]);

        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $set : { 'boxCurrent.1' : 0}});
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $set : { 'boxCurrent.0' : 1}});
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $set : { 'boxCurrent.2' : 0}});
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, { $set : { 'boxCurrent.3' : 0}});


        var index = Session.get('roundNumber') - 1;
        var setModifier = { $set: {} };
        setModifier.$set['choices.' + index] = [1, REWARD]; //record the click result in Games.choices : [box, point]
        Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifier);
/*--------------------------------------------------------------------------------------------------------------------*/        

        Session.set('show', true); //when click, then can shown the result 

/*-----------------------------------————————————--update the total points one get so far (Session)-------------——————————————————-------------*/

        var totalPoint = Session.get('gameCounter') + REWARD;//update total point one get 
        Session.set('gameCounter', totalPoint); //the total poits that one got so far //save it to the collection when it's the last round
/*---------------------------------------------------------------------------------------------------------------------------*/
        
/*-----------------------------------————————————--check if everyone in the group has clicked——————————————————-------------------------*/
        function clickCheckFunc(){ //return the total click number in the group (since each one can only click once)
           
            var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID }); //check if everyone in the group has clicked
            var clickCheck = 0;
            var i = Session.get('roundNumber') - 1;
            cursor.forEach(function(obj){
                //console.log(obj);
                if(obj.choices[i][0] != null ){ //如果代表本轮box的那个空不是null 则clickCheck 加1 
                clickCheck = clickCheck + 1;
                return clickCheck;
                }
                else{
                return clickCheck;
                }
            });

      
            return clickCheck;
            //Session.set('clickCheck', clickCheck);
        }

        //Session.set('clickCheck', clickCheckFunc());
/*---------------------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------————————------------————--tracker-------------——————————————————-------------------------*/
        Tracker.autorun(function (trackOne){

                if (clickCheckFunc() == groupSize) {//如果所有人都点过了
                //if (Session.get('clickCheck') == groupSize) {

                    Session.set('kickoutIndex',1);
                    

                    var boxOneCount = 0; boxTwoCount = 0; boxThreeCount = 0; boxFourCount = 0;
                    var cursor = Games.find({ groupID : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).groupID });
                    
                    cursor.forEach(function(obj){ //取所有同一个group里面的人， 把box1 box2 box3的所有click过的指赋给 Games.boxPopularity.(roundNumber-1).0 / .1 /.2
                        boxOneCount = boxOneCount + obj.boxCurrent[0];
                        boxTwoCount = boxTwoCount + obj.boxCurrent[1];
                        boxThreeCount = boxThreeCount + obj.boxCurrent[2];
                        boxFourCount = boxFourCount + obj.boxCurrent[3];
                      
                    }); 

                    var index = Session.get('roundNumber') - 1; 
                    
                    var setModifierOne = { $set: {} };
                        setModifierTwo = { $set: {} };
                        setModifierThree = {$set: {} };
                        setModifierFour = {$set: {} };
                    setModifierOne.$set['boxPopularity.' + index + '.0'] = boxOneCount;  
                    setModifierTwo.$set['boxPopularity.' + index + '.1'] = boxTwoCount; 
                    setModifierThree.$set['boxPopularity.' + index + '.2'] = boxThreeCount;
                    setModifierThree.$set['boxPopularity.' + index + '.3'] = boxFourCount;
                    
                    
                    Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifierOne);
                    Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifierTwo);
                    Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifierThree);//set the total clicked number box got so far in this round (popularity)
                    Games.update({ _id : Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, setModifierFour);

                    /*----------------set round +1 ---------------------*/
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
                    
                    // trackOne.stop();
                    // return;

                    }
                    else{
                    Meteor.setTimeout(function(){
                        $.unblockUI();
                        //trackKickout.stop();
                        //trackRound.stop();
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
                    var widthOne = 0;
                    var widthTwo = 0;
                    var widthThree = 0;
                    var widthFour = 0;
                    var one = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][0];
                    var two = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][1];
                    var three = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][2];
                    var four = Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][3];
                    var total = one + two + three;

                    
                

                    widthOne = 100*one/total;
                    widthTwo = 100*two/total;
                    widthThree = 100*three/total;
                    widthFour = 100*four/total;

                   
                

                    elemOne.style.width = widthOne + '%';
                    elemTwo.style.width = widthTwo + '%';
                    elemThree.style.width = widthThree +'%';   
                    elemFour.style.width = widthFour +'%'; 


                    document.getElementById("labelOneGame").innerHTML =  widthOne.toFixed(2) + '%';      
                    document.getElementById("labelTwoGame").innerHTML =  widthTwo.toFixed(2) + '%';      
                    document.getElementById("labelThreeGame").innerHTML =  widthThree.toFixed(2) + '%'; 
                    document.getElementById("labelFourGame").innerHTML =  widthFour.toFixed(2) + '%'; 

                    
           

                    
                    trackOne.stop();

                    return;


                    //});
                }

                else {
                    //Tracker.nonreactive(function() {
                    //Session.set('blockClick', 1);
                    //Session.set('showWaiting', 1); //let spinner shown, and tell the current player to waiit
                    //});
                    setTimeout(block, 2000);
                    var block = $.blockUI({ message: '<h3>Please wait for the others to make choices...</h3>',
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
                    opacity: .6, 
                    color: '#fff' 
                    }});

                    Session.set('blockIndex', 1);
                    //IDLE_TIMEOUT = 100000000;

                }

            // }

        });//autorun

    //}
}
});



