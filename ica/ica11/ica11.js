const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

let trump = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    //console.log('test click worked');
    let text = await fetch(trump);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response['message']);
    //.then(text => text.text());
    //console.log(text['message']);
    displayQuote(json_response['message']);
    }

function displayQuote(x) {
    const quoteBox = document.querySelector('#js-quote-text');
    //console.log('display quote working');
    //let textMessage = document.createTextNode(x);

    // quoteBox.appendChild(textMesssage);
    document.getElementById('js-quote-text').textContent = x;
}

getQuote(); 