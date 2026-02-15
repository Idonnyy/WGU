// Grab page elements
const stateList = document.getElementById("stateList");
const stateh1 = document.getElementById("stateName");
const aside = document.getElementById("aside");

// List of states
const listOfState = [
    {name: "Washington"},
    {name: "California"},
    {name: "Texas"},
    // add other states here
];

// Mapping of states to flag URLs
const stateFlags = {
    washington: "https://c7.alamy.com/comp/PY6GJ4/flag-state-of-washington-vertical-flagisolated-on-a-white-background-PY6GJ4.jpg",
    california: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
    texas: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg",
    // add other states here
};

// 1️⃣ Build the state list if #stateList exists
if (stateList) {
    listOfState.forEach(state => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");

        anchor.textContent = state.name;
        anchor.href = state.name.toLowerCase() + ".html"; // navigate to state page

        listItem.appendChild(anchor);
        stateList.appendChild(listItem);
    });
}

// 2️⃣ On state pages, load the correct flag in the aside
if (aside) {
    // Get current page filename (e.g., "washington" from "washington.html")
    const pageName = window.location.pathname.split("/").pop().replace(".html", "").toLowerCase();

    // Set aside background if a flag exists for this state
    if (stateFlags[pageName]) {
        aside.style.background = `rgba(232,232,232,0.6) url(${stateFlags[pageName]}) center / cover no-repeat`;
    }

    // Optional: update H1 text to match state
    if (stateh1) {
        stateh1.textContent = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    }
}
