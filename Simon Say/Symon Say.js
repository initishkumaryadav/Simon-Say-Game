let gameSeq = []; 
let userSeq = []; 
let started = false;  
let level = 0;  
let h3 = document.querySelector("h3");  
let btns = ["blue", "yellow", "red", "green"]; 
alert( "The number of clicks on the colors will correspond to the current level of the game.\n      Best of Luck    -Jai Logic" )

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup(); 
    }
});
document.addEventListener("click", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup(); 
    }
});

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        let clickedColor = btn.id;
        userSeq.push(clickedColor);
        btnFlash(btn);
        checkSequence(userSeq.length - 1);
    });
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500); 
}

function levelup() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`#${randColor}`);
    console.log(randColor);
    setTimeout(function() {
        btnFlash(randBtn);
    }, 500); 
}

function checkSequence(currentLevel) {
    if (userSeq[currentLevel] === gameSeq[currentLevel]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(function () {
                levelup();
            }, 1000);
        }
    } else {
        gameover();
    }
}

function gameover() {
    h3.innerText = "Game Over! Press any key to restart.";
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    alert("Try Again")
}
