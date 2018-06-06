let list = document.createElement("ul")
let listItem = document.createElement("li")
let listText1 = document.createTextNode("This is a test")
let testHeading = document.createElement("h2")
let headingText = document.createTextNode("TESSSSSSST")
listItem.appendChild(listText1)
list.appendChild(listItem)
testHeading.appendChild(headingText)
let testArray = [list, testHeading]