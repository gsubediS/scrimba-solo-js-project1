let scr1 = document.getElementById("liv-score")
let scr2 = document.getElementById("chel-score")
let count1 = 0
let count2 = 0

function goal1() {
    count1 += 1
    scr1.textContent = count1
}

function goal2() {
    count2 += 1
    scr2.textContent = count2
}

function resetGame() {
    count1 = 0
    count2 = 0
    scr1.textContent = count1
    scr2.textContent = count2
}
