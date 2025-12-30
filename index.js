let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage =JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads){
    let listItems = ""
    for (i = 0; i < leads.length; i++){
        listItems += `<li><a href="${leads[i]}" target ="_blank"> ${leads[i]} </a></li>`
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click",  function(){
    if (inputEl.value !== "") {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        render(myLeads)

        // console.log( localStorage.getItem("myLeads"))
    } else {
        alert("input a valid url")
    }
    
}) 

// function renderLead(){
//     let listItem = `
//     <li>
//         <a href="${inputEl.value}" target = "_blank"> ${inputEl.value}</a>
//     </li>`
//     ulEl.innerHTML += listItem
// }
// console.log()


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

