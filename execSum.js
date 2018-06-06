// Create an h2 element with the title of the section in it
const rlExecH2 = document.createElement('h2');
rlExecH2.setAttribute('id', 'rl__h2')
rlExecH2.textContent = "Executive Summary"

// Create an array with the h2 element as it's first item
const rlArray = []

const rlImage = document.createElement('img')
rlImage.setAttribute('src', 'https://gakg5sv2p13fjr0q1hulkabr-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/torosian_leonardo.jpg')

// Make variables for a section
const rlCountry = 'Country of Origin'
const rlCountryText = ['Armenia']
const rlCountryFuction = createSection(rlCountry, rlCountryText)
const rlCountrySection = [rlCountryFuction]

const rlAliasHead = 'Known Aliases'
const rlAliasList = ['R. Alessandro Torington', 'King Rodge Toyne', 'Ruben A. Tozzi', 'Torosian Rubblood']
const rlAliasFunction = createSection(rlAliasHead, rlAliasList)
const rlAliasSection = [rlAliasFunction]
// Pass those variables to createSection: const sectionName = createSection(var1, var2)
// Push that section to the array: array.push(sectionName)
// Rinse and repeat

const rlAssocHead = 'Accomplices'
const rlAssocList = ['Manav Brock', 'Mischa Rose', 'Fern Burks']
const rlAssocFunction = createSection(rlAssocHead, rlAssocList)
const rlAssocSection = [rlAssocFunction]

rlArray.push(rlExecH2, rlImage, rlCountryFuction, rlAliasFunction, rlAssocFunction)



// const createSection = (param1, param2) => {
//     const section = document.createElement('section');
//     const h3 = document.createElement('h3');
//     const ul = document.createElement('ul');
//     h3.textContent = param1;
//     section.appendChild(h3)
//     for (let i=0; i<param2.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = param2[i];
//         ul.appendChild(li);
//     }
//     section.appendChild(ul);
//     return section
// }

