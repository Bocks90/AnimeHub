// Api path

const base_url = "https://api.jikan.moe/v3";

function searchAnime(event) {

    event.preventDefault()

    const form = new FormData(this);
    const query = form.get("search")

    fetch('${base_url}/search/anime?q=${query}&page=1')
      .then(res=>res.json())
      .then(updateDom)
      .catch(err=>console.warn(err.message));
}

  function updateDom(data) {
      searchResults.innerHTML = data.results
      .sort((a,b)=>a.episodes-b.episodes)
      .forEach(anime=>console.log(anime));
  }

  function pageLoaded(){
      const form = document.getElementById('search_form');
      form.addEventListener("submit", searchAnime);
  }

 


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