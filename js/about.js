const journeyData = [
    {
        icon: "ti ti-building-store",
        title: "Connected Restaurants",
        text: "Partnered with 100+ local restaurants"
    },
    {
        icon: "ti ti-package",
        title: "Meals Saved",
        text: "Over 50,000 meals rescued from waste"
    },
    {
        icon: "ti ti-heart-handshake",
        title: "Community Volunteers",
        text: "500+ active volunteers making a difference"
    },
    {
        icon: "ti ti-trophy",
        title: "Growing Impact",
        text: "Expanding to 10+ cities nationwide"
    }
];

let currentIndex = 0;
let autoRotate;

function showJourney(index) {
    currentIndex = index;
    const data = journeyData[index];

    const card = document.getElementById('journeyCard');
    card.style.opacity = '0';

    setTimeout(() => {
        document.getElementById('journeyIcon').innerHTML = `<i class="${data.icon}"></i>`;
        document.getElementById('journeyTitle').textContent = data.title;
        document.getElementById('journeyText').textContent = data.text;
        card.style.opacity = '1';
    }, 200);


    clearInterval(autoRotate);
    autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % journeyData.length;
        showJourney(currentIndex);
    }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    showJourney(0);
});