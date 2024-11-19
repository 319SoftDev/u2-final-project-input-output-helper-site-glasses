// name input functions
const calculateButton = document.querySelector("#calculate-button");

const YourNameInput = document.querySelector("#your-name");
const CrushNameInput = document.querySelector("#crush-name");

// age input functions
const YourAgeInput = document.querySelector("#your-age");
const CrushAgeInput = document.querySelector("#crush-age");
const resultsDiv = document.querySelector("#results")

const ageCompatibility = () => {
    if (YourAgeInput < CrushAgeInput){
        youngerRange = 2 * (YourAgeInput - 7);
        console.log(youngerRange);
        if (CrushAgeInput > youngerRange){
            resultsDiv.innerHTML("Too old!");
        } else {
            resultsDiv.innerHTML("Just enough!");
        }
    } else if (YourAgeInput > CrushAgeInput) {
        olderRange = (YourAgeInput/2) - 7;
        console.log(olderRange);
        if (CrushAgeInput < olderRange) {
            resultsDiv.innerHTML("Woah you creep too young...");
        } else {
            resultsDiv.innerHTML("You're not too old for them ;)");
        }
    }
}

calculateButton.addEventListener('click', ageCompatibility);