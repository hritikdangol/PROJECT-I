let journeyIndex = 0;

const journeyIcons = ["🍽️", "📦", "🤝", "🐕"];
const journeyTitles = [
    "Connected Restaurants",
    "Saved Thousands of Meals",
    "Built a Volunteer Network",
    "Fed Animals in Need"
];
const journeyTexts = [
    "Partnered with 100+ local restaurants",
    "Rescued 3,200+ meals from going to waste",
    "100+ active volunteers joined the mission",
    "620+ animals fed through food donations"
];

function showJourney(index) {
    journeyIndex = index;

    document.getElementById("journeyIcon").innerHTML = journeyIcons[index];
    document.getElementById("journeyTitle").innerHTML = journeyTitles[index];
    document.getElementById("journeyText").innerHTML = journeyTexts[index];

    for (let i = 0; i < 4; i++) {
        document.getElementById("dot" + i).className = "dot";
    }
    document.getElementById("dot" + index).className = "dot active";
}

function nextJourney() {
    journeyIndex = journeyIndex + 1;
    if (journeyIndex > 3) {
        journeyIndex = 0;
    }
    showJourney(journeyIndex);
}

showJourney(0);
setInterval(nextJourney, 4000);