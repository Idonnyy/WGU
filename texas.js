// Change background (if you want dynamic control)
const bg = document.getElementById("background_img");
bg.style.backgroundImage = "url('/imgFiles/Texas_flag.jpg')";

// Fun facts for Texas
const funFacts = [
    "Texas is the second-largest state in the U.S.",
    "The state capital is Austin.",
    "Texas has its own power grid.",
    "The state flower is the Bluebonnet."
];

// Populate aside list
const funFactsList = document.getElementById("funFacts");
funFacts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    funFactsList.appendChild(li);
});

// Main content
const mainText = document.getElementById("mainText");
mainText.textContent = "Texas, located in the South Central region of the United States, is known for its large size, diverse landscapes, and unique culture. From the Gulf Coast beaches to the deserts of West Texas, it offers a variety of experiences.";
