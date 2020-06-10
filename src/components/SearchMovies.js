import React, {useState} from 'react';
import MovieCard from './MovieCard'

function SearchMovies(){

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    
    const searchMovies = async (e) => {
        e.preventDefault()

        const query = 'Jurasic'

        const url =`https://api.themoviedb.org/3/search/movie?api_key=3afccc5e282dbb935354bbcff3754357&language=en-US&query=${query}&page=1&include_adult=false`

        try{
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
            console.log(movies)
        }catch(err){
            console.log('errooor')
        }

    }

    return(
        <>
        <form className='form' onSubmit={searchMovies}>
            <label className='label' htmlFor='query'>Movie Search</label>
            <input 
                className='input' 
                type='text' 
                name='query' 
                placeholder='i.e Jurasic Park'
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                />
            <button className='button' type='submit'>Search</button>
        </form>
        <div className= 'card-list'>
            {movies.filter(movie => movie.poster_path).map(movie=>(
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </>
    )
}

export default SearchMovies