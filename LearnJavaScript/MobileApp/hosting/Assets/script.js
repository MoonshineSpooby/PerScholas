import { initializeApp } from "firebase/app";
import { getDatabase, 
    ref, 
    push
 } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//"https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh3hKvDAjTOj-NKDu5V9VyXdiBuoyUvjc",
    authDomain: "chromeext-a9782.firebaseapp.com",
    databaseURL: "https://chromeext-a9782-default-rtdb.firebaseio.com",
    projectId: "chromeext-a9782",
    storageBucket: "chromeext-a9782.appspot.com",
    messagingSenderId: "90286706086",
    appId: "1:90286706086:web:ff64afb191c65056a35367"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

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
        push(referenceInDB, inputField.value);        
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

    renderLeads();
}
function clear() {
    myLeads = [];
    renderLeads();
}