import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { useState } from 'react'
import Pagination from './Pagination'

const Movies = ({handleAddtoWatchList, handleRemoveFromWatchList, watchlist}) => {
    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1)

    const handlePrev = () => {
        if (pageNo === 1) {
            setPageNo(1)
        }
        else {
            setPageNo(pageNo - 1)
        }
    }

    const handleNext = () => {
        setPageNo(pageNo + 1)
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b8016c28418ca2a5c8c022237775db96&language=en-US&page=${pageNo}`).then(function (response) {
            setMovies(response.data.results)
        })
    }, [pageNo])
  return (
    <div className='p-1 font-[Arial]'>
        <div className='text-l m-5 font-bold text-center'>
            Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around gap-6'>
            {movies.map((movieObj) => {
                return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>
            })}
            
        </div>
        <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  )
}

export default Movies



// https://api.themoviedb.org/3/movie/popular?api_key=b8016c28418ca2a5c8c022237775db96&language=en-US&page=2