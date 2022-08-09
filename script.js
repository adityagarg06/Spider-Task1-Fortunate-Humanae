
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const area = document.getElementById("area")
const sb1 = document.getElementById("score-box1")
const sb2 = document.getElementById("score-box2")
const btn3 = document.getElementById("btn3")

let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
btn1.addEventListener('click', generate1);
function generate1() {
    const a = Math.floor(Math.random() * (5)) + 1;
    area.value = a;
    btn1.style.display = "none"
    btn2.style.display = "inline"
    btn3.style.display = "none"

    const first = document.getElementById("first");
    if (a == 1 && count == 0) {
        first.innerHTML = `<img src="stk2.png"  class="image">`
        count++;
    }
    else if (a == 1 && count == 1) {
        first.innerHTML = `<img src="stk3.png"  class="image">`
        count++;
    }
    else if (a == 1 && count == 2) {
        first.innerHTML = `<img src="stk4.png" class="image">`
        count++;
    }
    else if (a == 1 && count == 3) {
        first.innerHTML = `<img src="stk.png" class="image">`
        count++;
    }

    const second = document.getElementById("second");
    if (a == 2 && count1 == 0) {
        second.innerHTML = `<img src="stk2.png" class="image">`
        count1++;
    }
    else if (a == 2 && count1 == 1) {
        second.innerHTML = `<img src="stk3.png" class="image">`
        count1++;
    }
    else if (a == 2 && count1 == 2) {
        second.innerHTML = `<img src="stk4.png" class="image">`
        count1++;
    }
    else if (a == 2 && count1 == 3) {
        second.innerHTML = `<img src="stk.png" class="image">`
        count1++;
    }

    const third = document.getElementById("third");
    if (a == 3 && count2 == 0) {
        third.innerHTML = `<img src="stk2.png" class="image">`
        count2++;
    }
    else if (a == 3 && count2 == 1) {
        third.innerHTML = `<img src="stk3.png" class="image">`
        count2++;
    }
    else if (a == 3 && count2 == 2) {
        third.innerHTML = `<img src="stk4.png" class="image">`
        count2++;
    }
    else if (a == 3 && count2 == 3) {
        third.innerHTML = `<img src="stk.png" class="image">`
        count2++;
    }

    const forth = document.getElementById("forth");
    if (a == 4 && count3 == 0) {
        forth.innerHTML = `<img src="stk2.png" class="image">`
        count3++;
    }
    else if (a == 4 && count3 == 1) {
        forth.innerHTML = `<img src="stk3.png" class="image">`
        count3++;
    }
    else if (a == 4 && count3 == 2) {
        forth.innerHTML = `<img src="stk4.png" class="image">`
        count3++;
    }
    else if (a == 4 && count3 == 3) {
        forth.innerHTML = `<img src="stk.png" class="image">`
        count3++;
    }

    const five = document.getElementById("five");
    if (a == 5 && count4 == 0) {
        five.innerHTML = `<img src="stk2.png" class="image">`
        count4++;
    }
    else if (a == 5 && count4 == 1) {
        five.innerHTML = `<img src="stk3.png" class="image">`
        count4++;
    }
    else if (a == 5 && count4 == 2) {
        five.innerHTML = `<img class="image"src="stk4.png">`
        count4++;
    }
    else if (a == 5 && count4 == 3) {
        five.innerHTML = `<img class="image" src="stk.png">`
        count4++;
    }

    gameOver();
}

