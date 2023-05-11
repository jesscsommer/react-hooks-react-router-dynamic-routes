import { useParams } from "react-router-dom"

const MovieShow = ({ movies }) => {
    const { movieId } = useParams()
    console.log(movieId)


    return (
        <div>
            <h3>{movies[movieId].title}</h3>
        </div>
    )
}

export default MovieShow