var readlineSync = require("readline-sync");
var name = readlineSync.question("what is your name? ");
console.log("welcome "+name + " to how well do you know kalyan");
console.log("__________________________")
var score = 0;
function quiz(question,answer){
  var userA = readlineSync.question(question);
  if(userA==answer){
    console.log("correct");
    score++;
  }
  else{
    console.log("wrong");
  }
  console.log("your score is: "+score);
  console.log("---------------------------")
}
var Q1 = {
  q:"where do i live? ",
  a:"puttaparthi"
}
var Q2 = {
  q:"what is my favorite color",
  a:"black"
  
}
var Q3 = {
  q:"who is my favorite cricketer",
  a:"dhoni"
}
var Q4 = {
  q:"what is my favorite film",
  a:"ms dhoni"
}
var Q5={
  q:`what is my nickname 
    a: sijju
    b: sai
    c: kalyan \n`,
  a:"sijju"
}
var list = [Q1,Q2,Q3,Q4,Q5];
for(i = 0;i<list.length;i++){
  quiz(list[i].q,list[i].a)
}

console.log("thank you for playing")
console.log("your final score is " +score)