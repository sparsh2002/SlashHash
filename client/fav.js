async function getFavs(){
    

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      };
      const response = await fetch(`http://localhost:3000/getfavs`, options)
      
      const res = await response.json()
      console.log(res)
      const list = res
      
      console.log(list)

      const listDiv = document.getElementById('result-list')

      for(var i=0 ; i<list.length ; i++){
        const mainBox = document.createElement('div')
        const box = document.createElement('div')
        const title  = document.createElement('h4')
        const year = document.createElement('h5')
        const image = document.createElement('img')
        const sideBox = document.createElement('div')

        
        title.innerText = list[i].Title
        year.innerText = list[i].Year
        image.src = list[i].Poster
        image.width = 100
        image.height = 150
        sideBox.appendChild(title)
        sideBox.appendChild(year)
        

        box.appendChild(image)
        mainBox.appendChild(box)
        mainBox.appendChild(sideBox)
        mainBox.classList.add('inner-box-list')
        sideBox.classList.add('side-box-list')

        listDiv.appendChild(mainBox)
      }
      
}

getFavs()