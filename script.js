// name input functions
const calculateButton = document.querySelector("#calculate-button");
const yourNameInput = document.querySelector("#your-name");
const crushNameInput = document.querySelector("#crush-name");
const percentage = document.querySelector("#percentage");

const nameCompatibility = () => {
    const letterVal = {A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:10, K:11, L:12, M:13, N:14, O:15, P:16, Q:17, R:18, S:19, T:20, U:21, V:22, W:23, X:24, Y:25, Z:26}
    
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < yourNameInput.length; i++) {
        sum1 += yourNameInput.charCodeAt(i);
    }
    for (let i = 0; i < crushNameInput.length; i++) {
        sum2 += crushNameInput.charCodeAt(i);
    }
    
    avgNum = (sum1 + sum2)/20;
    percentage.innerHTML = `${avgNum}%`;
}

// age input functions
const YourAgeInput = document.querySelector("#your-age");
const CrushAgeInput = document.querySelector("#crush-age");
const ageResult = document.querySelector("#ageResults");

// final results
const phrase = document.querySelector("#phrase")


const ageCompatibility = () => {
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

    // given names
    if (yourNameInput == "Mr.Blank" && crushNameInput == "Falcon") {
        percentage.innerHTML = `100%`
        ageResult.innerHTML = `Age doesn't matter in this love story!`
        phrase.innerHTML = `This must've been love at first sight...a perfect match that's meant to be. Don't forget to shine ✨`
    }
}

calculateButton.addEventListener('click', ageCompatibility);
