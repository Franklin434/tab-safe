let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click",  function(){
    if (inputEl.value !== "") {
        myLeads.push(inputEl.value)
        renderLead()
        inputEl.value = ""
    } else {
        alert("input a valid url")
    }
    
}) 

function renderLead(){
    let listItem = `
    <li>
        <a href="${inputEl.value}" target = "_blank"> ${inputEl.value}</a>
    </li>`
    ulEl.innerHTML += listItem
}
// console.log()
// function renderLeads(){
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++){
//         listItems += `<li><a href="${myLeads[i]}" target ="_blank"> ${myLeads[i]} </a></li>`
//     }
//     ulEl.innerHTML = listItems
// }


const recepient = "josh"
const sender = "frank"
const email = `hey ${recepient}! How is it going? Cheers ${sender}`

console.log(email)