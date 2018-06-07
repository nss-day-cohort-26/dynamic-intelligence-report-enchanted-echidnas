// Create an h2 element with the title of the section in it
const rlExecH2 = document.createElement('h2');
rlExecH2.setAttribute('id', 'rl__h2')
rlExecH2.textContent = "Executive Summary"

// Create an empty array to hold variables that contain what will be printed to DOM
const rlArray = []

//Create variable to hold image
const rlImage = document.createElement('img')
rlImage.setAttribute('src', 'https://gakg5sv2p13fjr0q1hulkabr-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/torosian_leonardo.jpg')

// Make variables for a section
const rlCountry = 'Country of Origin'
// Make array contianing items to be made into list
const rlCountryText = ['Armenia']
// Call createSection function plugging in variables above to create an H2 and an unordered list with list items and assign it to a variable
const rlCountryFuction = createSection(rlCountry, rlCountryText)

// Same as above
const rlAliasHead = 'Known Aliases'
const rlAliasList = ['R. Alessandro Torington', 'King Rodge Toyne', 'Ruben A. Tozzi', 'Torosian Rubblood']
const rlAliasFunction = createSection(rlAliasHead, rlAliasList)

// Same as above
const rlAssocHead = 'Accomplices'
const rlAssocList = ['Manav Brock', 'Mischa Rose', 'Fern Burks']
const rlAssocFunction = createSection(rlAssocHead, rlAssocList)

// Push all variables created by function into array to be run in append.js
rlArray.push(rlExecH2, rlImage, rlCountryFuction, rlAliasFunction, rlAssocFunction)
