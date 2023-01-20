let saveEl = document.getElementById("previous-entries")
let countEl = document.getElementById("people-count")
let peopleCount = 0

function increment() {
    peopleCount += 1
    countEl.textContent = peopleCount
}

function save() {
    let countStr = peopleCount + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    peopleCount = 0
}
