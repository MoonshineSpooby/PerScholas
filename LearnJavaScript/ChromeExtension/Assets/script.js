const inputField = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const leadsDispEl = document.getElementById("leads-el");
let myLeads = []

saveBtn.addEventListener("click", save);
clearBtn.addEventListener("click", clear);
inputField.addEventListener("keydown", (e) => {
    if(e.key ==='Enter') save() 
});

startUp();

function save() {
    if(inputField.value){
        myLeads.push(inputField.value);        
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
        inputField.value = "";
    }
}
function renderLeads() {
    leadsDispEl.innerHTML = "";
    let leadEl;
    let lead;
    for(let i = 0; i < myLeads.length; i++){
        lead = myLeads[i];
        console.log(lead);
        leadEl = document.createElement("li");
        leadEl.innerHTML = `<a target='_blank' href='${lead}'>${lead}</a>`;
        leadsDispEl.appendChild(leadEl);
    }    
}
function startUp() {
    if(localStorage.getItem("myLeads")){
        myLeads = JSON.parse(localStorage.getItem("myLeads"))
    } else {
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    }
    renderLeads();
}
function clear() {
    myLeads = [];
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
}