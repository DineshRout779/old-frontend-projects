let btn = document.getElementById("more");
let quote__text = document.querySelector(".quote__text p");
let quote_author = document.querySelector(".quote__author");
let bgcolor = document.querySelector(".container");
let body_bgcolor = document.body;

const quotes = [
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King",
        bgcolor: "#037df9",
        body_bgcolor: "#b9be0b"
    },
    {
        quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
        author: "Mark Caine",
        bgcolor: "#54494b",
        body_bgcolor: "#e3d081"
    },
    {
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author: "Helen Keller",
        bgcolor: "#D62828",
        body_bgcolor: "#003049"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        author: "Mark Twain",
        bgcolor: "#242423",
        body_bgcolor: "#CFDBD5"
    },
    {
        quote: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
        author: "Audre Lorde",
        bgcolor: "#03045E",
        body_bgcolor: "#90E0EF"
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
        bgcolor: "#011627",
        body_bgcolor: "#FDFFFC"
    },
    {
        quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        author: "David Brinkley",
        bgcolor: "#118AB2",
        body_bgcolor: "#EF476F"
    },
    {
        quote: "Those who dare to fail miserably can achieve greatly.",
        author: "John F. Kennedy",
        bgcolor: "#006D77",
        body_bgcolor: "#E29578"
    },
    {
        quote: "I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
        author: "Herbert Bayard Swope",
        bgcolor: "#03071E",
        body_bgcolor: "#FFBA08"
    }
]

window.onload = function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote__text.textContent = quotes[random].quote;
    quote_author.textContent = "--" + quotes[random].author;
    bgcolor.style.backgroundColor = quotes[random].bgcolor;
    body_bgcolor.style.backgroundColor = quotes[random].body_bgcolor;
    btn.style.backgroundColor = quotes[random].bgcolor;
}

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let random = Math.floor(Math.random() * quotes.length);
    quote__text.textContent = quotes[random].quote;
    quote_author.textContent = "--" + quotes[random].author;
    bgcolor.style.backgroundColor = quotes[random].bgcolor;
    body_bgcolor.style.backgroundColor = quotes[random].body_bgcolor;
    btn.style.backgroundColor = quotes[random].bgcolor;
})
