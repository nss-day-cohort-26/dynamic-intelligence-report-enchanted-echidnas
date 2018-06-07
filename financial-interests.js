/* 
This page: 
1. Creates an <h2> element to be used as the title of the segment
2. Gives that element an id and places it in ehArray, which will eventually be used to represent the entire segment
3. Defines a string variable for each <section> heading and an array of strings, each of which will represent an <li> within the <ul>
4. Runs createSection( header, list-items[ ] ) and stores it in a variable
5. Pushes that variable into ehArray 
6. Repeat steps 3-5 for each of the 4 <section> elements
*/



// Create an h2 element with the title of the section in it
const h2 = document.createElement("h2");
h2.textContent = "Financial Interests";
h2.id = "eh__h2";

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
const businessList = ["Ruben's Sandwich Shop (owner)", "Unlimited, Ltd. (shareholder)",];
const businessSection = createSection(businessHead, businessList);
ehArray.push(businessSection);

// List of money laundering businesses
const launderingHead = "Suspected front corporations for money laundering:";
const launderingList = ["Dollarz Laundromat, LLC", "The Cash Cleaners Corporation", "Red, Inc."];
const launderingSection = createSection(launderingHead, launderingList);
ehArray.push(launderingSection);

// List of blackmailed officials
const officialsHead = "Blackmailed officials:";
const officialsList = ["King George III", "Police Commissioner James Gordon", "Judge Judy"];
const officialsSection = createSection(officialsHead, officialsList);
ehArray.push(officialsSection);


// Pass those variables to createSection: const sectionName = createSection(var1, var2)
// Push that section to the array: array.push(sectionName)
// Rinse and repeat