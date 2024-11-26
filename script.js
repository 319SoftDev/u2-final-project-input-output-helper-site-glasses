// calculate button query selector
const calculateButton = document.querySelector("#calculate-button");

// name query selectors 
const yourNameInput = document.querySelector("#your-name");
const crushNameInput = document.querySelector("#crush-name");

// percentage and phrase query selectors
const percentage = document.querySelector("#percentage");
const phraseOutput = document.querySelector("#phrase");

const nameCompatibility = () => {
    // assigning a number from 1 to 26 to each letter
    const letterVal = {A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:10, K:11, L:12, M:13, N:14, O:15, P:16, Q:17, R:18, S:19, T:20, U:21, V:22, W:23, X:24, Y:25, Z:26};
    
    let sum1 = 0;
    let sum2 = 0;

    // calculating the integer value of the "Your Name" input
    for (let i = 0; i < yourNameInput.value.length; i++) {
        let letter = yourNameInput.value[i].toUpperCase();
        if (letterVal[letter]) {
            sum1 += letterVal[letter];
            console.log(sum1);
        }
    }

    // calculating the integer value of the "Crush Name" input
    for (let i = 0; i < crushNameInput.value.length; i++) {
        let letter = crushNameInput.value[i].toUpperCase();
        if (letterVal[letter]) {
            sum2 += letterVal[letter];
            console.log(sum2);
        }
    }
    
    // finding the percentage 
    let avgNum = (((sum1 * (yourNameInput.value.length + 1)) + (sum2 * (yourNameInput.value.length +1))) / 20);
    console.log(avgNum);

    percentage.innerHTML = `${avgNum}%`;

    // the phrases that result based on the percentage in ranges of 10
    if (avgNum < 11) {
        phraseOutput.innerHTML = `Ouch. That's not just low, that's "maybe you two should just stay friends... forever" territory. Honestly, even the love calculator is giving up on this one—guess it's time to delete the app and try something else, like maybe a pet goldfish.`;
    } else if (avgNum > 10 && avgNum < 21) {
        phraseOutput.innerHTML = `It's not terrible, but it's definitely in the "eh, could be worse" zone. It's like you're at the beginning of a mediocre rom-com—there's some chemistry, but mostly just awkward pauses and uncomfortable silences. Maybe with a little more effort, you could bump that score up to “meh” status.`;
    } else if (avgNum > 20 && avgNum < 31) {
        phraseOutput.innerHTML = `Hey, it's not the worst, but it's also not exactly setting the world on fire. You've got a little spark, but it's more like a tiny campfire than a full-on blaze. With some work and maybe a few less awkward moments, you might just make it to “could be something... maybe.” Keep going, but don't quit your day job!`;
    } else if (avgNum > 30 && avgNum < 41) {
        phraseOutput.innerHTML = `Well, at least it's not a total disaster, but it's still pretty far from a love story. You're in that awkward “maybe we're kind of okay together, but not really” zone. If this were a movie, it'd be the one everyone skips after the trailer—nothing horrible, but also nothing worth sticking around for.`;
    } else if (avgNum > 40 && avgNum < 51) {
        phraseOutput.innerHTML = `You're going to be the joke  of the friend group`;
    } else if (avgNum > 50 && avgNum < 61) {
        phraseOutput.innerHTML = `Sure...`;
    } else if (avgNum > 60 && avgNum < 71) {
        phraseOutput.innerHTML = `If you're not scared of rejection, go for it but don't blame me if they don't accept`;
    } else if (avgNum > 70 && avgNum < 81) {
        phraseOutput.innerHTML = `Shoot your shot`;
    } else if (avgNum > 80 && avgNum < 91) {
        phraseOutput.innerHTML = `You better tell them`;
    } else {
        phraseOutput.innerHTML = `Invite me to the carne asada`;
    }
}


// age input query selectors
const YourAgeInput = document.querySelector("#your-age");
const CrushAgeInput = document.querySelector("#crush-age");

// age result query selector
const ageResult = document.querySelector("#ageResults");

const ageCompatibility = () => {
    // compatibility with age
    const yourAge = parseInt(YourAgeInput.value);
    const crushAge = parseInt(CrushAgeInput.value);

    if (isNaN(yourAge) || isNaN(crushAge)) {
        ageResult.innerHTML = "Please enter valid ages.";
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
        ageResult.innerHTML = "Age shouldn't be a problem!";
    }
}

const cat = document.querySelector("#cat");

const unhide = ()=>{
    cat.classList.remove("hidden");
}

calculateButton.addEventListener('click', () => {
    nameCompatibility();
    unhide();
    ageCompatibility();
});


// restart button query selector
const restartButton = document.querySelector("#restart-button");

const restartCalculator = () => {
    // clearing the messages and percentage 
    percentage.innerHTML = "";
    phraseOutput.innerHTML = "";
    ageResult.innerHTML = "";
    cat.classList.add("hidden");
    document.getElementById("your-name").value = "";
    document.getElementById("your-age").value = "";
    document.getElementById("crush-name").value = "";
    document.getElementById("crush-age").value = "";

}

restartButton.addEventListener("click", restartCalculator);