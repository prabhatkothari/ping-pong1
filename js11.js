let btn1 = document.querySelector("#t1");
let btn2 = document.querySelector("#t2");
let reset = document.querySelector("#reset");
let span1 = document.querySelector("#score1");
let span2 = document.querySelector("#score2");
let scoreUpdate1 = parseInt(span1.innerText);
let scoreUpdate2 = parseInt(span2.innerText);
let select = document.querySelector("select");

let gameOver = false;
let max1 = 5;
let max2 = 5;



select.addEventListener("change", () => {
    span1.innerText = `${0}`;
    span2.innerText = `${0}`;
    max1 = parseInt(select.value);
    max2 = parseInt(select.value);
});


btn1.addEventListener("click", () => {
    let finalScore1 = ++scoreUpdate1;
    if (finalScore1 !== (max1 + 1)) {
        span1.innerText = `${finalScore1}`;

    }
    else { max1++; }
    if (finalScore1 === max1) {
        span1.classList.add("winner");
        span2.classList.add("loser");

        btn1.disabled = true;
        btn2.disabled = true;
    }


});
btn2.addEventListener("click", () => {
    let finalScore2 = ++scoreUpdate2;
    if (finalScore2 !== (max2 + 1)) {
        span2.innerText = `${finalScore2}`;

    }
    else { max2++; }
    if (finalScore2 === max2) {
        span1.classList.add("loser");
        span2.classList.add("winner");
        btn1.disabled = true;
        btn2.disabled = true;
    }


});

reset.addEventListener("click", () => {
    span2.classList.remove("winner", "loser");
    span1.classList.remove("winner", "loser");

    btn1.disabled = false;
    btn2.disabled = false;
    span1.innerText = `${0}`;
    span2.innerText = `${0}`;
    scoreUpdate1 = parseInt(span1.innerText);
    scoreUpdate2 = parseInt(span2.innerText);

});




