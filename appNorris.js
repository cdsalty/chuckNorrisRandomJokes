// alert('sanity-check');
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  // what does this function need to do? ()
  const number = document.querySelector('input[type="number"]').value; // don't forget .VALUE
    // console.log(number); // verify registering in the DOM before preoceeding        (PASS)
  const xhr = new XMLHttpRequest(); // creating our ajax request to prepare it.

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


  e.preventDefault();
}