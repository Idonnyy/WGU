// Grab page elements
const stateList = document.getElementById("stateList");
const stateh1 = document.getElementById("stateName");
const aside = document.getElementById("aside");
const stateCptImage = document.getElementById("stateCptImage");
const stateCapitalE = document.getElementById("stateCapitalE");

// Form validation for email confirmation
document.getElementById("contactForm").addEventListener("submit", function(e){
    const email = document.getElementById("email").value;
    const confirm = document.getElementById("confirmEmail").value;
    if(email.toLowerCase() !== confirm.toLowerCase()){
        e.preventDefault();
        alert("Email addresses do not match!");
    }
});

// State capitals
const stateCapital = {
    washington: "Olympia",
    california: "Sacramento",
    texas: "Austin",
};

//State cities
const stateCities = {
    washington: ["Seattle", "Spokane", "Tacoma"],
    california: ["Los Angeles", "San Francisco", "San Diego"],
    texas: ["Houston", "Dallas", "Austin"],
};

// State capital images
const stateCapitalImages = {
    washington: "https://www.worldatlas.com/upload/6b/00/2e/shutterstock-1800742975.jpg",
    california: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/California_State_Capitol_Building.jpg/2560px-California_State_Capitol_Building.jpg",
    texas: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Texas_State_Capitol.jpg/2560px-Texas_State_Capitol.jpg",
};

// State flags
const stateFlags = {
    washington: "https://c7.alamy.com/comp/PY6GJ4/flag-state-of-washington-vertical-flagisolated-on-a-white-background-PY6GJ4.jpg",
    california: "https://c8.alamy.com/comp/PY6GEP/flag-state-of-california-vertical-flagisolated-on-a-white-background-PY6GEP.jpg",
    texas: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg",
};

// List of states
const listOfState = [
    { name: "Washington" },
    { name: "California" },
    { name: "Texas" },
];

const cityData = {
    olympia: {
        population: "52,555",
        region: "Pacific Northwest",
        Income: "$77,000",

        funFact1: "Olympia is known for its vibrant arts scene and is home to the Olympia Farmers Market, which has been operating since 1972.",
        funFact2: "The city is named after the Olympic Mountains, which are visible from many parts of Olympia and provide a stunning backdrop to the city.",
        funFact3: "The city is surrounded by natural beauty, including the nearby Capitol Lake and the scenic Puget Sound, making it a popular destination for outdoor enthusiasts."
    }};

// Get current page name (e.g., "washington" from "washington.html")
const pageName = window.location.pathname.split("/").pop().replace(".html", "").toLowerCase();

// Build the state list
if (stateList) {
    listOfState.forEach(state => {
        const stateAttr = state.name.toLowerCase().replace(/\s/g, "");
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = state.name;
        a.href = stateAttr + ".html";
        li.appendChild(a);
        li.setAttribute("data-state", stateAttr);

        // Highlight current page state
        if (stateAttr === pageName) li.classList.add("active");

        stateList.appendChild(li);
    });
}

// Update H1
if (stateh1) stateh1.textContent = pageName.charAt(0).toUpperCase() + pageName.slice(1);

// Update capital
if (stateCapitalE && stateCapital[pageName]) stateCapitalE.textContent = stateCapital[pageName];
    anchorCapital = document.createElement("a");
    anchorCapital.textContent = stateCapital[pageName];
    anchorCapital.href = `${stateCapital[pageName].toLowerCase().replace(/\s/g, "")}.html`;
    stateCapitalE.innerHTML = "State Capital: ";
    anchorCapital.style.textDecoration = "none";
    anchorCapital.style.color = "white";
    anchorCapital.classList.add("capitalHover");
    anchorCapital.addEventListener("mouseover", () => {
        anchorCapital.style.color = "Darkgreen";
    });
    anchorCapital.addEventListener("mouseout", () => {
        anchorCapital.style.color = "white";
    });

    stateCapitalE.appendChild(anchorCapital);

// Update aside flag
if (aside && stateFlags[pageName]) {
    aside.style.background = `rgba(232,232,232,0.6) url(${stateFlags[pageName]}) center / cover no-repeat`;

// Update capital image
    if (stateCptImage && stateCapitalImages[pageName]) {
        stateCptImage.src = stateCapitalImages[pageName];
        stateCptImage.alt = `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} State Capital Image`;
    }

// Update cities list to the right of the capital image with anchor to city html page
    const citiesList = document.getElementById("cities");
    if (citiesList && stateCities[pageName]) {
        stateCities[pageName].forEach(city => {
            const cityLi = document.createElement("li");
            const cityLink = document.createElement("a");
            cityLink.textContent = city;
            cityLink.href = `${city.toLowerCase().replace(/\s/g, "")}.html`;
            cityLi.appendChild(cityLink);
            citiesList.appendChild(cityLi);
        });

    }
}