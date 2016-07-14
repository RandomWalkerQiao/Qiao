//Template.consent.rendered = function (){

    //Guests.add();
    //AccountsAnonymous.login();
    //AccountsAnonymous.login();
//     // if( Meteor.call('collectionLength') === 0){
//     //     for (i=0; i<groupNumber; i++) {
//     //         for (j=i*groupSize; j<(i+1)*groupSize; j++) {  
//     //          groupArray[j]= i + 1;
//     //         }
//     //     } //give groupArray value   
//     // }
//     // else{
//     //     Meteor.call('getArray');
//     // }
//     // Meteor.call('getArray');
//     // console.log(3);

//     // console.log(Games.find().fetch());
//     // console.log(Meteor.call('collectionLength'));
//     if(Meteor.call('collectionLength') === 0){
//         groupArray = passerArray;
//         console.log('2');
//     }
//     else{
//         var p = Meteor.call('biggestNum'); 
//         console.log(p); 
//         console.log(Games.find().fetch());
//         //var p = Games.find({}, { sort: {groupID: -1} }).fetch()[0].groupID;
//         //console.log(p);       
//         groupArray = passerArray.slice(p*groupSize);
//         console.log('3');
//      }

//};




Template.consent.events({
'click': function (event) {
    event.preventDefault;
    // $.blockUI({ message: '<h3><img src="coffeeSmall.gif" />Please wait for a moment, we are finding partners for you!</h3>',
    //         css: { 
    //         border: 'none', 
    //         padding: '15px', 
    //         width: '60%',
    //         top:  '40%', 
    //     	left:  '20%',
    //         textAlign: 'center',
    //         backgroundColor: '#000', 
    //         '-webkit-border-radius': '10px', 
    //         '-moz-border-radius': '10px', 
    //         opacity: .4, 
    //         color: '#fff' 
    // }});
    //console.log(Games.find().fetch().length);
    // if(Games.find().fetch().length === 0){
    //     groupArray = passerArray;
    //     //Session.set('groupArray', passerArray);
    // }
    // else{
    //     //console.log(Games.find().fetch());
    //     var p = Games.find({}, { sort: {groupID: -1} }).fetch()[0].groupID;
    //     //console.log(p);       
    //     groupArray = passerArray.slice(p*groupSize);
    //     //console.log('3');
    //  }

    Router.go('instruction');
}
});