let artSel = document.querySelector("#container")
function append(array) {  
    let frag = document.createDocumentFragment()
    for (i=0; i < array.length; i++) {
        frag.appendChild(array[i])
    }
    artSel.appendChild(frag)
}
append(testArray)
append(arrayTest)