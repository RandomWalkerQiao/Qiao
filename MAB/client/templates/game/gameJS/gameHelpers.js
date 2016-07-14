Template.game.helpers({

    boxOneClick: function() {
      return Session.get('boxOne');
    },

    boxTwoClick: function() {
      return Session.get('boxTwo');
    },

    boxThreeClick: function() {
      return Session.get('boxThree');
    },

    boxFourClick: function() {
      return Session.get('boxFour');
    },


    pointOne: function() {
      return Session.get('pointOne');
    },

    pointTwo: function() {
      return Session.get('pointTwo');
    },

    pointThree: function() {
      return Session.get('pointThree');
    },

    pointFour: function() {
      return Session.get('pointFour');
    },

    number: function() {
      return groupSize-1;
    },

    currentGameNum: function() {
      return Session.get('timeArray')[0];
    },

    gameNum: function() {
      return time;
    },

    roundNumber: function() {
      return Session.get('roundNumber');
      //return Games.findOne({ userId : Meteor.userId()}).currentRoundNumber;
    },
    
    roundLeft: function(){
        return roundNumber - Session.get('roundNumber'); //Games.findOne({ userId : Meteor.userId()}).currentRoundNumber
    },

   
    clickOne: function(){
        //Tracker.autorun(function()
        var index = Session.get('roundNumber') - 2;
        if (Session.get('roundNumber') == 1){
            return Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[0][0];
        }
        else{
            return Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][0];
        } 

    },

    clickTwo: function(){
        var index = Session.get('roundNumber') - 2;
        if (Session.get('roundNumber') == 1){
            return Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[0][1];
        }
        else{
            return Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][1];
        }

    },

    clickThree: function(){
        var index = Session.get('roundNumber') - 2;
        if (Session.get('roundNumber') == 1){
            return Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[0][2];
        }
        else{
            return Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][2];
        }

     },

     
     clickFour: function(){
        var index = Session.get('roundNumber') - 2;
        if (Session.get('roundNumber') == 1){
            return Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[0][3];
        }
        else{
            return Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).boxPopularity[index][3];
        }

     },
    
});