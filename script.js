const secText = document.getElementById("sec");
const startB = document.getElementById("b1");
const stopB = document.getElementById("b2");
var sec = 0;
var isRunning = false;

startB.addEventListener("click", startTimer);

function startTimer(){
    if (isRunning == false){
        isRunning = true;
        timer();
        stopB.addEventListener("click", stopTimer);
        stopB.textContent = "Stop";
    }
};

function stopTimer(){
    if (isRunning == true){
        isRunning = false;
        stopB.textContent = "Restart";
    }
    else{
        sec = 0;
        secText.textContent = sec.toString();
    }
};

function update(){
    if (isRunning == true){
        sec += 1;
        secText.textContent = sec.toString();
        timer();
    }
};

function timer(){
    if (isRunning == true){
        setTimeout(update, 1000);
    }
};