// name input functions
const calculateButton = document.querySelector("#calculate-button");
const yourNameInput = document.querySelector("#your-name");
const crushNameInput = document.querySelector("#crush-name");

const set1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const set2 = ["j", "k", "l", "m", "n", "o", "p", "q", "r"];
const set3 = ["s", "t", "u", "v", "w", "x", "y", "z"];

const nameCompatibility = () => {

}

// age input functions
const YourAgeInput = document.querySelector("#your-age");
const CrushAgeInput = document.querySelector("#crush-age");
const resultsDiv = document.querySelector("#ageResults");

const ageCompatibility = () => {
    // Get the actual numerical values from the inputs
    const yourAge = parseInt(YourAgeInput.value);
    const crushAge = parseInt(CrushAgeInput.value);

    // Check if input values are valid numbers
    if (isNaN(yourAge) || isNaN(crushAge)) {
        resultsDiv.innerHTML = "Please enter valid ages.";
        return;
    }

    // Calculate the younger and older ranges based on your age
    const youngerRange = 2 * (yourAge - 7);
    const olderRange = (yourAge / 2) - 7;
    console.log(youngerRange);
    console.log(olderRange);

    // Compare ages and display result
    if (yourAge < crushAge) {
        if (crushAge > youngerRange) {
            resultsDiv.innerHTML = "Too old!";
        } else {
            resultsDiv.innerHTML = "Just enough!";
        }
    } else if (yourAge > crushAge) {
        if (crushAge < olderRange) {
            resultsDiv.innerHTML = "Woah you creep too young...";
        } else {
            resultsDiv.innerHTML = "You're not too old for them (;";
        }
    } else {
        resultsDiv.innerHTML = "You are the same age!";
    }
}

calculateButton.addEventListener('click', ageCompatibility);

// final results
const finalResults = () => {
    if (percentage < 11) {

    } else if (10 < percentage < 21) {

    } else if (20 < percentage < 31) {

    } else if (30 < percentage < 41) {

    } else if (40 < percentage < 51) {

    } else if (50 < percentage < 61) {

    } else if (60 < percentage < 71) {

    } else if (70 < percentage < 81) {

    } else if (80 < percentage < 91) {

    } else if (90 < percentage < 101) {

    }
}
