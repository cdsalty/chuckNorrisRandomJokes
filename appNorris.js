// alert('sanity-check');
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  // what does this function need to do? ()
  const number = document.querySelector('input[type="number"]').value; // don't forget .VALUE
    console.log(number); // verify registering in the DOM before preoceeding        (PASS)




  e.preventDefault();
}