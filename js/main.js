const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){
    const posX = e.clientX;
    const postY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${postY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${postY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${postY}px`

    }, {duration: 500, fill: "forwards"});
});