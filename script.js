// For typing effect
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


// for lazy loading
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < window.innerHeight + scrollTop) {
                    img.src = img.dataset.src;
                    img.classList.remove("lazy");
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});
