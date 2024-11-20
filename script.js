// name input functions
const calculateButton = document.querySelector("#calculate-button");
const yourNameInput = document.querySelector("#your-name");
const crushNameInput = document.querySelector("#crush-name");

const nameNumValue = () => {
    const letterValues = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, 
        J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9, 
        S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
    }
    const name1 = yourNameInput.toUpperCase().replace(/[^A-Z]/g, '');
    const name2 = crushNameInput.toUpperCase().replace(/[^A-Z]/g, '');
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
        phrase.innerHTML = "L, GIVE UP !!! it’s never going to happen!";

    } else if (10 < percentage < 21) {
        phrase.innerHTML = "Find someone else they are not for u!";

    } else if (20 < percentage < 31) {
        phrase.innerHTML = "You can try but I doubt it will happen";

    } else if (30 < percentage < 41) {
        phrase.innerHTML = "Is your bank account cute? If no then no chance, if yes then maybe";

    } else if (40 < percentage < 51) {
        phrase.innerHTML = "You're going to be the joke  of the friend group";

    } else if (50 < percentage < 61) {

    } else if (60 < percentage < 71) {

    } else if (70 < percentage < 81) {

    } else if (80 < percentage < 91) {

    } else if (90 < percentage < 101) {

    }
}
