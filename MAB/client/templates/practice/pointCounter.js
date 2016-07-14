Template.pointCounter.helpers({
    totalPoints: function(){
    	return Session.get('counter');
	}
});