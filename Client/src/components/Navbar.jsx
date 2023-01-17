import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<div className="Navbar fixed-top">
        <div className="container-xl ">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h3 className="animate-charcter"> Rajendra</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0  Navitem">
                            <li className="nav-item">
                                <Link className="nav-link active Navitemb" aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active Navitemb" aria-current="page"to="/skill">Skill</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active Navitemb" aria-current="page" to="/exprience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active Navitemb" aria-current="page" to="/project">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active Navitemb" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active Navitemb" aria-current="page" to="/admin">Admin</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    </div>

    )


}

export default Navbar