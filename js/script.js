// constants
const URL = 'https://www.omdbapi.com/?apikey=53aa2cd6&t='
// state

// cached elelemnt referencese
const title = document.getElementById('title')
const year = document.getElementById('year')
const rated = document.getElementById('rated')

const input = document.querySelector('input[type="text"]') // using an attribute selector syntax
const main = document.querySelector('main');
// const  = document.getElementById('')
// shift option dowe

// event listerners
document.querySelector('form').addEventListener('submit', handleGetData);
// functions


// Using fetch to make http request from the browser to the OMDB web server

// const result = fetch('https://www.omdbapi.com/?apikey=53aa2cd6&t=Blade+Runner')
                                    // identify ourselves as a registered user
                                    // we need to get one, this one was given (apikey=53aa2cd6)
// console.log(result);
// when logged, we see that a promise is there and that promise says that it will complete our request,
// but if it actually does depends"

function handleGetData(e){
    e.preventDefault(); // turns off refresh; the default behavior of form submission
    // gather user input
    const searchTerm = input.value; //gather user input
    if(!searchTerm) return; // if no input provided; do not fetch
    fetch(URL + searchTerm)
    .then((response) =>response.json())
                        // data is sent as json when then also reads it as js
    .then((data) => {
        if(data.Response === 'False'){
            alert('Not Found')
        }
        input.value = ""; // reset the form input element
        render(data); // passing data to render function
    })
    // that data is then read as javascript^
    .catch((error) => {alert(`Sorry, something went wrong`);
        console.log(error);
    })
}
// !!! NO SEMI COLONS ^^^^^^ IT WILL BREAK YOUR CODE
// response, data, error etc are all sent back as an objcet
// promise objects are objects that represnet the eventual success or failure
// which gives us ways to handle success or failure
// .then for success
// .catch for success

function render(data){
    console.log(data);
    main.innerHTML = 
    `
        <img src='${data.Poster}' alt='${data.Title}'>
        <h3>Title</h3><p id="title">${data.Title}</p>
        <p>Year</p><p id="year">${data.Year}</p>
        <p>Rating</p><p id="rated">${data.Rated}</p>
    `;
}

// to create uour own promise
// the set up is as below
const myPromise = new Promise(function(success, failure) {})