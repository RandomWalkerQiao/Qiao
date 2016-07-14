import { Meteor } from 'meteor/meteor';

p = [Math.random(), Math.random(), Math.random(), Math.random()];

/*Meteor.users.allow({
    'update': function (userId,doc) {
       user and doc checks ,
      return true to allow insert 
      return true; 
    }
  });*/

Meteor.methods({
    'createPlayer': function(){
        return Meteor.users.insert({name: '1',},
        function(err, docsInserted){ Games.insert({
        name: docsInserted,
        groupID: groupArray[0],
        choices: choices, //Games.choices : [box, point] (only infos about current person)
        box: box, //store the total click number that box1 got to Games.box[0] from the current player (only store infos involved with current play)
        boxCurrent: boxCurrent,
        boxPopularity: boxPopularity, //把box1 box2 box3的所有click过的指赋给 Games.boxPopularity[index][0] /1/2 involve with others 
        probability: [],
        time: 1,
        distributions: [0,0,0,0],
        rewards: rewards,
    	});
        });
    },


    // 'add': function(){
    //     Meteor.users.update(this.userId, {$set: {
    //         groupID: groupArray[0],
    //         choices: choices, //Games.choices : [box, point] (only infos about current person)
    //         box: box, //store the total click number that box1 got to Games.box[0] from the current player (only store infos involved with current play)
    //         boxCurrent: boxCurrent,
    //         boxPopularity: boxPopularity, //把box1 box2 box3的所有click过的指赋给 Games.boxPopularity[index][0] /1/2 involve with others 
    //         probability: [],
    //         time: 1,
    //         distributions: [0,0,0,0],
    //         rewards: rewards,}});
    //     },

    // 'clickCheck': function(){
    //         var cursor = Meteor.users.find({ groupID : Meteor.users.findOne({ id: this.userId, time : Session.get('timeArray')[0]}).groupID }); //check if everyone in the group has clicked
    //         var clickCheck = 0;
    //         var i = Session.get('roundNumber') - 1;
    //         cursor.forEach(function(obj){
    //             if(obj.choices[i][0] != null ){ //如果代表本轮box的那个空不是null 则clickCheck 加1 
    //             clickCheck = clickCheck + 1;
    //             return clickCheck;
    //             }
    //             else{
    //             return clickCheck;
    //             }
    //         });
      
    //         return clickCheck;
    //     },
    

    // 'getDistribution': function(){
    //     Games.arms[0] = p[0];
       
    // },

    // 'biggestNum': function(){
    //     return Games.find({}, { sort: {groupID: -1} }).fetch()[0].groupID;
    // },


    // 'getArray': function(){
    //     if(Games.find().fetch().length === 0){
    //         for (i=0; i<groupNumber; i++) {
    //             for (j=i*groupSize; j<(i+1)*groupSize; j++) {  
    //                 groupArray[j]= i + 1;
    //             }
    //         } //give groupArray value   
    //         return groupArray;
    //         console.log(1);
    //         console.log(groupArray);
    //     }
    //     else{
    //         var p = Games.find({}, { sort: {groupID: -1},fields: {'groupID':1} }).fetch()[0].groupID;
    //         for (i=0; i<groupNumber; i++) {
    //             for (j=i*groupSize; j<(i+1)*groupSize; j++) {  
    //         groupArray[j]= i + 1;
    //             }
    //         }
    //         return groupArray = groupArray.slice(p*groupSize);
    //         console.log(2);
    //         console.log(groupArray);
    //     }
    // },


    
    // 'reCreatePlayer': function(){
    //     Games.insert({
    //         name: Session.get('NAME'),
    //         groupID: groupArray[0],
    //         choices: choices,
    //         box: box,
    //         boxPopularity: boxPopularity,
    //         probability: 0,
    //     });
       
    //},



});

