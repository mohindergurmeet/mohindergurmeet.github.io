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

var mainFunc = setInterval(function () {
    var now = new Date();
    var anivDate = new Date(now.getFullYear(), 11, 1, 0, 0, 0, 0).getTime();
    var nowTime = now.getTime();
    var timeLeft = anivDate - nowTime;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft == 0) {
        document.getElementById("on-aniv").style.display = "unset";
    } else {
        document.getElementById("before-aniv").style.display = "unset";
        document.getElementById("time-left").innerHTML =
            days + "d " + hours + "hrs " + minutes + "min " + seconds + "sec ";
    }
}, 1000);
