
      $(document).ready(function() {
      $("#op1").hide();
       $("#op2").hide();
         $("#input").hide();
        $("#op3").hide();
         $("#op4").hide();
           $("#hrr").hide();
           $("#ent").hide();
           $("#bkbtn").hide();
           $("#clrdata").hide();
           $("#submit").hide();
          var btn=document.getElementById("stbtn");
          $("#stbtn").click(function(){
             $("#carddiv").css({"height":"100%"});
            btn.remove();
            res=0;
 updateTimer(res);
           
             var pp=document.getElementById("op");
             op.remove();
             $("#op1").show();
       $("#op2").show();
        $("#op3").show();
         $("#op4").show();
           $("#hrr").show();
              mainfuc();
            
          });
    });

    var exe=0;
var penalty=0;

a=0;
 var score=0;


function mainfuc(){
     
    const questions = [
  {
    questionText: "null",
    options: ["1.Null", "2. Null", "3. Null", "4. Null"],
    answer: "3. Null",
  },{
    questionText: "In which year did the United States declare its independence?",
    options: ["1. 1776", "2. 1789", "3. 1804", "4. 1801"],
    answer: "1. 1776",
  },
  {
    questionText: "Who wrote the novel: Pride and Prejudice?",
    options: [
      "1. Jane Clark",
      "2. Emily Brontë",
      "3. Charlotte Brontë",
      "4. Jane Austen",
    ],
    answer: "4. Jane Austen ",
  },
  {
    questionText:
      "Which planet is known as the Red Planet?",
    options: ["1. Jupiter", "2. Venus", "3. Mercury", "4. Mars"],
    answer: "4. Mars",
  },
  {
    questionText:
      "Who painted the famous artwork : The Starry Night?",
    options: [
      "1. Pablo Picasso",
      "2.Vincent van Gogh",
      "3.  Claude Monet",
      "4. Salvador Dalí",
    ],
    answer: "2.Vincent van Gogh",
  },
  {
    questionText:
      "Which country is known for inventing the sport of cricket?",
    options: ["1. India", "2. Australlia", "3. England", "4. Pakistan"],
    answer: "3. England",
  },
];



 if(exe==0)
 {
    exe++;
    
 }
 else if(exe=>1 && exe<6){
    
  
    
    if(exe<6)
{
   
  
 document.getElementById("ques").textContent=questions[exe].questionText;
 
  document.getElementById("op1").textContent = questions[exe].options[0];

    document.getElementById("op2").textContent = questions[exe].options[1];

      document.getElementById("op3").textContent = questions[exe].options[2];

        document.getElementById("op4").textContent = questions[exe].options[3];
}else{
    var ques=document.getElementById("ques");
   ques.innerHTML="<br><br><br><b><center>Wait for timeout</center></b>";
     $("#op1").hide();
     $("#op2").hide();
      $("#op3").hide();
       $("#op4").hide();
        $("#h5").hide();

 }

exe++;
 }
 }
   var xyz=1;
 function ck(id)
 {
      a++;
    //array
const ops = [
  {

    options: ["1.Null", "2. Null", "3. Null", "4. Null"],
    answer: "3. Null",
  }, {

    options: ["1.Null", "2. Null", "3. Null", "4. Null"],
    answer: "3. Null",
  },{
   
    options: ["1. 1776", "2. 1789", "3. 1804", "4. 1801"],
    answer: "1. 1776",
  },
  {
 
    options: [
      "1. Jane Clark",
      "2. Emily Brontë",
      "3. Charlotte Brontë",
      "4. Jane Austen",
    ],
    answer: "4. Jane Austen",
  },
  {
  
    options: ["1. Jupiter", "2. Venus", "3. Mercury", "4. Mars"],
    answer: "4. Mars",
  },
  {
   
    options: [
      "1. Pablo Picasso",
      "2.Vincent van Gogh",
      "3.  Claude Monet",
      "4. Salvador Dalí",
    ],
    answer: "2.Vincent van Gogh",
  },
  {

    options: ["1. India", "2. Australlia", "3. England", "4. Pakistan"],
    answer: "3. England",
  },
];

    //end of array
    var getid=id;
 
    var lg=ops.length;
  
    var h5=document.getElementById("h5");
if(xyz<lg)
{
    xyz++;
   
  if(getid==1)
  {

      var ar=ops[a].options[0];
     
      var ans=ops[a].answer;
    if(ans==ar)
    {
        score=score+10;
        penalty=0;
        h5.style.color="Green";
h5.innerHTML="Correct!";

    }else{
        penalty=5;
        h5.style.color="Red";
        h5.innerHTML="InCorrect!";
     
        
    }

 //a=a+1;
  

  }else if(getid==2)
  {

      var ar=ops[a].options[1];
            var ans=ops[a].answer;
    if(ans==ar)
    {
        score=score+10;
penalty=0;
h5.style.color="Green";
h5.innerHTML="Correct!";
    }else{
        penalty=5;
        h5.style.color="Red";
      h5.innerHTML="InCorrect!";
     
    }

  }
  else if(getid==3)
  {
 
      var ar=ops[a].options[2];
      var ans=ops[a].answer;
    if(ans==ar)
    {
        score=score+10;
        penalty=0;
        h5.style.color="Green";
h5.innerHTML="Correct!";
    }else{
        penalty=5;
        h5.style.color="Red";
        h5.innerHTML="InCorrect!";
       
    }
 
  }
  else if(getid==4)
  {

      var ar=ops[a].options[3];
            var ans=ops[a].answer;
    if(ans==ar)
    {
        score=score+10;
        penalty=0;
        h5.style.color="Green";
h5.innerHTML="Correct!";
    }else{
        penalty=5;
        h5.style.color="Red";
        h5.innerHTML="Incorrect!";
      
    }
   

  }
  }else{
    
   
  }

  $("#carddiv").css({"height":"100%"});
 



mainfuc();

return penalty;


 }



 // Set the countdown duration (in seconds)
