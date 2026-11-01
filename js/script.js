
// Store the user's answers
let answers = {};

// Find all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

// Set up answer buttons
questionBlocks.forEach((question, index) => {
    const buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            buttons.forEach(btn => {
                btn.classList.remove("selected");
            });

            this.classList.add("selected");

            answers[index] = this.dataset.category;
        });
    });
});

// Display the personality result
function displayResult() {

    if (Object.keys(answers).length !== 4) {
        document.getElementById("result-text").textContent =
            "Please answer all four questions first!";
        return;
    }

    // Count personality categories
    let scores = {
        adventurer: 0,
        creative: 0,
        social: 0,
        chill: 0
    };

    Object.values(answers).forEach(answer => {
        scores[answer]++;
    });

    // Find the highest score
    let winner = "adventurer";

    for (let category in scores) {
        if (scores[category] > scores[winner]) {
            winner = category;
        }
    }

    // Personality results
    const results = {
        adventurer: "THE ADVENTURER! You love excitement, exploring new places, and trying new things. You are always ready for your next adventure!",

        creative: "THE CREATIVE! You have a big imagination and enjoy coming up with new ideas. You like thinking outside the box!",

        social: "THE SOCIAL BUTTERFLY! You enjoy spending time with friends, helping others, and being around people. You bring good energy wherever you go!",

        chill: "THE CHILL ONE! You enjoy relaxing, taking your time, and avoiding unnecessary stress. You know how to enjoy life!"
    };

    // Display the result
    document.getElementById("result-text").textContent = results[winner];
}

// Connect the Show Results button
document.getElementById("show-results").addEventListener("click", displayResult);
