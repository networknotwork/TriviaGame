var quiz=["0", "0", "0", "0"];
var correct=0;
var wrong=0;
var incomplete=0;
var timer=60;
var intervalId;


$(document).ready(function(){

function start(){
    $("#title").hide();
    $("#quiz").show();
    timer=60;
    $("#timer").text("Time left: " + timer);
    run();
}    
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
function decrement(){
    timer--;
    $("#timer").text("Time left: " + timer);
    if(timer===0){
        check();
        end();
    }
}
function end(){
    clearInterval(intervalId);
    $("#quiz").hide();
    $("#result").show();
}

function reset(){
    quiz=["0", "0", "0", "0"];
    correct=0;
    wrong=0;
    incomplete=0;
    //If I could clear radio input without refreshing the page, that would be great.
    $("#result").hide();
    $("#quiz").hide();
    $("#title").show();
}

function check(){
    quiz[0]=$("input[name=q1]:checked").val();
    quiz[1]=$("input[name=q2]:checked").val();
    quiz[2]=$("input[name=q3]:checked").val();
    quiz[3]=$("input[name=q4]:checked").val();
    for(var a=0; a<quiz.length; a++){
        if(quiz[a]=="correct"){
            correct++;
        }else if(quiz[a]=="wrong"){
            wrong++
        }else{
            incomplete++}
    }
    $("#correct").text("Correct: "+correct);
    $("#wrong").text("Incorrect: "+wrong);
    $("#incomplete").text("Unanswered: "+incomplete);
    }

$("#start").click(function(){
    start();
})

$("#submit").click(function(){
    clearInterval(intervalId);
    check();
    end();
})

$("#reset").click(function(){
    reset();
})


reset()
//NOTHING BELOW HERE
})