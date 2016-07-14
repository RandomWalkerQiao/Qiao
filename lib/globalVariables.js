surveyNumber = 4;

time = 2; //gameNum
timeArray = new Array(time);
for (i=0; i<time; i++) {
  timeArray[i]= i + 1;
}

roundNumber = 3;
currentRoundNumber = 1;

groupSize = 2;
groupNumber = 4;
groupArray = new Array(groupNumber*groupSize);
passerArray = new Array(groupNumber*groupSize);

for (i=0; i<groupNumber; i++) {
    for (j=i*groupSize; j<(i+1)*groupSize; j++) {  
        passerArray[j]= i + 1;
    }
} 

//groupArray = Session.get('groupArray');


groupArray = passerArray;


//Meteor.call('getArray');



choices = new Array(roundNumber);
for (var i = 0; i < roundNumber; i++) {
  choices[i] = new Array(2); // [box, point] 
} 

box = [0,0,0,0]; //for recording the popularity(click number) for each box that current user has on 
boxCurrent = [0,0,0,0];

rewards = new Array(roundNumber);
for (var i = 0; i < roundNumber; i++) {
  rewards[i] = new Array(4);// [(0,0,0,0)(0,0,0,0)] 
}

boxPopularity = new Array(roundNumber);//record the popularity for all the boxes after each round 
for (var i = 0; i < roundNumber; i++) {
  boxPopularity[i] = [0, 0, 0,0];//since there are 4 boxes  
} 



function binaryTwo(){//second best
            if (Math.random() < 0.5) {
            return 0;
            } 
            else {
            return 1;
            }
}

function binaryThree(){
            if (Math.random() < 0.25) {
            return 0;
            } 
            else {
            return 1;
            }
        }

function binaryOne(){ //the best
            if (Math.random() < 0.75) {
            return 0;
            } 
            else {
            return 1;
            }
        }

rewardArray = [binaryOne, binaryTwo, binaryThree]; //is a function array, all the elements are functions 
