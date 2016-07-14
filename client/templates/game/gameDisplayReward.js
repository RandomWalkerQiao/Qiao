Template.gameDisplayReward.helpers({
	gameTotalPoints: function(){
		return Session.get('gameCounter');
	}
});