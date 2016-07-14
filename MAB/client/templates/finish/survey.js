Template.survey.events({           
'click button': function (event) {
	var i = document.getElementById("strategy").value;
	Session.set('strategy', i);
	//var j = document.getElementById("strategyChange").value;
	var j = $('input[id=strategyChange]:checked').val();
	Session.set('strategyChange', j);
	var others = $('input[id=others]:checked').val();
	var bugs = document.getElementById("bugs").value;

    
    if (i === '' | j === null | others === null | bugs === '') 
    	{
    	$.blockUI({ message: '<h3>Please complete the survey!</h3>',
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
                    , 1000);
 
		} else 
		{   Games.insert({
        		name: Session.get('NAME'),
        		survey: [i, j, others, bugs],
    		});

			$.blockUI({ message: '<h3><img src="daXiang.gif" />Thanks for your cooperation! Please close the broswer.</h3>',
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
}
});