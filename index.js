const connection = require('./connection')
const express = require('express');
const {getAllMovies , getSearchedMovie} = require('./apiController')
const cors = require('cors');
const app = express();
app.use(express.json());

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

app.post('/addtofav' , async (req , res)=>{
  const data = req.body
  try {
    const tableName = 'favs'; // Replace with your table name
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      Title VARCHAR(255),
      YEAR VARCHAR(255),
      imdbID VARCHAR(255) PRIMARY KEY,
      Type VARCHAR(255),
      Poster VARCHAR(255)
    )
  `;

  // Create the table if it doesn't exist
  connection.query(createTableQuery, (err) => {
    if (err) {
      console.error(`Error creating the table: ${err}`);
    } else {
      console.log(`Table ${tableName} created or already exists.`);

      

     
      connection.query('INSERT INTO favs SET ?', data, (err, results) => {
        if (err) {
          console.error('Error inserting into the database:', err);
        } else {
          console.log('Inserted new entry with ID:', results.insertId);
        }

       
      });
    }
  });
    res.status(200).json({messg:"done"})
    // console.log(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to Add to favourite' });
  }
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
