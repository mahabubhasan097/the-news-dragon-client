import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='mb-3 w-100'><FaGoogle className='me-2' /> Login with Google</Button><br />
            <Button variant="outline-secondary" className='w-100'><FaGithub className='me-2' />Login with Github</Button>

            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='me-3'/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-3'/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-3'/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='my-4'> 
                <img src={bg} className='w-100' alt="" />
            </div>
        </div>
    );
};

export default RightNav;