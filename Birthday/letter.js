// Floating Hearts

setInterval(() => {

    const heart =
    document.createElement("div");

    heart.classList.add(
    "floating-heart"
    );

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.bottom =
    "-50px";

    document.body.appendChild(
    heart
    );

    heart.animate(

    [
        {
            transform:"translateY(0)",
            opacity:1
        },

        {
            transform:"translateY(-110vh)",
            opacity:0
        }

    ],

    {
        duration:6000,
        easing:"linear"
    }

    );

    setTimeout(() => {

        heart.remove();

    },6000);

},800);