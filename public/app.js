let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#hand-rock");
const paper_div = document.querySelector("#hand-paper");
const scissors_div = document.querySelector("#hand-scissors");


function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3)
  return choices[randomNumber];
}


function convertLetterToWord(letter){
  if (letter == 'r') return "Rock";
  if (letter == 'p') return "Paper";
  if (letter == 's') return "Scissors";
}

function userWin(userChoice, computerChoice){
  //increament userscore 
  userScore++;
  userScore_span.innerHTML = userScore;
  const userWord = convertLetterToWord(userChoice);
  compScore_span.innerHTML = compScore;
  const compWord = convertLetterToWord(computerChoice);
  result_p.innerHTML = `${userWord} beats ${compWord}. You win! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ `;
}


function userLose(userChoice, computerChoice){
  compScore++;
  userScore_span.innerHTML = userScore;
  const userWord = convertLetterToWord(userChoice);
  compScore_span.innerHTML = compScore;
  const compWord = convertLetterToWord(computerChoice);
  result_p.innerHTML = `${userWord} loses to ${compWord}. You lose (ᴗ_ ᴗ。)`;

}

function draw(userChoice){
  result_p.innerHTML = `Match drawn @(｡･o･)@`;

}


function game(userChoice){
 const computerChoice = getComputerChoice(); 
 switch(userChoice + computerChoice) {
   case "pr":
   case "sp":
   case "rs":
     userWin(userChoice, computerChoice);
     break;
   case "rp":
   case "ps":
   case "sr":
     userLose(userChoice, computerChoice);
     break;
   case "rr":
   case "pr":
   case "ss":
     draw(userChoice); 
     break;
 }
}

main();
function main(){
 rock_div.addEventListener('click', function(){
   game('r')
   console.log('r')
 }) 
 paper_div.addEventListener('click', function(){
  game('p')
  console.log('p')
 })
 scissors_div.addEventListener('click', function(){
  game('s')
  console.log('s')
 })
}