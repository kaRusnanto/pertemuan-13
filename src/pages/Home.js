import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import GetDataTrending from "../utils/networks/GetDataTrending";

  const Home = () => {

    const [movies, setMovies] = useState([])

    const getData = async () => {
        const data = await GetDataTrending(1)
        await setMovies(data.results)
    }

    useEffect(
        function () {
            getData()
        }, []
    )


    return (
        <div>
        <Hero />
        <Movies  item={movies} setItem={"Trending Movies"}  />
       
        </div>
    );
}

export default Home;