const Navbar = () => (
    <>
    <nav className="navbar navbar-exand navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#home">My Web App</a>
        <ul className="navbar-nav flex-row mr-auto ml-5 mt-2 mt-lg-0">
            <li className="nav-item mr-4">
                <a className="nav-link" href="#link">Home</a>
            </li>
            <li className="nav-item mr-4 dropdown">
                <a className="nav-link dropdown-toggle" href="#link" id="navDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                <div className="dropdown-menu" aria-labelledby="navDropdownMenu">
                    <a className="dropdown-item" href="#link">HTML</a>
                    <a className="dropdown-item" href="#link">CSS</a>
                    <a className="dropdown-item" href="#link">React</a>
                    <a className="dropdown-item" href="#link">Python</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#link">Posts</a>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success">Search</button>
        </form>
    </nav>
    </>
);

export default Navbar;