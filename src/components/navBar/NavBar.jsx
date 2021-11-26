
import CartsWidget from '../cartsWidget/CartsWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" >XpTech</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/'} className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/category/monitor'} className='nav-link'>Monitores</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/category/mouse'} className='nav-link'>Mouses</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/category/teclado'} className='nav-link'>Teclados</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to={"/cart"} className='text-decoration-none'> <CartsWidget/> </Link>
                
            </nav>
        </div>
    );
}

export default NavBar;