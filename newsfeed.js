//Main Header
const jh_h2 = document.createElement("h2");
const jh_h2text = document.createTextNode("News Feed");
jh_h2.setAttribute("id", "jh__h2");
jh_h2.appendChild(jh_h2text);
//First News Report
const jh_h3one = "McDonald's Robbed!!!"
const jh_lione = ["A McDonalds in the Nashville area was robbed and locals are stunned. The assailant ran into the McDonald's with a green toy watergun and demanded money. The criminal has not been identified.",
"Date: 04/12/2018", "Type of crime: Robbery","Location: Nashville McDonald's",
"Victims: Everyone inside McDonald's", "Witnesses: Everyone inside McDonald's",
"Law Enforcement involved: Nashville PD", "Likelihood of Rubens involvement: 9/10"];
const jh_firstCrime = createSection(jh_h3one, jh_lione);
//Second News Report
const jh_h3two = "Candy Stolen From Baby!!!"
const jh_litwo = ["Reports say that an unknown assailant ran up to a baby in a stroller and stole his candy! The baby said the incident was totally not cool, and that the criminal is lucky he was tired that day. The mother was said to be nowhere near the scene.",
"Date: 05/21/2018", "Type of crime: Theft", "Location: Brentwood,TN",
"Victims: A baby", "Witnesses: The baby", "Law Enforcement involved: Brentwood PD",
"Likelihood of Rubens involvement: 7/10"];
const jh_secondCrime = createSection(jh_h3two, jh_litwo);
//Third News Report
const jh_h3three = "Santa Claus Murdered!!!"
const jh_lithree = ["Santa Claus was pronounced dead at his home in the North Pole. The suspect used a gun to kill the jolly old childrens favorite. The suspect has not been identified, however the Grinch has been ruled out.",
"Date: 06/4/2018", "Type of crime: Murder", "Location: The North Pole",
"Victims: Santa Claus", "Witnesses: One elf", "Law Enforcement involved: North Pole PD",
"Likelihood of Rubens involvement: 8/10"];
const jh_thirdCrime = createSection(jh_h3three, jh_lithree);
//Array For Append Function
const jh_array = [jh_h2, jh_firstCrime, jh_secondCrime, jh_thirdCrime];