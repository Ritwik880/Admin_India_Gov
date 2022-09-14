import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
const Header = () => {

    return (
        <header>
            <div className='upperNav'>
                <div> <img className='headerImage1' src="./images/logo.png" alt="logo" />
                    <img className='headerImage2' src="./images/logoContent.png" alt="logo" />
                </div>
                <div>
                    <img className='headerImage3' src="./images/tiger.png" alt="logo" />
                    <img className='headerImage3' src="./images/chasma.png" alt="logo" />
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" className='navbar'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto navItem">
                            <Link to="/">
                                <Nav.Link className='listItems'>
                                    <AiOutlineHome />
                                </Nav.Link>
                            </Link>
                            <Link to="/about">
                                <Nav.Link className='listItems'>ABOUT US</Nav.Link>
                            </Link>
                            <Link to="/career">
                                <Nav.Link className='listItems'>CAREER</Nav.Link>
                            </Link>
                            <Link to="/gallery">
                                <Nav.Link className='listItems'>GALLERY</Nav.Link>
                            </Link>
                            <Link to="/contact">
                                <Nav.Link className='listItems'>CONTACT US</Nav.Link>
                            </Link>
                            <Link to="/login">
                                <Nav.Link className='listItems'>LOGIN</Nav.Link>
                            </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    )
}

export default Header