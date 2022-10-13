import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <div className='upperNav'>
                <div> <img className='headerImage1' src="./images/leftLogo.png" alt="logo" />

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


                            <Nav.Link className='listItems' onClick={() => navigate('/')}>News</Nav.Link>

                            <Nav.Link className='listItems' onClick={() => navigate('/paid-candidate')}>Paid Candidate</Nav.Link>

                            <Nav.Link className='listItems' onClick={() => navigate('/unpaid-candidate')}>UnPaid Candidate</Nav.Link>
                            <Nav.Link className='listItems' onClick={() => navigate('/contact')}>Contact</Nav.Link>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    )
}

export default Header