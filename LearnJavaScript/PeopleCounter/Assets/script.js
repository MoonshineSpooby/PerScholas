let count = 0;
let countEl = document.getElementById("count-el");
let saveCount = "";
let firstSave = true;
let saveEl = document.getElementById("save-el");
function increment() {
    count++;
    countEl.textContent = count;
}
function save() {
    if(firstSave) {
        saveEl.textContent += count;
        firstSave = false;
    }else {
        saveEl.textContent += `, ${count}`;
    }
    count = 0;
    countEl.textContent = count;
}
function reset() {
    countEl.textContent = "0";
    saveEl.textContent = "";
}