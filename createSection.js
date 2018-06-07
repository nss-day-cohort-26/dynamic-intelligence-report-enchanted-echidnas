/*
This page contains the createSection(  ) function which...
1. Accepts 2 parameters: a string and an array
2. Creates a <section> element
3. Puts the string into an <h3> element 
4. Appends the h3 to the <section>
5. Appends an empty <ul> to the <section>
6. Iterates over the array and 
    ...checks if the array elements are strings or not. This functionality was added so it would work with the navbar, which had an array of <a> elements as its second argument
        ...if the contents of the array are strings, it places them into an <li>
        ...otherwise, it appends the <a> tag to the <li>
    ...appends the <li> to the <ul> 
7. Appends the entire <ul> to the <section> element
8. Returns the <section> element
*/

const createSection = (param1, param2) => {
    const section = document.createElement('section');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    h3.textContent = param1;
    section.appendChild(h3)
    for (let i=0; i<param2.length; i++) {
        let li = document.createElement('li');
        if (typeof param2[i] === "string") {
            li.textContent = param2[i];
        } else {
            li.appendChild(param2[i]);
        }
        ul.appendChild(li);
    }
    section.appendChild(ul);
    return section
}

