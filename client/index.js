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

      const listDiv = document.getElementById('result-list')

      for(var i=0 ; i<list.length ; i++){
        const mainBox = document.createElement('div')
        const box = document.createElement('div')
        const title  = document.createElement('h4')
        const year = document.createElement('h5')
        const image = document.createElement('img')
        const sideBox = document.createElement('div')

        const addToFavBtn = document.createElement('button')
        addToFavBtn.innerText = 'Add To Favourite'
        addToFavBtn.classList.add('btn')
        addToFavBtn.classList.add('btn-primary')
        addToFavBtn.setAttribute("name" ,list[i].imdbID)
        // console.log(addToFavBtn.getAttribute('name'))
        addToFavBtn.addEventListener('click' ,async function(){
            addToFavouriteFunction(addToFavBtn.name)
        })
        title.innerText = list[i].Title
        year.innerText = list[i].Year
        image.src = list[i].Poster
        image.width = 100
        image.height = 150
        sideBox.appendChild(title)
        sideBox.appendChild(year)
        sideBox.appendChild(addToFavBtn)

        box.appendChild(image)
        mainBox.appendChild(box)
        mainBox.appendChild(sideBox)
        mainBox.classList.add('inner-box-list')
        sideBox.classList.add('side-box-list')

        listDiv.appendChild(mainBox)
      }
      
}

async function addToFavouriteFunction(id){
    console.log(id)
}