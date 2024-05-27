

var quotes = [

    {
        quote: " You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "-- Dr. Seuss",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "-- Mark Twain",
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "-- Oscar Wilde",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "-- Mahatma Gandh",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        author: "-- Albert Einstein",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "-- Marcus Tullius Cicero",
    },
    {
        quote: "So many books, so little time.",
        author: "-- Frank Zappa",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "-- Oscar Wilde",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "-- Mark Twain",
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "-- Elbert Hubbard",
    },

];



var x;
var y;
var displayedQuotes = [];


function getQuotes() {

    if (displayedQuotes.length == quotes.length) {
        displayedQuotes = [];
    }




    do {
        x = Math.floor(Math.random() * quotes.length);

    } while (x == y || displayedQuotes.includes(x));

    y == x

    console.log(x);
    displayedQuotes.push(x);

    document.getElementById("quote").innerHTML = quotes[x].quote;

    document.getElementById("author").innerHTML = quotes[x].author;



}