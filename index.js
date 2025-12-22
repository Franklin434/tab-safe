let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")



inputBtn.addEventListener("click",  function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
}) 

