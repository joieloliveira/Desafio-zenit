import React, { useContext } from 'react';
import styles from './style.module.scss'

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import cross from '../../img/site/cross.png'
import avatar2 from '../../img/site/avatar2.png';

import { ContextHeadeBar } from '../../Context/HeadeBarContext';
import { ContextAuth } from '../../Context/AuthContext';

function OffCanvas() {

    const {
        setOffCanvas, offCanvas,
    } = useContext(ContextHeadeBar);

    const {
        signUp, handleLogin, handleLogout, authenticated
    } = useContext(ContextAuth);

    const HandleLogout = () => handleLogout();
    const HandleLogin = () => handleLogin();
    const HandlesignUp = () => signUp();

    const NotAuthenticated = () => (
        <>
            <button onClick={handleShow}><img src={cross} alt="cross" id='cross' /></button>
            <p>About</p>
            <p>Contact</p>
            <hr />
            <button onClick={HandleLogin}>Sign In</button>
            <p>Not a member? <span>Sign up now</span></p>
        </>
    )

    const Authenticated = () => (
        <>
            <button onClick={handleShow}><img src={cross} alt="cross" id='cross' /></button>
            <p>About</p>
            <p>Contact</p>
            <hr />
            <div className={styles.offcanvasBodyAvatar}>
                <img src={avatar2} alt="avatar2" id='avatar2' />
                <div>
                    <p>John Wick</p>
                    <span>itsmejohnwick@gmail.com</span>
                </div>
            </div>
            <hr />
            <p onClick={HandleLogout}>Sign Out</p>
        </>
    )

    const handleShow = () => setOffCanvas(!offCanvas);

    return (
        <>
            <Offcanvas show={offCanvas} onHide={handleShow}>
                <div className={styles.offcanvasBody}>
                    {authenticated&&<Authenticated />}
                    {!authenticated&&<NotAuthenticated />}
                </div>
            </Offcanvas>
        </>
    );
}

export default OffCanvas