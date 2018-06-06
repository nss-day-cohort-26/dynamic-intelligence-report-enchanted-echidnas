// Create an h2 element with the title of the section in it
const h2 = document.createElement("h2");
h2.textContent = "Financial Interests";

// Create an array with the h2 element as it's first item
const ehArray = [h2];


// Make variables for a section

// Bank accounts
const accountHead = "Bank accounts:";
const accountList = ["Wells Fargo -- Money Market Savings, Everyday Checking", "Bank of London -- Exquisite Exchequer Account", "Swiss Bank -- Super Private Savings"];
const accountSection = createSection(accountHead, accountList);
ehArray.push(accountSection);

// List of businesses
const businessHead = "Legitimate business interests:";
const businessList = [];
const businessSection = createSection(accountHead, accountList);
ehArray.push(businessSection);

// List of money laundering businesses
const launderingHead = "Suspected front corporations for money laundering:";
const launderingList = ["Dollarz Laundromat, LLC", ];
const launderingSection = createSection(accountHead, accountList);
ehArray.push(launderingSection);

// List of blackmailed officials
const officialsHead = "Blackmailed officials:";
const officialsList = ["King George III"];
const officialsSection = createSection(accountHead, accountList);
ehArray.push(officialsSection);


// Pass those variables to createSection: const sectionName = createSection(var1, var2)
// Push that section to the array: array.push(sectionName)
// Rinse and repeat