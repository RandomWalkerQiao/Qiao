Meteor.publish('games', function () { 
    return Games.find(); 
}); 

Meteor.publish('users', function () {  
    return Meteor.users.find();
});
