import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut =() =>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <Container className='my-3'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto align-items-center">
                            <Link to="/category/0" className='text-decoration-none text-secondary mx-2'>Home</Link>
                            <Link to="/about" className='text-decoration-none text-secondary mx-2'>About</Link>
                            <Link to="/career" className='text-decoration-none text-secondary mx-2'>Career</Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            {user && <FaUserCircle className='fs-2' />}
                            {user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> : <Link to="/login"><Button variant="secondary">Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;