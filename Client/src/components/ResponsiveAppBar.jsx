import { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import './navbar.css';

function BasicExample() {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return (
        <>


            <Navbar className={`active ${show && 'hidden'}`}   >
                <Container >
                    <Navbar.Brand href="#home">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h3 className="animate-charcter"> Rajendra</h3>
                                </div>
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto NavColour">
                            <Nav.Link className=" Navolour" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className=" Navolour" as={Link} to="/skill">Skill</Nav.Link>
                            <Nav.Link className=" Navolour" as={Link} to="/exprience">Experience</Nav.Link>
                            <Nav.Link className=" Navolour" as={Link} to="/contact">Contact</Nav.Link>
                            <NavDropdown className=" navolour" title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>


    );
}

export default BasicExample;