var countdownDuration = 30;

 res=ck(penalty);
 if(isNaN(res))
 {
    res=0;
 }else{
console.log("res"+res);
 }



     if(res==10){
             console.log("hey");  
 updateTimer(res);
             
                
            }

// Function to update the timer display
function updateTimer(res) {
  
var tt=document.getElementById("time");
 var quess=document.getElementById("ques"); 
 var tit=document.getElementById("tit");  
 
 if(countdownDuration>=0)
 {

   tt.innerHTML="00:"+countdownDuration;
 }else{
    
   tt.innerHTML="00:00";
 }

countdownDuration--;
 if(countdownDuration<0)
 {
    console.log("finished");
     $("#op1").hide();
     $("#op2").hide();
      $("#op3").hide();
       $("#op4").hide();
        $("#h5").hide();
        ent.innerHTML="Enter Initials:";
         $("#ent").show();
        $("#input").show();
         $("#submit").show();
        tit.innerHTML="<b>All done!</b>";
     ques.innerHTML="<br>Your final score is <b>"+score+"</b>.";
     


 }else{
    setTimeout(updateTimer,1000);
   
   
 }

 if(penalty==5)
 {
     
countdownDuration -= penalty;
penalty=0;
 }else{
    penalty=0;
 }
  //
}


 function alldone()
 {
    var unm=document.getElementById("input").value;
    localStorage.setItem('uname', unm);
localStorage.setItem('score', score);



location.reload();






 }

 function backbtn()
 {
    location.reload();
 }
 function clrdata()
 {
   localStorage.removeItem('uname');
   localStorage.removeItem('score');
   location.reload();
 }

 function highsc()
 {var ct=1;
    var sw=document.getElementById("leaderboard");
    var tit=document.getElementById("tit");
    $("#ent").hide();
    $("#ques").hide();
    $("#op").hide();
    $("#stbtn").hide();
     $("#bkbtn").show();
     $("#clrdata").show();
    var lb=document.getElementById("ent");
    tit.innerHTML="<b>Highscore</b>";
    var lgtt=localStorage.length;
    console.log(lgtt);
    $("#op").show();
    
   var container = document.getElementById("op");


  
  var value = ct+"."+localStorage.getItem("uname");
var value2 = "-"+localStorage.getItem("score");

  container.innerHTML = value+value2;



 }



