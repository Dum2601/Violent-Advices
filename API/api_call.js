// Usada: Advice Slip
// https://api.adviceslip.com/#endpoint-random

// Random advice
// Note: Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.

// HTTP Method	GET
// URL	https://api.adviceslip.com/advice
// Description	Returns a random advice slip as a slip object.
// Parameters	
// callback
// string To define your own callback function name and return the JSON in a function wrapper (as JSONP), add the parameter callback with your desired name as the value.


const textHtml = document.querySelector('#text')
const url = 'https://api.adviceslip.com/advice'

function fetchAdvice() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            textHtml.innerHTML = data.slip.advice
        })
        .catch(error => console.error(error))
}

fetchAdvice()
setInterval(fetchAdvice, 10000)

