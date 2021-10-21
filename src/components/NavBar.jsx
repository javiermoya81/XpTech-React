
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">XpTech</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Equipos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Componentes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Perifericos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" >Accesorios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;