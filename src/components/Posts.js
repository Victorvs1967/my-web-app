import { useParams } from 'react-router-dom';

const Posts = () => {

    let { id } = useParams();

    return (
        <div className="container mt-5">
            <h2>Item: {id}</h2>
        </div>
    )
}

export default Posts;