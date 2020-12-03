import { useParams } from 'react-router-dom';

const Posts = () => {

    let { id } = useParams();

    return (
        <div className="card">
            <div className="card-header">{id}</div>
            <div className="card-body">
                <h4 className="card-title">{id}</h4>
                <p className="card=text">
                This HTML file is a template.
                If you open it directly in the browser, you will see an empty page.
                You can add webfonts, meta tags, or analytics to this file.
                The build step will place the bundled scripts into the tag.
                To begin the development, run `npm start` or `yarn start`.
                To create a production bundle, use `npm run build` or `yarn build`.
                </p>
            </div>
        </div>
    )
}

export default Posts;