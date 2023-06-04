import React, { useContext } from 'react';
import styles from './style.module.scss'

import { Link, useNavigate  } from 'react-router-dom';

import { ContextHeadeBar } from '../../Context/HeadeBarContext';
import { ContextAuth } from '../../Context/AuthContext';
import OffCanvas from '../OffCanvas';

import logo from '../../img/site/logo.png';
import heart from '../../img/site/Heart.png';
import avatar from '../../img/site/avatar.png';
import arrow_d from '../../img/site/arrow_d.png';
import mobileBtn from '../../img/site/MobileBtn.png';

function HeaderBar() {

  const navigate = useNavigate();

  const {
    setOffCanvas, offCanvas,
  } = useContext(ContextHeadeBar);

  const {
    signUp, handleLogin, handleLogout, authenticated
  } = useContext(ContextAuth);

  const handleShow = () => setOffCanvas(!offCanvas);
  const HandleLogin = () => navigate ("/login");
  const HandleLogout = () => handleLogout();

  return (
    <>
      <OffCanvas />
      <div className={styles.HeaderBarBG}>
        <div className={styles.HeaderBarBox}>
          <div className={styles.HeaderBarLogo}>
            <button onClick={handleShow}><img src={mobileBtn} alt="mobileBtn" id='mobileBtn' /></button>
            <img src={logo} alt="logo" id='logo' />
            <p>Finder Pet</p>
            <span>let's explore your pet!</span>
          </div>
          <div className={styles.HeaderBarLiks}>
            <div>
              <Link to="#" >About</Link>
              <Link to="#" >Contact</Link>
            </div>
            <button><img src={heart} alt="heart" id='heart' /> 99999 PETS</button>
            {authenticated && <button onClick={HandleLogout}>
              <img src={avatar} alt="avatar" id='avatar' />
              <img src={arrow_d} alt="arrow_d" id='arrow_d' />
            </button>}
            {!authenticated && <button type='button' onClick={HandleLogin}>Login</button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
