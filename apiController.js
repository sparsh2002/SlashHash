const axios = require('axios');

async function getAllMovies(){
    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=4a7ee0b3')
    return response.data
}

async function getSearchedMovie(movie){
    console.log(movie)
    const response = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=4a7ee0b3`)
    return response.data
}

async function getMovieById(id){
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=4a7ee0b3`)
    return response.data
}
module.exports = {getAllMovies , getSearchedMovie, getMovieById}