(function() {
    function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.chooseQuestion = function() {
    console.log(this.question);
    
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + 1 + ': ' + this.answers[i]);
    }
} 

 Question.prototype.checkAnswer = function(ans, check) {

            if (ans === this.correct) {
                var sc;
                sc = keepScore(true);
                console.log("------------------------------------------");
                console.log("Correct");
               
            } else {
                sc = keepScore(false);
                console.log("------------------------------------------");
                console.log("Wrong answer");
               
            }
     this.displayScore(sc);
    }
 
 Question.prototype.displayScore = function(score) {
       console.log("Your current score is: " + score ); 
       console.log("------------------------------------------");
 }
 
const q1 = new Question('What is the best club in the world?', ['RTS', 'Barca', 'Real'], 1);
const q2 = new Question('Who is the  fastest sprinter?', ['Mie', 'Bolt', 'Sam'], 2);
const q3 = new Question('Which is the second biggest country in the world?', ['Brazil', 'USA', 'Canada'], 3);

var questions = [q1, q2, q3];

    
// Clousure function
function score() {
    var num = 0;
    return function(correct) {
        if (correct) {
            num ++;
        }
        return num;
    }
}
    
var keepScore = score();
    

    
    function nextQuestion() {
        
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].chooseQuestion();

        var userInput = parseInt(prompt("Please choose the correct answer"));

        if (userInput !== 0) {
            questions[n].checkAnswer(userInput), keepScore;
           nextQuestion(); 
        }
       
       
    }
    
     nextQuestion();
    

})();
