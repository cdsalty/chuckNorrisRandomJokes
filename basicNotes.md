
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


    * call our ajax request by calling xhr = XMLHttpReqest()
