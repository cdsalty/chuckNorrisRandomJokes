// alert('sanity-check');
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  // what does this function need to do? (): take the dynamic number being passed in
  const number = document.querySelector('input[type="number"]').value; // don't forget .VALUE
    // console.log(number); // verify registering in the DOM before preoceeding        (PASS)
  
    const xhr = new XMLHttpRequest(); // creating our ajax request to prepare it.

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if(this.status === 200){
      // const response = this.responseText; // -----> returns a JSON string. to fix, we parse this instead
      const response = JSON.parse(this.responseText); // this will return an object from the json string originally
      console.log(response);
    }
  }

  xhr.send();

  e.preventDefault();
}