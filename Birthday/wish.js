const text = `Happy Birthday! ❤️

From the day we became friends, you've filled my life with happiness, laughter, and unforgettable memories. 
Thank you for always being there. 
On your birthday, I want you to know how much you mean to me. 
You are truly one of the most precious people in my life. ❤️

Thank you for being such a wonderful friend, for all the laughter, memories, and support you've given me.

I hope this year brings you endless happiness, success, good health, and beautiful moments.

May all your dreams come true and may your smile never fade.

Enjoy your special day because you truly deserve all the love and happiness in the world.

Happy Birthday once again! 🎂✨`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();

function nextPage() {
    window.location.href = "memories.html";
}