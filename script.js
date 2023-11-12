const QuestionNumbers=5;

for(let i=1;i<=QuestionNumbers;i++)
{
const Q1=document.getElementById('question'+i);
const A1=document.getElementById('answer'+i);
const Arr1=document.getElementById('arrow'+i);
console.log(Q1);
Q1.addEventListener("click",function(){
 
  if (Q1.classList.contains("question")){
    Q1.classList.remove("question");
    Q1.classList.add("selectedQuestion");
    A1.classList.remove("answer");
    A1.classList.add("selectedAnswer");/*not working, why???? :(*/
    Arr1.classList.add("selectedArrow");
   /*A1.style.visibility="visible";/*working*/
   A1.style.display='block';
    console.log("kinyit");
  }else
  {Q1.classList.remove("selectedQuestion");
  Q1.classList.add("question");
  A1.classList.remove("selectedAnswer");/*not working, why???? :(*/
  A1.classList.add("answer");
  Arr1.classList.remove("selectedArrow");
  console.log("BackToTheFuture")
 /* A1.style.visibility = "hidden";*/
 A1.style.display='none';

  }
})
}
