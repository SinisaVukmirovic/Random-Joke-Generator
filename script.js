
// // selecting the DOM elements
let btn = document.querySelector('.btn');
let joke = document.querySelector('.joke');

/////////////////////////////////////////////////////////////////////
//  SOLUTION USING AJAX CALL FIRST
//////////////////////////////////////////////////////////////////////

// // adding click event on button with a function after the event
// btn.addEventListener('click', function() {
//     // calling a new AJAX instance
//     const ajax = new XMLHttpRequest();

//     // handling the open method
//     ajax.open('GET', 'https://api.chucknorris.io/jokes/random', true);

//     // after getting the information back
//     ajax.onload = function() {
//         if (this.status === 200) {
//             // parsing the data into JSON format
//             const data = JSON.parse(this.response);

//             joke.textContent = data.value;
//         }
//     }

//     // a callback function for handling error
//     ajax.onerror = function() {
//         console.log('There was an error!');
//     }

//     // sending the AJAX request
//     ajax.send();

// });

///////////////////////////////////////////////////////////////////////
//  SOLUTON USING FETCH()
//////////////////////////////////////////////////////////////////////

//  Adding event listener for click on button and a function after that
btn.addEventListener('click', () => {
    // first fetching the data from the API
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.text())
        .then(data => {
            let dataJson = JSON.parse(data);

            joke.textContent = dataJson.value;
        })
        .catch(error => console.log(error));
});
