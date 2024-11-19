// name input functions
const calculateButton = document.querySelector("#calculate-button");

// age input functions
const YourAgeInput = document.querySelector("#your-age");
const CrushAgeInput = document.querySelector("#crush-age");
const resultsDiv = document.querySelector("#results");

youngerRange = 2 * (YourAgeInput - 7);
olderRange = (YourAgeInput/2) - 7;
console.log(youngerRange);
console.log(olderRange);

const ageCompatibility = () => {
    if (YourAgeInput < CrushAgeInput){
        if (CrushAgeInput > youngerRange){
            resultsDiv.innerHTML = "Too old!";
        } else {
            resultsDiv.innerHTML = "Just enough!";
        }
    } else if (YourAgeInput > CrushAgeInput) {
        if (CrushAgeInput < olderRange) {
            resultsDiv.innerHTML = "Woah you creep too young...";
        } else {
            resultsDiv.innerHTML = "You're not too old for them ;)";
        }
    }
}

calculateButton.addEventListener('click', ageCompatibility);