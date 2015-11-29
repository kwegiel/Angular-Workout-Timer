var app = angular.module("timerWorkout", []);
app.controller("mainCtrl", function($scope){
	$scope.list = [{
      id: 1,
      name: 'Workout 1',
      exerciseId: [1, 2, 3],
      rounds: 3,
      roundTime: 20,
      restTime: 1,
      roundRestTime: 30,
      prepTime: 10,
      sets: 3
    }, {
      id: 2,
      name: 'Workout 2',
      exerciseId: [2, 3],
      rounds: 2,
      roundTime: 30,
      restTime: 0,
      roundRestTime: 30,
      prepTime: 10,
      sets: 2
    }, {
      id: 3,
      name: 'Workout 3',
      exerciseId: [2, 1, 3],
      rounds: 3,
      roundTime: 30,
      restTime: 0,
      roundRestTime: 30,
      prepTime: 10,
      sets: 4
    }];
	$scope.exercise = [{
      id: 1,
      name: 'Exercice 1',
      img: 'img/costam1.gif',
    }, {
      id: 2,
      name: 'Exercice 2',
      img: 'img/costam1.gif',
    }, {
      id: 3,
      name: 'Exercice 3',
      img: 'img/costam3.gif',
    }];	
});

app.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){

 //Adding initial value for counter
 //counter modelimiz için ilk değer atamasını yaptık.   
$scope.counter = 100;
var stopped;

//timeout function
//1000 milliseconds = 1 second
//Every second counts
//Cancels a task associated with the promise. As a result of this, the //promise will be resolved with a rejection.  
$scope.countdown = function() {
    stopped = $timeout(function() {
       console.log($scope.counter);
     $scope.counter--;   
     $scope.countdown();   
    }, 1000);
  };
   
    
$scope.stop = function(){
   $timeout.cancel(stopped);
    
    } 


}]);