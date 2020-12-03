import { Link } from 'react-router-dom'

const SideMenu = () => (
    <div className="card">
        <div className="card-header">Side Menu</div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><Link className="card-link" to="/First">Item First</Link></li>
            <li className="list-group-item"><Link className="card-link" to="/Second">Item Second</Link></li>
            <li className="list-group-item"><Link className="card-link" to="/Third">Item Third</Link></li>
            <li className="list-group-item"><Link className="card-link" to="/Fourth">Item Fourth</Link></li>
        </ul>
    </div>
);

export default SideMenu;