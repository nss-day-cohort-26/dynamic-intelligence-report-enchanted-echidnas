
//...defines a string variable for each section heading and an array of strings for each unordered list
let bsH2 = document.createElement("h2");
let bsH2Text = document.createTextNode("Rap Sheet");
bsH2.id = "bs__h2";
bsH2.appendChild(bsH2Text)

// wanted list

//...defines a string variable for each section heading and an array of strings for each unordered list
const bsH3Crimes = "Wanted For:"
const bsListCrimes = ["1000 counts of murder","Stealing hard candy from the elderly",
"Cutting the tags off mattresses"];
//...runs createSection( header, list-items[ ] ) and stores it in a variable
const bsWantedList = createSection(bsH3Crimes, bsListCrimes);

//convictions

//...defines a string variable for each section heading and an array of strings for each unordered list
const bsh3Convic = "Convicted Of:"
const bsListConvic = ["Grand arson", "Running over squirrels", "Eating kale"];
//...runs createSection( header, list-items[ ] ) and stores it in a variable
const bsConvictions = createSection(bsh3Convic, bsListConvic);

//prisons

//...defines a string variable for each section heading and an array of strings for each unordered list
const bsH3Prison = "Incarcerated In:"
const bsListPrison = ["Alcatraz: 1972-1981", "Guantanamo Bay: 1982-1994",];
//...runs createSection( header, list-items[ ] ) and stores it in a variable
const bsPrisons = createSection(bsH3Prison, bsListPrison);

//witnesses

//...defines a string variable for each section heading and an array of strings for each unordered list
const bsH3witness = "Witnesses:"
const bsListWitness = ["Old Lady Jenkins","Mr. Abernathy","Countless elves", "Woodland creatures"]
//...runs createSection( header, list-items[ ] ) and stores it in a variable
const bsWitnesses = createSection(bsH3witness, bsListWitness)

//victims

//...defines a string variable for each section heading and an array of strings for each unordered list
const bsH3Vic = "Victims:"
//...runs createSection( header, list-items[ ] ) and stores it in a variable
const bsListVic = ["Santa Claus","Mr. Rogers","Bill Cosby's pet squirrel"];
const bsVictims = createSection(bsH3Vic, bsListVic)

 //...pushes that variable into a master array that represents the entire segment
const bsArray = [bsH2, bsWantedList, bsConvictions, bsPrisons, bsWitnesses, bsVictims];