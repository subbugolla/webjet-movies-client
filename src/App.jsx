import { useEffect, useState } from 'react'
import Spinner from './components/Spinner.jsx'
import MovieCard from './components/MovieCard.jsx'

const API_BASE_URL = 'https://localhost:44342/api';

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
}

const App = () => {

    const [movieList, setMovieList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const endpoint = `${API_BASE_URL}/movieworld/get-best-priced-movies`


            const response = await fetch(endpoint, API_OPTIONS);

            if(!response.ok) {
                throw new Error('Failed to fetch movies');
            }

            const data = await response.json();

            if(data.Response === 'False') {
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }
            console.log(data);
            setMovieList(data || []);

        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <main>
            <div className="pattern"/>

            <div className="wrapper">
                <header>
                    <img src=".\src\assets\webjet-flights-logo.png" alt="Webjet Banner" />
                    <h1>Cheapest <span className="text-gradient">Movies</span> You&#39;ll Enjoy</h1>

                </header>
<br />
<br />
                <section className="all-movies">

                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <ul>
                            {movieList.map((movie) => (
                                <MovieCard key={movie.ID} movie={movie} />
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    )
}

export default App