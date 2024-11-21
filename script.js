// name input functions
const calculateButton = document.querySelector("#calculate-button");
const yourNameInput = document.querySelector("#your-name");
const crushNameInput = document.querySelector("#crush-name");
const percentage = document.querySelector("#percentage");

// age input functions
const YourAgeInput = document.querySelector("#your-age");
const CrushAgeInput = document.querySelector("#crush-age");
const ageResult = document.querySelector("#ageResults");

// final results
const phrase = document.querySelector("#phrase")


const compatibility = () => {
    // compatibility with age
    const yourAge = parseInt(YourAgeInput.value);
    const crushAge = parseInt(CrushAgeInput.value);

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
            ageResult.innerHTML = "Too old!";
        } else {
            ageResult.innerHTML = "Just enough!";
        }
    } else if (yourAge > crushAge) {
        if (crushAge < olderRange) {
            ageResult.innerHTML = "Woah you creep too young...";
        } else {
            ageResult.innerHTML = "You're not too old for them (;";
        }
    } else {
        ageResult.innerHTML = "You are the same age!";
    }

    // compatibility with names
    function getRandomInt() {
        return Math.floor(Math.random() * 100);
      }
    percentage.innerHTML = `${getRandomInt()}%`;

    // given names
    if (yourNameInput == "Mr.Blank" && crushNameInput == "Falcon") {
        percentage.innerHTML = `100%`
        ageResult.innerHTML = `Age doesn't matter in this love story!`
        phrase.innerHTML = `This must've been love at first sight...a perfect match that's meant to be. Don't forget to shine ✨`
    }


    // final results
    function finalResults() {
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
            phrase.innerHTML = "sure...";
    
        } else if (60 < percentage < 71) {
            phrase.innerHTML = "If you're not scared of rejection, go for it but don't blame me if they don't accept";
    
        } else if (70 < percentage < 81) {
            phrase.innerHTML = "Shoot your shot";
    
        } else if (80 < percentage < 91) {
            phrase.innerHTML = "You better tell them";
    
        } else if (90 < percentage < 101) {
            phrase.innerHTML = "Invite me to the carne asada!!";
    
        }
    }
    return finalResults();
}

calculateButton.addEventListener('click', compatibility);
