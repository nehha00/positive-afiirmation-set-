const affirmations = [
    "You are enough just as you are. 🌿",
    "Believe in yourself and your abilities. 💪",
    "Every challenge is an opportunity to grow. 🌱",
    "You deserve love, success, and happiness. ❤️",
    "Your dreams are valid and achievable. ✨",
    "You are stronger than you think. 🏋️",
    "Today is a fresh start full of possibilities. 🌅",
    "Your kindness makes a difference. 🌻",
    "You are in control of your own happiness. 😊",
    "You radiate confidence and positivity. ☀️",
    "Your potential is limitless. 🚀",
    "Keep going; you are doing great! 🎉"
];

function newAffirmation() {
    // Get a random index
    let randomIndex = Math.floor(Math.random() * affirmations.length);
    // Set the new affirmation
    document.getElementById("affirmation").textContent = affirmations[randomIndex];
}

// Load random affirmation on page load
document.addEventListener("DOMContentLoaded", newAffirmation);
