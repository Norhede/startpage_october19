// Array of quotes
var quotes =
[
    "Motivational quote #1",
    "Motivational quote #2",
    "Motivational quote #3",
    "Motivational quote #4",
    "Motivational quote #5",
];

function getRandomQuote() {
    var element = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[element];
}