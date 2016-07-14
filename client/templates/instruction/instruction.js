
Template.instruction.events({           
'click button': function (event) {
	event.preventDefault;
	var i = $('input[id=quizOne]:checked').val();
	var j = $('input[id=quizTwo]:checked').val();
	var p = $('input[id=quizThree]:checked').val();
    
    if (i && j && p) 
    	{
            Session.setPersistent('beforeReady', true);
            Session.setPersistent('counter',0);
            Session.setPersistent('clickone',0);
            Session.setPersistent('clicktwo',0);
            Session.setPersistent('clickthree',0);
            Session.setPersistent('clickfour',0);
            Session.setPersistent('practiseBlockClick', 0);
    		Router.go('practiseGame');
 
		} else 
		{   
			$.blockUI({ message: '<h3> Sorry, you failed the comprehension checks. Please do it again.</h3>',
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

    		Meteor.setTimeout(function(){
                        $.unblockUI();
                    }
                    , 2000);
		}


}
});

Template.instruction.helpers({
    gameNum: function () {
      return time;
    },

    roundNum: function () {
      return roundNumber;
    },

    number: function() {
      return groupSize-1;
    },
  });