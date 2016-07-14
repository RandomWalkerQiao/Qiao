
Template.practiseGame.events({
'click .one': function (event) {
    if ( Session.get('practiseBlockClick') == 0) {
        event.preventDefault;
        REWARD = binaryone();
    	function binaryone(){
    		if (Math.random() < 0.5) {
    	    return 0;
    	    } 
    	    else {
    	    return 1;
    	}
    	}
        Session.setPersistent('reward', REWARD);

        var image = document.getElementById('armOne');
        if (REWARD) {
        image.src = "win.png";
        } else {
        image.src = "fail.png";
        }

        Meteor.setTimeout(function(){
            var image = document.getElementById('armOne');
            image.src = "slotmachine.png";
        }
        , 1000);

        


        Session.setPersistent('show', true);
        var a = Session.get('counter') + Session.get('reward');
        Session.setPersistent('counter', a);
        var i = 1 + Session.get('clickone');
        Session.setPersistent('clickone',i);

        var elem = document.getElementById("myBarOne"); 

        var handleOnePrac = Tracker.autorun(function () {
            var width = 0;
            var one = Session.get('clickone');
            var total = Session.get('clickone') + Session.get('clicktwo') + Session.get('clickthree') + Session.get('clickfour');
            width = width + 100*one/total;
            elem.style.width = width + '%';   
            document.getElementById("labelOne").innerHTML = width.toFixed(2) + '%';
        });
    }
}
});

Template.practiseGame.events({
'click .two': function (event) {
    if ( Session.get('practiseBlockClick') == 0) {
        event.preventDefault;
        REWARD = binaryone();
        function binaryone(){
            if (Math.random() < 0.5) {
            return 0;
            } 
            else {
            return 1;
        }
        }
        Session.setPersistent('reward', REWARD);

        var image = document.getElementById('armTwo');
        if (REWARD) {
        image.src = "win.png";
        } else {
        image.src = "fail.png";
        }
        Meteor.setTimeout(function(){
            var image = document.getElementById('armTwo');
            image.src = "slotmachine.png";
        }
        , 1000);


        Session.setPersistent('show', true);
        var a = Session.get('counter') + Session.get('reward');
        Session.setPersistent('counter', a);
        var i = 1 + Session.get('clicktwo');
        Session.setPersistent('clicktwo',i);

        var elem = document.getElementById("myBarTwo"); 

        var handleTwoPrac = Tracker.autorun(function () {
            var width = 0;
            var two = Session.get('clicktwo');
            var total = Session.get('clickone') + Session.get('clicktwo') + Session.get('clickthree') + Session.get('clickfour');
            width = width + 100*two/total;
            elem.style.width = width + '%';   
            document.getElementById("labelTwo").innerHTML = width.toFixed(2) + '%'; 
        });

    }
}
});

Template.practiseGame.events({
'click .three': function (event) {
    if ( Session.get('practiseBlockClick') == 0) {
        event.preventDefault;
        REWARD = binaryone();
        function binaryone(){
            if (Math.random() < 0.5) {
            return 1;
            } 
            else {
            return 0;
        }
        }
        Session.setPersistent('reward', REWARD);

        var image = document.getElementById('armThree');
        if (REWARD) {
        image.src = "win.png";
        } else {
        image.src = "fail.png";
        }
        Meteor.setTimeout(function(){
            var image = document.getElementById('armThree');
            image.src = "slotmachine.png";
        }
        , 1000);

        Session.setPersistent('show', true);
        var a = Session.get('counter') + Session.get('reward');
        Session.setPersistent('counter', a);
        var i = 1 + Session.get('clickthree');
        Session.setPersistent('clickthree',i);

        var elem = document.getElementById("myBarThree"); 

        var handleThreePrac = Tracker.autorun(function () {
            var width = 0;
            var three = Session.get('clickthree');
            var total = Session.get('clickone') + Session.get('clicktwo') + Session.get('clickthree') + Session.get('clickfour');
            width = width + 100*three/total;
            elem.style.width = width + '%';   
            document.getElementById("labelThree").innerHTML = width.toFixed(2) + '%'; 
        });

    }
}
});

Template.practiseGame.events({
'click .four': function (event) {
    if ( Session.get('practiseBlockClick') == 0) {
        event.preventDefault;
        REWARD = binaryone();
        function binaryone(){
            if (Math.random() < 0.5) {
            return 0;
            } 
            else {
            return 1;
        }
        }
        Session.setPersistent('reward', REWARD);

        var image = document.getElementById('armFour');
        if (REWARD) {
        image.src = "win.png";
        } else {
        image.src = "fail.png";
        }

        Meteor.setTimeout(function(){
            var image = document.getElementById('armFour');
            image.src = "slotmachine.png";
        }
        , 1000);

        


        Session.setPersistent('show', true);
        var a = Session.get('counter') + Session.get('reward');
        Session.setPersistent('counter', a);
        var i = 1 + Session.get('clickfour');
        Session.setPersistent('clickfour',i);

        var elem = document.getElementById("myBarFour"); 

        var handleOnePrac = Tracker.autorun(function () {
            var width = 0;
            var four = Session.get('clickfour');
            var total = Session.get('clickone') + Session.get('clicktwo') + Session.get('clickthree') + Session.get('clickfour');
            width = width + 100*four/total;
            elem.style.width = width + '%';   
            document.getElementById("labelFour").innerHTML = width.toFixed(2) + '%';
        });
    }
}
});

Template.practiseGame.helpers({
    showTheRegister: function() {
      return Session.get('show');
    },

    beforeReady: function(){
        return Session.get('beforeReady');
    },
   
    clickOne: function(){
        return Session.get('clickone');
    },

    clickTwo: function(){
        return Session.get('clicktwo');
    },

    clickThree: function(){
        return Session.get('clickthree');
    },

    clickFour: function(){
        return Session.get('clickfour');
    },

    peopleInNeed: function(){
        return groupSize - Games.find({ groupID: groupArray[0]}).fetch().length;
        //return 1;
    }
});

Template.practiseGame.events({           
'click button': function (event) {
    event.preventDefault;

    Meteor.call('createPlayer', function(error, result){
    Session.setPersistent('NAME', result);
    });

    //AccountsAnonymous.login();
    
    //Meteor.call('add');

    groupArray.shift();
    Session.setPersistent('timeArray', timeArray); 

    Session.setPersistent('practiseBlockClick', 1);
    Session.setPersistent('beforeReady', false);  

    Tracker.autorun(function (trackGo) {

    if (Games.find({ groupID: groupArray[0]}).fetch().length == groupSize) {
        $.unblockUI();
        groupArray.shift(); 
/*            Session.set('roundNumber', 1);//the current round number, doesnt shown in the practise page  
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
            Session.set('boxFour',0);*/
        Router.go('game');
        trackGo.stop();
        return;
        }
    else {
        //Session.set('wait', 1);
        //var title = {{peopleInNeed}} + 'more people in need.';
        //$.blockUI({title});
        //$.blockUI({ message: '<h3><img src="coffeeSmall.gif" />Please be patient, we are finding partners for you!</h3><br><h3>{{peopleInNeed}} more people in need.</h3>',
        //$.blockUI({ message: {{> peopleInNeed}},
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


