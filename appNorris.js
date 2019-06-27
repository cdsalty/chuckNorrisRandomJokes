// alert('sanity-check');
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  // what does this function need to do? (): take the dynamic number being passed in
  const number = document.querySelector('input[type="number"]').value; // don't forget .VALUE
    // console.log(number); // verify registering in the DOM before preoceeding        (PASS)
  
    const xhr = new XMLHttpRequest(); // creating our ajax request to prepare it.

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if(this.status === 200) {
      // const response = this.responseText; // -----> returns a JSON string. to fix, we parse this instead
      const response = JSON.parse(this.responseText); // this will return an object from the json string originally

      let output = '';

      if(response.type === 'success'){ // if success, what to do? Loop through each iteration(joke), inside the output. We want to append to it. Use forEach()
        // sometimes you can go with response.forEach but since each API works differently. In our console, you see what we need to loop through is atactually the key, 'value'
        response.value.forEach(function(joke){ // forEach joke
          output +=  `<li>${joke.joke}</li>`; // under the index, it has catagories, id, joke. We need to joke so I had to do joke.joke
        });
      } else {  
            // += to append; not delete and add but to take what's there and append to it.
        output += `<li>opps... something might have went wrong</li>`;
      }

      // we need to now insert the html that is outputted: It will be output on the html with the class of jokes
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}