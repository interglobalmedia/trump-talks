const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
function getTrumpQuote() {
    fetch(endpoint)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayTrumpQuote(data.message);
    })
    .catch(function() {
        console.log(`An error has occurred!`)
    })
}

function displayTrumpQuote(quote) {
    const quoteText = document.querySelector('#quote');
    quoteText.textContent = quote;
}

const quoteButton = document.querySelector('.next');
quoteButton.addEventListener('click', getTrumpQuote);