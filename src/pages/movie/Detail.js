import React, { useEffect, useState } from "react";
import GetDetailMovie from "../../utils/networks/GetDetailMovie";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams()
    const [ movie, setMovie ] = useState({})
    const [ genres, setGenres ] = useState([])


    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}` 

    const getDetail = async(id) => {
        const data = await GetDetailMovie(id)
        await setMovie(data)
        await setGenres(data.genres)
    }

    useEffect(() => {
        getDetail(id)
    }, [id]);

    console.log(movie);

    return (
        <div>
            <img src={url_image} alt="" />
            <h1>{movie.title}</h1>
            <h3>{movie.tagline}</h3>
            <h3>{movie.release_date}</h3>
            {
                genres.map(
                    function(item){
                        return(
                            <p>{item.name}</p>
                        )
                    }
                )
            }
        </div>
    );
}

export default Detail;