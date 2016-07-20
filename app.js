/* How to make CSS load before JS?? */
'use strict';
/*
var userName = prompt('Hey there! What\'s your name?');
alert('Nice to meet you, ' + userName + '. I\'m sure you want to get to know me better, so I\'m going to ask you some questions.');

// question 1
var inputOne = prompt('Was Rachael born in Seattle? Please answer Yes or No.');

var answerOne = inputOne.toUpperCase();

console.log(answerOne);

if (answerOne === 'YES' || answerOne === 'Y') {
  alert('Sorry, Rachael was born in NYC.');
} else if (answerOne === 'NO' || answerOne === 'N') {
  alert('That\'s right, she was born in NYC.');
} else {
  alert('I\'m sorry, I don\'t understand. Let\'s try a new question.');
};

// question 2
var inputTwo = prompt('Does Rachael have any pets? Again, please answer with Yes or No.');

var answerTwo = inputTwo.toUpperCase();

console.log(answerTwo);

if (answerTwo === 'YES' || answerTwo === 'Y'){
  alert('You know it. She\'s got one dog, named Lucy, who is a total terror. But in a good way.');
} else if (answerTwo === 'NO' || answerTwo === 'N'){
  alert('That\'s not right. She has one crazy, crazy dog, named Lucy.');
} else {
  alert('That just doesn\'t make sense to me. Let\'s try a new question.');
};

// question 3
var inputThree = prompt('Yes or No- the original Independence Day is one of Rachael\'s all time favorite movies.');

var answerThree = inputThree.toUpperCase();

console.log(answerThree);

if (answerThree === 'YES' || answerThree === 'Y'){
  alert('Absolutely it is.');
} else if (answerThree === 'NO' || answerThree === 'N'){
  alert('You\'ve got to be kidding me. ID4 is a classic.');
} else {
  alert('Sorry, you\'re just not making any sense. Let\'s move on.');
};

// question 4
var inputFour = prompt('Rachael has a not-so-secret soft spot for Earth Wind and Fire. Yes or No?');

var answerFour = inputFour.toUpperCase();

console.log(answerFour);

if (answerFour === 'YES' || answerFour === 'Y') {
  alert('Hey, September is a fantastic song.');
} else if (answerFour === 'NO' || answerFour === 'N') {
  alert('Hate to break it to you, but this one\'s true.');
} else {
  alert('Sorry, I didn\'t get that. Let\'s try the next question.')
};

// question 5
var inputFive = prompt('Rachael has 5 little brothers. Yes or no?');

var answerFive = inputFive.toUpperCase();

console.log(answerFive);

if (answerFive === 'YES' || answerFive === 'Y') {
  alert('Sorry, she\'s only got one. His name\'s Phil, and he was more than enough brother growing up.');
} else if (answerFive === 'NO' || answerFive === 'N'){
  alert('That\'s right, she only had one brother, Phil, and that was enough for her.');
} else {
  alert('Yeah, I don\'t think that makes sense.');
};
*/

//question 6

/*This idea borrowed from Stack Overflow

var i = 0;
while (i < 5){
  var answerSix = parseInt(prompt('How old is Rachael?'));
    if(answerSix < 29){
      alert('Your guess is too low! Try again.');
      i++;
    } else if (answerSix > 29){
      alert('Your guess is too high! Try again.');
      i++;
    } else if (isNaN(answerSix) === true){
      alert('That\'s not even a number. Try again.');
      i++;
    } else if (answerSix === 29){
      alert('That\'s right!');
      i=5;
    };
};


console.log('Yo what\'s up');

/*As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

/* Question 7 */

var favoriteThings = ['puppies', 'monster movies', 'whiskers on kittens', 'crossword puzzles', 'crafts', 'indiana jones'];

var guesses = 0;

while (guesses < 6){
  var inputSeven = prompt('What are a few of Rachael\'s favorite things?');
  var answerSeven = inputSeven.toLowerCase();
  for(var j = 0; j < favoriteThings.length; j++){
    var arrayElement = favoriteThings[j];
    console.log('This is my array element' , arrayElement);
    console.log('This is my user input' , answerSeven);
    if(answerSeven === arrayElement){
      console.log('Right Comparison');
      alert('That IS one of my favorite things!')
      guesses = 7;
      break;
    } else {
      console.log('Wrong Comparison');
      alert('Sorry, that thing you said is not one of my favorites. Try again.');
      break;
    };
  };
  guesses++;
};
alert('Curious about the rest of my favorite things? Here they are: puppies, monster movies, whiskers on kittens, crossword puzzles, crafts, and Indiana Jones.');

/*
if(rightComparison){
  alert('That IS one of my favorite things! Try to guess another.');
} else if(wrongComparison){
  alert('Sorry, that thing you said is lame. Try to guess more cool things.');
};

/*
As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

User Stories (Stretch goals... not required!)

As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions in my guessing game into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question.
Make the number-guessing question use a random number as its correct answer.
Move the guessing game to a separate HTML file, list the questions on the page, and then have the answers fill in on the page after the user provides the answers.

Technical Requirements

Expect that you will probably need both 'for' and 'while' structures for your sixth and seventh questions. But not necessarily.
Use separate Git branches for the coding of the sixth and seventh questions, plus the coding of the tally of correct answers. Upon completion of the work in each branch, make a Pull Request to the master branch and merge the branch without deleting the branch.
*/
