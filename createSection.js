//function takes two paramaters and makes text of first parameter an h3
//second parameter is an array that is turned into an unordered list

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

