Template.reassign.events({           
'click button': function (event) {
    event.preventDefault;

    //Meteor.call('reCreatePlayer');

    Games.insert({
        name: Session.get('NAME'),
        groupID: groupArray[0],
        choices: choices,
        box: box,
        boxCurrent: boxCurrent,
        boxPopularity: boxPopularity,
        probability: [],
        time: Session.get('timeArray')[0] + 1,
        distributions: [0,0,0,0],
        rewards: rewards,
    });
    var timePasser = Session.get('timeArray');
    timePasser.shift();
    Session.set('timeArray', timePasser);
    groupArray.shift();


    Tracker.autorun(function (trackGo) {

    if (Games.find({ groupID: groupArray[0]}).fetch().length == groupSize) {
        $.unblockUI();
        groupArray.shift(); 
        Router.go('game');
        trackGo.stop();
        return;
        }
    else {
        $.blockUI({ message: $('#domMessage'), 
            css: { 
            border: 'none', 
            padding: '5px', 
            width: '70%',
            top:  '40%', 
            left:  '15%',
            textAlign: 'center',
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .4, 
            color: '#fff' 
        }});
    } 
    });

}
});

Template.reassign.helpers({
    gameLeft: function() {
      return time - Session.get('timeArray')[0];
    },

    peopleInNeed: function(){
        return groupSize - Games.find({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).fetch().length;
        //return 1;
    }
});