let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
btn2.addEventListener('click', generate2);
function generate2() {
    const a = Math.floor(Math.random() * (5)) + 1;
    area.value = a;
    btn2.style.display = "none"
    btn1.style.display = "inline"
    btn3.style.display = "none"

    const first2 = document.getElementById("first2");
    if (a == 1 && count5 == 0) {
        first2.innerHTML = `<img src="stk2.png" class="image">`
        count5++;
    }
    else if (a == 1 && count5 == 1) {
        first2.innerHTML = `<img src="stk3.png"  class="image">`
        count5++;
    }
    else if (a == 1 && count5 == 2) {
        first2.innerHTML = `<img src="stk4.png" class="image">`
        count5++;
    }
    else if (a == 1 && count5 == 3) {
        first2.innerHTML = `<img src="stk.png" class="image">`
        count5++;
    }

    const second2 = document.getElementById("second2");
    if (a == 2 && count6 == 0) {
        second2.innerHTML = `<img src="stk2.png" class="image">`
        count6++;
    }
    else if (a == 2 && count6 == 1) {
        second2.innerHTML = `<img src="stk3.png" class="image">`
        count6++;
    }
    else if (a == 2 && count6 == 2) {
        second2.innerHTML = `<img src="stk4.png" class="image">`
        count6++;
    }
    else if (a == 2 && count6 == 3) {
        second2.innerHTML = `<img src="stk.png" class="image">`
        count6++;
    }

    const third2 = document.getElementById("third2");
    if (a == 3 && count7 == 0) {
        third2.innerHTML = `<img src="stk2.png" class="image">`
        count7++;
    }
    else if (a == 3 && count7 == 1) {
        third2.innerHTML = `<img src="stk3.png" class="image">`
        count7++;
    }
    else if (a == 3 && count7 == 2) {
        third2.innerHTML = `<img src="stk4.png" class="image">`
        count7++;
    }
    else if (a == 3 && count7 == 3) {
        third2.innerHTML = `<img src="stk.png" class="image">`
        count7++;
    }

    const forth2 = document.getElementById("forth2");
    if (a == 4 && count8 == 0) {
        forth2.innerHTML = `<img src="stk2.png" class="image">`
        count8++;
    }
    else if (a == 4 && count8 == 1) {
        forth2.innerHTML = `<img src="stk3.png" class="image">`
        count8++;
    }
    else if (a == 4 && count8 == 2) {
        forth2.innerHTML = `<img src="stk4.png" class="image">`
        count8++;
    }
    else if (a == 4 && count8 == 3) {
        forth2.innerHTML = `<img src="stk.png" class="image">`
        count8++;
    }

    const five2 = document.getElementById("five2");
    if (a == 5 && count9 == 0) {
        five2.innerHTML = `<img src="stk2.png" class="image">`
        count9++;
    }
    else if (a == 5 && count9 == 1) {
        five2.innerHTML = `<img src="stk3.png" class="image">`
        count9++;
    }
    else if (a == 5 && count9 == 2) {
        five2.innerHTML = `<img src="stk4.png" class="image">`
        count9++;
    }
    else if (a == 5 && count9 == 3) {
        five2.innerHTML = `<img src="stk.png" class="image">`
        count9++;
    }
    gameOver();
}

btn3.addEventListener('click',()=>{
    area.value = ""
    first.innerHTML = ""
    second.innerHTML = ""
    third.innerHTML = ""
    forth.innerHTML = ""
    five.innerHTML = ""
    first2.innerHTML = ""
    second2.innerHTML = ""
    third2.innerHTML = ""
    forth2.innerHTML = ""
    five2.innerHTML = ""

    count = 0;
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
    count6 = 0;
    count7 = 0;
    count8 = 0;
    count9 = 0;

    btn1.style.display = "block"
    btn2.style.display = "block"
    btn3.style.display = "none"
  

})


let score1 = 0;
let score2 = 0;
function gameOver() {
    if (count == 4 && count1 == 4 && count2 == 4 && count3 == 4 && count4 == 4) {
        btn1.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "block"
        area.value = "Player 1 Wins"
        score1++;
    }
    else if (count5 == 4 && count6 == 4 && count7 == 4 && count8 == 4 && count9 == 4) {
        btn1.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "block"
        area.value = "Player 2 Wins"
        score2++;
    }

    let text1 = score1.toString();
    let text2 = score2.toString();
    localStorage.setItem('Player-1', text1);
    localStorage.setItem('Player-2', text2);

    displayScore();
}

function displayScore() {
    sb1.innerHTML = `${score1}`
    sb2.innerHTML = `${score2}`
}









