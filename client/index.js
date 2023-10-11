const searchBar = document.getElementById('mysearch-input')
const searchBtn = document.getElementById('search-submit-btn')

searchBtn.addEventListener('click' , updateResponse)

async function updateResponse(){
    var searchString = searchBar.value 
    console.log(searchString)

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      };
      const response = await fetch(`http://localhost:3000/search?movie=${searchString}`, options)
      
      const res = await response.json()
      const list = res.Search
    
      console.log(list)

      
      
}