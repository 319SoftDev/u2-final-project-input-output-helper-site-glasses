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

    if (z1 == "cancer" && z2 == "aquarius" || z1 == "aquarius" && z2 == "cancer") {
        zodiacResult.innerHTML = `27%`;
    } else if (z1 == "gemini" && z2 == "scorpio" || z1 == "scorpio" && z2 == "gemini" || z1 == "scorpio" && z2 == "sagittarius" || z1 == "sagittarius" && z2 == "scorpio") {
        zodiacResult.innerHTML = `28%`;
    } else if (z1 == "virgo" && z2 == "aquarius" || z1 == "aquarius" && z2 == "virgo" || z1 == "sagittarius" && z2 == "taurus" || z1 == "taurus" && z2 == "sagittarius") {
        zodiacResult.innerHTML = `30%`;
    } else if (z1 == "gemini" && z2 == "taurus" || z1 == "taurus" && z2 == "gemini") {
        zodiacResult.innerHTML = `33%`;
    } else if (z1 == "leo" && z2 == "capricorn" || z1 == "capricorn" && z2 == "leo" || z1 == "leo" && z2 == "cancer" || z1 == "cancer" && z2 == "leo" || z1 == "virgo" && z2 == "leo" || z1 == "leo" && z2 == "virgo") {
        zodiacResult.innerHTML = `35%`;
    } else if (z1 == "leo" && z2 == "pisces" || z1 == "pisces" && z2 == "leo" || z1 == "taurus" && z2 == "aries" || z1 == "aries" && z2 == "taurus") {
        zodiacResult.innerHTML = `38%`;
    } else if (z1 == "cancer" && z2 == "aries" || z1 == "aries" && z2 == "cancer") {
        zodiacResult.innerHTML = `42%`;
    } else if (z1 == "cancer" && z2 == "libra" || z1 == "libra" && z2 == "cancer") {
        zodiacResult.innerHTML = `43%`;
    } else if (z1 == "sagittarius" && z2 == "sagittarius" || z1 == "pisces" && z2 == "aquarius" || z1 == "aquarius" && z2 == "pisces" || z1 == "leo" && z2 == "leo") {
        zodiacResult.innerHTML = `45%`;
    } else if (z1 == "aries" && z2 == "capricorn" || z1 == "capricorn" && z2 == "aries") {
        zodiacResult.innerHTML = `47%`;
    } else if (z1 == "virgo" && z2 == "sagittarius" || z1 == "sagittarius" && z2 == "virgo"){
        zodiacResult.innerHTML = `48%`;
    } else if (z1 == "aries" && z2 == "aries" || z1 == "scorpio" && z2 == "aries" || z1 == "aries" && z2 == "scorpio") {
        zodiacResult.innerHTML = `50%`;
    } else if (z1 == "cancer" && z2 == "sagittarius" || z1 == "sagittarius" && z2 == "cancer" || z1 == "gemini" && z2 == "pisces" || z1 == "pisces" && z2 == "gemini") {
        zodiacResult.innerHTML = `53%`;
    } else if (z1 == "libra" && z2 == "capricorn" || z1 == "capricorn" && z2 == "libra") {
        zodiacResult.innerHTML = `55%`;
    } else if (z1 == "taurus" && z2 == "aquarius" || z1 == "aquarius" && z2 == "taurus" || z1 == "scorpio" && z2 == "leo" || z1 == "leo" && z2 == "scorpio") {
        zodiacResult.innerHTML = `58%`;
    } else if (z1 == "sagittarius" && z2 == "capricorn" || z1 == "capricorn" && z2 == "sagittarius" || z1 == "gemini" && z2 == "gemini" || z1 == "gemini" && z2 == "sagittarius" || z1 == "sagittarius" && z2 == "gemini") {
        zodiacResult.innerHTML = `60%`;
    } else if (z1 == "sagittarius" && z2 == "pisces" || z1 == "pisces" && z2 == "sagittarius" || z1 == "virgo" && z2 == "aries" || z1 == "aries" && z2 == "virgo") {
        zodiacResult.innerHTML = `63%`;
    } else if (z1 == "taurus" && z2 == "taurus" || z1 == "virgo" && z2 == "virgo" || z1 == "libra" && z2 == "taurus" || z1 == "taurus" && z2 == "libra" || z1 == "cancer" && z2 == "gemini" || z1 == "gemini" && z2 == "cancer") {
        zodiacResult.innerHTML = `65%`;
    } else if (z1 == "aries" && z2 == "pisces" || z1 == "pisces" && z2 == "aries") {
        zodiacResult.innerHTML = `67%`;
    } else if (z1 == "aquarius" && z2 == "capricorn" || z1 == "capricorn" && z2 == "aquarius" || z1 == "leo" && z2 == "aquarius" || z1 == "aquarius" && z2 == "leo" || z1 == "gemini" && z2 == "capricorn" || z1 == "capricorn" && z2 == "gemini" || z1 == "virgo" && z2 == "gemini" || z1 == "gemini" && z2 == "virgo" || z1 == "libra" && z2 == "aries" || z1 == "aries" && z2 == "libra") {
        zodiacResult.innerHTML = `68%`;
    } else if (z1 == "scorpio" && z2 == "aquarius" || z1 == "aquarius" && z2 == "scorpio" || z1 == "leo" && z2 == "taurus" || z1 == "taurus" && z2 == "leo" || z1 == "sagittarius" && z2 == "libra" || z1 == "libra" && z2 == "sagittarius") {
        zodiacResult.innerHTML = `73%`;
    } else if (z1 == "capricorn" && z2 == "capricorn" || z1 == "cancer" && z2 == "cancer" || z1 == "libra" && z2 == "libra") {
        zodiacResult.innerHTML = `75%`;
    } else if (z1 == "aries" && z2 == "aquarius" || z1 == "aquarius" && z2 == "aries") {
        zodiacResult.innerHTML = `78%`;
    } else if (z1 == "scorpio" && z2 == "scorpio") {
        zodiacResult.innerHTML = `80%`;
    }
}

submitButton.addEventListener('click', zodiacCompatibility);