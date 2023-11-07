
const Question1 = document.getElementsByClassName('question');
const Answer1 = document.getElementsByClassName('answer');
const Q1=document.getElementById('question1');
const A1=document.getElementById('answer1');
const Arr1=document.getElementById('arrow1');
console.log(Q1);
console.log('sd');
console.log(Q1.style.visibility);
console.log(Q1.style.display);
const computedStyle = window.getComputedStyle(A1);
console.log(computedStyle.display);

Q1.addEventListener("click",function(){
  console.log("dsfgd")
  if (Q1.classList.contains("question")){
    Q1.classList.add("selectedQuestion");
    A1.classList.add("selectedAnswer");/*not working, why???? :(*/
    Arr1.classList.add("selectedArrow");
    A1.style.visibility="visible";/*working*/
    console.log("sdfd");
  }else
  {Q1.classList.add("question");
  A1.classList.add("answer");
  Arr1.classList.remove("selectedArrow");
  A1.style.visible="hidden";
  console.log("BackToTheFuture")

  }
})

/*This is not working, but i do not understand it
Q1.addEventListener('click',function(){
  console.log(Q1);
  if (A1.style.visibility=='hidden'){
        A1.style.visibility='visible';
        console.log('vmi');
    }
})*/


for (let i = 0; i < Question1.length; i++) {
    Question1[i].addEventListener('click', function() {
      if (Answer1[i].style.visibility === 'hidden') {
        Answer1[i].style.visibility = 'visible';
        console.log('mas');
      }
    });
  }