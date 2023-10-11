const connection = require('./connection')
const express = require('express');
const {getAllMovies , getSearchedMovie} = require('./apiController')
const cors = require('cors');

const app = express();

app.use(cors());
const port = 3000; 


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/all' , async (req , res)=>{
  try {
    const response = await getAllMovies()
    res.json(response)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
})

app.get('/search' , async (req , res)=>{
  try {
    // console.log(req.query)
    const response = await getSearchedMovie(req.query.movie)
    res.json(response)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
