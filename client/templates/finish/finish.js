Template.finish.rendered = function () {
  Session.set('sliderOne', 0);
  
  Tracker.autorun(function (trackOne){
  this.$("#sliderOne").noUiSlider({
    start: 0,
    step: 1,
    connect: 'lower',
    range: {
      'min': 0,
      'max': 100
    }
  }).on('slide', function (ev, val) {
    // set real values on 'slide' event
    Session.set('sliderOne', val);
  });
  });

  Session.set('sliderTwo', 0);
  Tracker.autorun(function (trackTwo){
  this.$("#sliderTwo").noUiSlider({
    start: 0,
    step: 1,
    connect: 'lower',
    range: {
      'min': 0,
      'max': 100
    }
  }).on('slide', function (ev, val) {
    // set real values on 'slide' event
    Session.set('sliderTwo', val);
  });
});


  Session.set('sliderThree', 0);
  Tracker.autorun(function (trackThree){
  this.$("#sliderThree").noUiSlider({
    start: 0,
    step: 1,
    connect: 'lower',
    range: {
      'min': 0,
      'max': 100
    }
  }).on('slide', function (ev, val) {
    // set real values on 'slide' event
    Session.set('sliderThree', val);
  });
});

  Session.set('sliderFour', 0);
  Tracker.autorun(function (trackFour){
  this.$("#sliderFour").noUiSlider({
    start: 0,
    step: 1,
    connect: 'lower',
    range: {
      'min': 0,
      'max': 100
    }
  }).on('slide', function (ev, val) {
    // set real values on 'slide' event
    Session.set('sliderFour', val);
  });
});

  };



Template.finish.helpers({
    sliderOne: function () {
      return Session.get("sliderOne");
    },

    sliderTwo: function () {
      return Session.get("sliderTwo");
    },

    sliderThree: function () {
      return Session.get("sliderThree");
    },

    sliderFour: function () {
      return Session.get("sliderFour");
    },

    totalPoints: function () {
      return Session.get('gameCounter');
    }
  });


Template.finish.events({           
'click button': function (event) {
    event.preventDefault;
    Games.update({ _id: Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]})._id}, {
      $set: { probability: [Session.get("sliderOne"), Session.get("sliderTwo"), Session.get("sliderThree"), Session.get("sliderFour") ] },
    });
    
    if ((Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).probability[0] && Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).probability[1] 
      && Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).probability[2] && Games.findOne({ name : Session.get('NAME'), time : Session.get('timeArray')[0]}).probability[3]) === 0) {
      
      $.blockUI({ message: '<h3>Please complete!</h3>',
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
    } else {
      if (Session.get('timeArray').length === 1) {
        // trackOne.stop();
        // trackTwo.stop();
        // trackThree.stop();
        Router.go('survey');
        } else {
        Router.go('reassign');
        }
  }
  

    }
  });