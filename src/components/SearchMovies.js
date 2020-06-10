import React from 'react';

function SearchMovies(){

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log('searching')

        const query = 'Jurasic'

        const url =`https://api.themoviedb.org/3/search/movie?api_key=3afccc5e282dbb935354bbcff3754357&language=en-US&query=${query}&page=1&include_adult=false`

        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        }catch(err){
            console.log('errooor')
        }

    }

    return(
        <form className='form' onSubmit={searchMovies}>
            <label className='label' htmlFor='query'>Movie Search</label>
            <input className='input' type='text' name='query' placeholder='i.e Jurasic Park' />
            <button className='button' type='submit'>Search</button>
        </form>
    )
}

export default SearchMovies