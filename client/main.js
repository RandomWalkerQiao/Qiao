Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('games');
Meteor.subscribe('users');