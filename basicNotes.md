
Website that we are using as our API to pull the jokes from
http://www.icndb.com/api/


1. start by creating a varaible and assigning a button to an event listener
- assign ('click', getJokes)
  ----*  document.querySelector('.get-jokes').addEventListener('click', getJokes);  *----

- next, create and define the getJokes function; make sure to pass in the event
  - getJokes function:
    - create a varaible and assign it to input, specifically the number input type
    ** important, we are wanting to retain the actual value of the number entered so make sure to use .VALUE
        

2. Follow the basic setup:
  - const xhr = XMLHttpRequest();
  - xhr.open()
  - xhr.onLoad
  - xhr.send()
    - - follow-up the end of the function with e.preventDefault()


    * call our ajax request by calling xhr = XMLHttpReqest(); (** CREATES THE OBJECT **)

    * xhr.open('method type', address/destination, true) true for asyncronous

    Next, what do you want to do when you get this data?
      - this will come onLoad... 
        - xhr.onload = function() {
            if(this.status === 200) { // this is referring to the xhr object
              // define variable and set it equal to this.responseText.
                  - review: responseText
              
              Code: xhr.onload = function () {
                if(this.status === 200){
                  const response = this.responseText;
                  console.log(response);    ------> Returns a JSON.string. Need to call on parse (vs. stringify)        - WHY? Because we need to turn it into an object so we can call on                     it, loop through it, etc.
                  }
                }   
-------------------------------------------------------------------------------------------------------
THE BASICS SETUP TO RETRIEVE DATA IN CONSOLE:


document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value; 
  
  const xhr = new XMLHttpRequest(); 

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if(this.status === 200){
      const response = JSON.parse(this.responseText); 
      console.log(response);
    }
  }

  xhr.send();

  e.preventDefault();
}
-------------------------------------------------------------------------------------------------------

Now, to display the data being returned: 