var app=angular.module("HangmanApp",[]);
app.controller("GameController",['$scope',function($scope){
	
	var words=["cat","rat","bat","mat"];
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
	$scope.guesses=6;
	$scope.displayWord='';
	$scope.input={
		letter:''
	}

	var selectRandomWord= function(){
		var index= Math.round(Math.random()*words.length);
		return words[index];
	}

	var newGame = function(){

		$scope.incorrectLettersChosen=[];
		$scope.correctLettersChosen=[];
		$scope.guesses=6;
		$scope.displayWord='';

		selectedWord = selectRandomWord();
		//console.log(selectedWord);
		//hide lettersfor the user
		var tempDisplayWord = '';
		for (var i = 0; i < selectedWord.length; i++) {
			
			tempDisplayWord += '*'; 
		}

		$scope.displayWord = tempDisplayWord;


	}

	$scope.letterChosen = function(){
		//console.log("working!"); 
		for (var i = 0; i < $scope.correctLettersChosen.length; i++{
			if($scope.correctLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase())
			{
				$scope.input.letter=""; //clear the input field
				return;
			}			
		}

		for (var i = 0; i < $scope.incorrectLettersChosen.length; i++{
			if($scope.incorrectLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase())
			{
				$scope.input.letter=""; //clear the input field
				return;
			}			
		}

	}

	newGame();
}]);