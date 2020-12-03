import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/">My Web App</Link>
            <ul className="navbar-nav mr-auto ml-5 mt-2 mt-lg-0">
                <li className="nav-item mr-4">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item mr-4 dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</Link>
                    <div className="dropdown-menu" aria-labelledby="navDropdownMenu">
                        <Link className="dropdown-item" to="/HTML">HTML</Link>
                        <Link className="dropdown-item" to="/CSS">CSS</Link>
                        <Link className="dropdown-item" to="/React">React</Link>
                        <Link className="dropdown-item" to="/Python">Python</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Posts">Posts</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success"><i className="fas fa-search"></i></button>
            </form>
        </nav>
    );
}

export default Navbar;