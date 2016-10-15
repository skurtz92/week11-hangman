//constructor file
//should contain all of the methods which will check the letters guessed versus the random word selected.
var Letter = require('./letter.js');
//import Letter above with requiring the letter.js file

var str;

var Word = function(wrd){
	//set a property called word and set it equal to what you think it should be
	this.word = wrd;
	//set a property called lets to an empty array. We will eventually push letter objects in here
	this.lets = [];
	//set a property called found to false
	this.found = false;
	//make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property.
	this.getLets = function(){
		for (var i = 0; i < this.word.length; i++){
			this.lets.push(new Letter(this.word.charAt(i)));
		}
	}
	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not
		var wordFoundCounter = 0;
		for (var i = 0; i < this.lets.length; i++){
			if (this.lets[i].appear === true){
				wordFoundCounter++;			
			}
			if (wordFoundCounter === this.lets.length){
				this.found = true;
			}
			else{
				this.found = false
			}
		}
		//return the found property
		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable whatToReturn to 0
		var whatToReturn = 0;
		//loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.
		for (var i = 0; i < this.lets.length; i++){
			if (this.lets[i].charac === guessLetter){
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}
		//return whatToReturn
		return whatToReturn;
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = '';
		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for (var i = 0; i < this.lets.length; i++){
			str += this.lets[i].letterRender();
		}
		return str;
	};
}

module.exports = Word;