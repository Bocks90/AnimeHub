// Selected elements from Dom 

const buttonElement = document.querySelector('#search')
const inputElement = document.querySelector('#inputValue')

buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    console.log('value:', value);
}
// add preventDefault to make sure the page doesnt refresh once button is clicked
// input text appears on console log. This shows the value is being inputed into the console
// console.log to test click 