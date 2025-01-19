let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let nextone = document.querySelector(".nextone");
let nexttwo = document.querySelector(".nexttwo");
let compone = document.querySelector(".compone");
let comptwo = document.querySelector(".comptwo");
let yourchoice = document.querySelector(".yourchoice");
let compchoice = document.querySelector(".compchoice");
let msg = document.querySelector(".msg");
let msgbtn = document.querySelector(".msgbtn");
let main = document.querySelector(".screen");
let next = document.querySelector(".next");
let final = document.querySelector(".final");

let rand1 = Math.floor(Math.random() * 3);
let rand2 = Math.floor(Math.random() * 3);
let rand3 = Math.floor(Math.random() * 2);

let count = -1;
let clkcnt = 0;

let nxtcnt = 0;

next.classList.add("hide2");
final.classList.add("hide3");

stone.onclick = () =>{
    count = 0;
    choice();
}
paper.onclick = () =>{
    count = 1;
    choice(); 
}
scissors.onclick = () =>{
    count = 2;
    choice();
}

const choice = () =>{
    clkcnt++;
    if(clkcnt === 1 && count === 0){
        one.classList.add("onestone");
        nxtcnt = 1;
        nextchoice();
        compchoice1();
    }
    else if(clkcnt === 1 && count === 1){
        one.classList.add("onepaper");
        nxtcnt = 2;
        nextchoice();
        compchoice1();
    }
    else if(clkcnt === 1 && count === 2){
        one.classList.add("onescissors");
        nxtcnt = 3;
        nextchoice();
        compchoice1();
    }
    else if(clkcnt === 2 && count === 0){
        two.classList.add("twostone");
        nxtcnt = 4;
        main.classList.add("hide1");
        next.classList.remove("hide2");
        nextchoice();
        compchoice2();
    }
    else if(clkcnt === 2 && count === 1){
        two.classList.add("twopaper");
        nxtcnt = 5;
        main.classList.add("hide1");
        next.classList.remove("hide2");
        nextchoice();
        compchoice2();
    }
    else if(clkcnt === 2 && count === 2){
        two.classList.add("twoscissors");
        nxtcnt = 6;
        main.classList.add("hide1");
        next.classList.remove("hide2");
        nextchoice();
        compchoice2();
    }
}
let var1 = 0;
let var2 = 0;
const nextchoice = () =>{
    if(nxtcnt === 1){
        nextone.classList.add("nextones");
        var1 = 1;
    }
    if(nxtcnt === 2){
        nextone.classList.add("nextonep");
        var1 = 2;
    }
    if(nxtcnt === 3){
        nextone.classList.add("nextonesc");
        var1 = 3;
    }
    if(nxtcnt === 4){
        nexttwo.classList.add("nexttwos");
        var2 = 1;
    }
    if(nxtcnt === 5){
        nexttwo.classList.add("nexttwop");
        var2 = 2;
    }
    if(nxtcnt === 6){
        nexttwo.classList.add("nexttwosc");
        var2 = 3;
    }
}

let check2 = 0;

const compchoice1 = () =>{
    if(rand1 === 0){
        compone.classList.add("nextones");
        if(rand3 === 0){
            check2 = 1;
            compchoice.classList.add("nextones1");
        }
    }
    if(rand1 === 1){
        compone.classList.add("nextonep");
        if(rand3 === 0){
            check2 = 2;
            compchoice.classList.add("nextonep1");
        }
    }
    if(rand1 === 2){
        compone.classList.add("nextonesc");
        if(rand3 === 0){
            check2 = 3;
            compchoice.classList.add("nextonesc1");
        }
    }
}
const compchoice2 = () =>{
    if(rand2 === 0){
        comptwo.classList.add("nexttwos");
        if(rand3 === 1){
            check2 = 4;
            compchoice.classList.add("nexttwos1");
        }
    }
    if(rand2 === 1){
        comptwo.classList.add("nexttwop");
        if(rand3 === 1){
            check2 = 5;
            compchoice.classList.add("nexttwop1");
        }
    }
    if(rand2 === 2){
        comptwo.classList.add("nexttwosc");
        if(rand3 === 1){
            check2 = 6;
            compchoice.classList.add("nexttwosc1");
        }
    }
}

let check1 = 0;

nextone.onclick = () =>{
    if(var1 === 1){
        check1 = 1;
        yourchoice.classList.add("nextones1");
        final.classList.remove("hide3");
        next.classList.add("hide2");
        checkwinner();
    }
    if(var1 === 2){
        check1 = 2;
        yourchoice.classList.add("nextonep1");
        final.classList.remove("hide3");
        next.classList.add("hide2");
        checkwinner();
    }
    if(var1 === 3){
        check1 = 3;
        yourchoice.classList.add("nextonesc1");
        final.classList.remove("hide3");
        next.classList.add("hide2");
        checkwinner();
    }
}
nexttwo.onclick = () =>{
    if(var2 === 1){
        check1 = 4;
        yourchoice.classList.add("nexttwos1");
        final.classList.remove("hide3");
        next.classList.add("hide2");
        checkwinner();
    }
    if(var2 === 2){
        check1 = 5;
        yourchoice.classList.add("nexttwop1");
        final.classList.remove("hide3");
        next.classList.add("hide2");
        checkwinner();
    }
    if(var2 === 3){
        check1 = 6;
        yourchoice.classList.add("nexttwosc1");
        final.classList.remove("hide3");
        next.classList.add("hide2");
        checkwinner();
    }
}
const checkwinner = () =>{
    if((check1 === 1 || check1 === 4)&& (check2 === 1 || check2 === 4)){
        msg.innerText = "Its A Draw, Try Again";
    }
    else if((check1 === 2 || check1 === 5)&& (check2 === 2 || check2 === 5)){
        msg.innerText = "Its A Draw, Try Again";
    }
    else if((check1 === 3 || check1 === 6)&& (check2 === 3 || check2 === 6)){
        msg.innerText = "Its A Draw, Try Again";
    }
    else if((check1 === 1 || check1 === 4) && (check2 === 3 || check2 === 6)){
        msg.innerText = "Congratulations !! You Won";
    }
    else if((check1 === 2 || check1 === 5) && (check2 === 1 || check2 === 4)){
        msg.innerText = "Congratulations !! You Won";
    }
    else if((check1 === 3 || check1 === 6) && (check2 === 2 || check2 === 5)){
        msg.innerText = "Congratulations !! You Won";
    }
    else{
        msg.innerText = "OOPs! You Lost";
    }
}
msgbtn.onclick = () =>{
    window.location.reload();
}