const dynamicTextSpan = document.getElementById("dynamic-text");
const text = document.querySelector(".type");
const cursor = document.querySelector(".cursor");

const textArray = ["COUPLE", "PARENTS", "DAUGHTER and SON"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1500;
var textArrayIndex = 0;
var charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        cursor.classList.remove("blink");
        dynamicTextSpan.textContent += textArray[textArrayIndex].charAt(
            charIndex
        );
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.add("blink");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        cursor.classList.remove("blink");
        dynamicTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursor.classList.add("blink");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, newTextDelay);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay + 250);
});
