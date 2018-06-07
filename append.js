let artSel = document.querySelector("#container") 
function append(array) {  //...takes 1 argument: an array of DOM <section> elements
    let frag = document.createDocumentFragment() //...creates a document fragment
    for (i=0; i < array.length; i++) { //...loops through the array of <section> elements and appends each one to the fragment
        frag.appendChild(array[i]) 
    }                               //...appends the fragment to the DOM
    artSel.appendChild(frag)
}
//The page then calls the append( ) function on the master arrays that each individual page produces

// append(testArray)
// append(arrayTest)
append(navArray)
append(rlArray)
append(bsArray)
append(jh_array)
append(ehArray)
const body = document.querySelector("body");
body.insertBefore(footer, document.querySelector("script"));
