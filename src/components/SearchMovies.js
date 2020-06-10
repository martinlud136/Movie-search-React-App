import React from 'react';

function SearchMovies(){
    return(
        <form className='form'>
            <label className='label' htmlFor='query'>Movie Search</label>
            <input className='input' type='text' name='query' placeholder='i.e Jurasic Park' />
            <button className='button' type='submit'>Search</button>
        </form>
    )
}

export default SearchMovies