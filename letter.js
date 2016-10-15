//constructor file
//should control whether or not a letter appears as a "_" or as itself on-screen.

var Letter = function(letter){
	this.charac = letter;
	this.appear = false;
	this.letterRender = function(){
		if (this.appear === true){
			return (this.charac);
		}
		else if (this.charac === ' '){
			return (this.charac);
		}
		else{
			return ' _ ';
		}
	}
}

module.exports = Letter;