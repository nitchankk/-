//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500036 Name: Nitchan Konkit
let items = [];
 
function init() {

    const iteminp = document.createElement("input")
    iteminp.id = "iteminput"
    iteminp.placeholder = 'Enter item'
    document.body.appendChild(iteminp)
  
    const addBtn = document.createElement('button')
    addBtn.id = "addButton"
    addBtn.textContent = 'Add'
    document.body.appendChild(addBtn)

    const clearAllBtn = document.createElement('button')
    clearAllBtn.id = "clearAllBtn"
    clearAllBtn.textContent = 'Clear All'
    document.body.appendChild(clearAllBtn)

    const itemList = document.createElement('ul')
    itemList.id = "itemList"
    document.body.appendChild(itemList)
    
    addButton.addEventListener('click', addItem)
    clearAllBtn.addEventListener('click', clearAll)
}
function addItem() {
    const input = document.getElementById('iteminput')
    const value = input.value.trim()
    if (value) { 
        items.push(value)
        displayItems()
        input.value = ''
    }
}
function clearAll() {
    items = []
    displayItems()
}
function displayItems() {
    const itemList = document.getElementById('itemList')
    itemList.innerHTML = ''
    items.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        itemList.appendChild(li)
    })
}
init();




