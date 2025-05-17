let myLead = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const tapButton = document.getElementById("tap-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    render(myLead)
}

tapButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLead))
        render(myLead)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLead = []
    render(myLead)
})

inputButton.addEventListener("click", function () {
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLead))
    render(myLead)
})

