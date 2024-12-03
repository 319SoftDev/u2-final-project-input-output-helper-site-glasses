// query selectors for zodaic compatibility
const yourZodiac = document.querySelector("#your-zodiac");
const crushZodiac = document.querySelector("#crush-zodiac");
const submitButton = document.querySelector("#submit-button");

const zodiacResult = document.querySelector("#zodiac-result");

const zodiacCompatibility = () => {
    let z1 = yourZodiac.value;
    console.log(z1);
    let z2 = crushZodiac.value;
    console.log(z2);

    if (z1 == "can" && z2 == "aquarius" || z1 == "aquarius" && z2 == "can") {
        zodiacResult.innerHTML = `27%`;
    } else if (z1 == "gem" && z2 == "sco" || z1 == "sco" && z2 == "gem" || z1 == "sco" && z2 == "sag" || z1 == "sag" && z2 == "sco") {
        zodiacResult.innerHTML = `28%`;
    } else if (z1 == "vir" && z2 == "aquarius" || z1 == "aquarius" && z2 == "vir" || z1 == "sag" && z2 == "tau" || z1 == "tau" && z2 == "sag") {
        zodiacResult.innerHTML = `30%`;
    } else if (z1 == "gem" && z2 == "tau" || z1 == "tau" && z2 == "gem") {
        zodiacResult.innerHTML = `33%`;
    } else if (z1 == "leo" && z2 == "capricorn" || z1 == "capricorn" && z2 == "leo" || z1 == "leo" && z2 == "can" || z1 == "can" && z2 == "leo" || z1 == "vir" && z2 == "leo" || z1 == "leo" && z2 == "vir") {
        zodiacResult.innerHTML = `35%`;
    } else if (z1 == "leo" && z2 == "pisces" || z1 == "pisces" && z2 == "leo" || z1 == "tau" && z2 == "aries" || z1 == "aries" && z2 == "tau") {
        zodiacResult.innerHTML = `38%`;
    } else if (z1 == "can" && z2 == "aries" || z1 == "aries" && z2 == "can") {
        zodiacResult.innerHTML = `42%`;
    } else if (z1 == "can" && z2 == "lib" || z1 == "lib" && z2 == "can") {
        zodiacResult.innerHTML = `43%`;
    } else if (z1 == "sag" && z2 == "sag" || z1 == "pisces" && z2 == "aquarius" || z1 == "aquarius" && z2 == "pisces" || z1 == "leo" && z2 == "leo") {
        zodiacResult.innerHTML = `45%`;
    } else if (z1 == "aries" && z2 == "capricorn" || z1 == "capricorn" && z2 == "aries") {
        zodiacResult.innerHTML = `47%`;
    } else if (z1 == "vir" && z2 == "sag" || z1 == "sag" && z2 == "vir"){
        zodiacResult.innerHTML = `48%`;
    } else if (z1 == "aries" && z2 == "aries" || z1 == "sco" && z2 == "aries" || z1 == "aries" && z2 == "sco") {
        zodiacResult.innerHTML = `50%`;
    } else if (z1 == "can" && z2 == "sag" || z1 == "sag" && z2 == "can" || z1 == "gem" && z2 == "pisces" || z1 == "pisces" && z2 == "gem") {
        zodiacResult.innerHTML = `53%`;
    } else if (z1 == "lib" && z2 == "capricorn" || z1 == "capricorn" && z2 == "lib") {
        zodiacResult.innerHTML = `55%`;
    } else if (z1 == "tau" && z2 == "aquarius" || z1 == "aquarius" && z2 == "tau" || z1 == "sco" && z2 == "leo" || z1 == "leo" && z2 == "sco") {
        zodiacResult.innerHTML = `58%`;
    } else if (z1 == "sag" && z2 == "capricorn" || z1 == "capricorn" && z2 == "sag" || z1 == "gem" && z2 == "gem" || z1 == "gem" && z2 == "sag" || z1 == "sag" && z2 == "gem") {
        zodiacResult.innerHTML = `60%`;
    } else if (z1 == "sag" && z2 == "pisces" || z1 == "pisces" && z2 == "sag" || z1 == "vir" && z2 == "aries" || z1 == "aries" && z2 == "vir") {
        zodiacResult.innerHTML = `63%`;
    } else if (z1 == "tau" && z2 == "tau" || z1 == "vir" && z2 == "vir" || z1 == "lib" && z2 == "taurus" || z1 == "tau" && z2 == "lib" || z1 == "can" && z2 == "gem" || z1 == "gem" && z2 == "can") {
        zodiacResult.innerHTML = `65%`;
    } else if (z1 == "aries" && z2 == "pisces" || z1 == "pisces" && z2 == "aries") {
        zodiacResult.innerHTML = `67%`;
    } else if (z1 == "aquarius" && z2 == "capricorn" || z1 == "capricorn" && z2 == "aquarius" || z1 == "leo" && z2 == "aquarius" || z1 == "aquarius" && z2 == "leo" || z1 == "gem" && z2 == "capricorn" || z1 == "capricorn" && z2 == "gem" || z1 == "vir" && z2 == "gem" || z1 == "gem" && z2 == "vir" || z1 == "lib" && z2 == "aries" || z1 == "aries" && z2 == "lib") {
        zodiacResult.innerHTML = `68%`;
    } else if (z1 == "sco" && z2 == "aquarius" || z1 == "aquarius" && z2 == "sco" || z1 == "leo" && z2 == "tau" || z1 == "tau" && z2 == "leo" || z1 == "sag" && z2 == "lib" || z1 == "lib" && z2 == "sag") {
        zodiacResult.innerHTML = `73%`;
    } else if (z1 == "capricorn" && z2 == "capricorn" || z1 == "can" && z2 == "can" || z1 == "lib" && z2 == "lib") {
        zodiacResult.innerHTML = `75%`;
    } else if (z1 == "aries" && z2 == "aquarius" || z1 == "aquarius" && z2 == "aries") {
        zodiacResult.innerHTML = `78%`;
    } else if (z1 == "sco" && z2 == "sco") {
        zodiacResult.innerHTML = `80%`;
    } else if (z1 == "aries" && z2 == "gem" || z1 == "gem" && z2 == "aries" || z1 == "capricorn" && z2 == "can" || z1 == "can" && z2 == "capricorn") {
        zodiacResult.innerHTML = `83%`;
    } else if (z1 == "gem" && z2 == "aquarius" || z1 == "aquarius" && z2 == "gem" || z1 == "taurus" && z2 == "pisces" || z1 == "pisces" && z2 == "taurus" || z1 == "aries" && z2 == "lib" || z1 == "lib" && z2 == "aries") {
        zodiacResult.innerHTML = `85%`;
    } else if (z1 == "pisces" && z2 == "capricorn" || z1 == "capricorn" && z2 == "pisces" || z1 == "vir" && z2 == "pisces" || z1 == "pisces" && z2 == "vir" || z1 == "lib" && z2 == "pisces" || z1 == "pisces" && z2 == "lib" || z1 == "sco" && z2 == "tau" || z1 == "tau" && z2 == "sco" || z1 == "leo" && z2 == "gem" || z1 == "gem" && z2 == "leo" || z1 == "sco" && z2 == "vir" || z1 == "vir" && z2 == "sco") {
        zodiacResult.innerHTML = `88%`;
    } else if (z1 == "lib" && z2 == "aquarius" || z1 == "aquarius" && z2 == "lib" || z1 == "sag" && z2 == "aquarius" || z1 == "aquarius" && z2 == "sag" || z1 == "vir" && z2 == "taurus" || z1 == "taurus" && z2 == "vir" || z1 == "vir" && z2 == "can" || z1 == "can" && z2 == "vir") {
        zodiacResult.innerHTML = `90%`;
    } else if (z1 == "aries" && z2 == "sag" || z1 == "sag" && z2 == "aries" || z1 == "lib" && z2 == "gem" || z1 == "gem" && z2 == "lib" || z1 == "leo" && z2 == "sag" || z1 == "sag" && z2 == "leo") {
        zodiacResult.innerHTML = `93%`;
    } else if (z1 == "sco" && z2 == "can" || z1 == "can" && z2 == "sco") {
        zodiacResult.innerHTML = `94%`;
    } else if (z1 == "vir" && z2 == "capricorn" || z1 == "capricorn" && z2 == "vir" || z1 == "capricorn" && z2 == "sco" || z1 == "sco" && z2 == "capricorn") {
        zodiacResult.innerHTML = `95%`;
    } else if (z1 == "aries" && z2 == "leo" || z1 == "leo" && z2 == "aries" || z1 == "sco" && z2 == "pisces" || z1 == "pisces" && z2 == "sco" || z1 == "can" && z2 == "taurus" || z1 == "taurus" && z2 == "can" || z1 == "lib" && z2 == "leo" || z1 == "leo" && z2 == "lib") {
        zodiacResult.innerHTML = `97%`;
    } else {
        zodiacResult.innerHTML = `98%`;
    }
}

submitButton.addEventListener('click', zodiacCompatibility);