//name ruben torosian

// Create an h2 element with the title of the section in it

let bsH2 = document.createElement("h2");
let bsH2Text = document.createTextNode("Rap Sheet");
bsH2.appendChild(bsH2Text)
// wanted list
const bsH3Crimes = "Wanted For:"
const bsListCrimes = ["1000 counts of murder","Stealing hard candy from the elderly",
"Cutting the tags off mattresses"];
const bsWantedList = createSection(bsH3Crimes, bsListCrimes);
//convictions
const bsh3Convic = "Convicted Of:"
const bsListConvic = ["Grand arsen", "Running over squirells", "Eating Kale"];
const bsConvictions = createSection(bsh3Convic, bsListConvic);
//prisons
const bsH3Prison = "Incarcerated In:"
const bsListPrison = ["Alcatraz: 1972-1981", "Guantonamo Bay: 1982-1994",];
const bsPrisons = createSection(bsH3Prison, bsListPrison);
//witnesses
const bsH3witness = "Witneses:"
const bsListWitness = ["Old lady Jenkins","Mr. Abernathy","Countless Elves", "Woodland creatures"]
const bsWitnesses = createSection(bsH3witness, bsListWitness)
//victims
const bsH3Vic = "Victims:"
const bsListVic = ["Santa Claus","Mr.Rogers","Bill Cosby's Pet Squirrel"];
const bsVictims = createSection(bsH3Vic, bsListVic)

 







//For append
const bsArray = [bsH2, bsWantedList, bsConvictions, bsPrisons, bsWitnesses, bsVictims];