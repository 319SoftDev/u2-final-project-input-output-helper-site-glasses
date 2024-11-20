// name input functions
const calculateButton = document.querySelector("#calculate-button");

// age input functions
const YourAgeInput = document.querySelector("#your-age");
const CrushAgeInput = document.querySelector("#crush-age");
const resultsDiv = document.querySelector("#results");

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
            resultsDiv.innerHTML = "You're not too old for them ;)";
        }
    } else {
        resultsDiv.innerHTML = "You are the same age!";
    }
}

calculateButton.addEventListener('click', ageCompatibility);