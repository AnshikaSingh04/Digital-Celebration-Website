function blowCandle(){

    document.getElementById("flame").style.display = "none";

    document.getElementById("blowBtn").style.display = "none";

    document.getElementById("message").style.display = "block";

    createConfetti();
    createHearts();
    createBalloons();

    setTimeout(() => {

        document.getElementById("nextBtn").style.display = "block";

    }, 2000);
}
function createConfetti(){

for(let i=0;i<100;i++){

let confetti=
document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="10px";
confetti.style.height="10px";

confetti.style.left=
Math.random()*100+"vw";

confetti.style.top="-10px";

confetti.style.background=
`hsl(${Math.random()*360},
100%,50%)`;

document.body.appendChild(confetti);

confetti.animate(

[
{transform:"translateY(0)"},
{transform:"translateY(100vh)"}
],

{
duration:3000
}

);

setTimeout(()=>{

confetti.remove();

},3000);

}
}
function createHearts(){

    for(let i=0;i<20;i++){

        let heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left =
        Math.random() * 100 + "vw";

        heart.style.bottom = "-50px";

        heart.style.fontSize = "30px";

        document.body.appendChild(heart);

        heart.animate(
        [
            {transform:"translateY(0)",opacity:1},
            {transform:"translateY(-100vh)",opacity:0}
        ],
        {
            duration:5000,
            easing:"linear"
        });

        setTimeout(()=>{
            heart.remove();
        },5000);
    }
}
function createBalloons(){

    const colors = [
        "#ff4d6d",
        "#ff85a2",
        "#ff1493",
        "#ff69b4",
        "#ffb6c1"
    ];

    for(let i=0;i<15;i++){

        let balloon =
        document.createElement("div");

        balloon.innerHTML = "🎈";

        balloon.style.position = "fixed";

        balloon.style.left =
        Math.random()*100 + "vw";

        balloon.style.bottom = "-80px";

        balloon.style.fontSize = "50px";

        document.body.appendChild(balloon);

        balloon.animate(
        [
            {transform:"translateY(0)"},
            {transform:"translateY(-120vh)"}
        ],
        {
            duration:7000,
            easing:"linear"
        });

        setTimeout(()=>{
            balloon.remove();
        },7000);
    }
}