const words = "Crystal ball, show me the future";

const ANIMATION_DURATION = 4000; //ns

// separate each character into it's own div
const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 10) - offset}ms`;
        return div;

    }

    document.getElementById("spiral").append(createElement(0));
    document
        .getElementById("spiral2")
        .append(createElement(-1 * (ANIMATION_DURATION / 1)));


});