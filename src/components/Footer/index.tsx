import React, { useContext } from 'react';
import styles from './style.module.scss'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Footer() {

  return (
    <div className={styles.footerBG}>
      <div className={styles.footerBox}>
        <div className={styles.footerTop}>
          <div className={styles.footerHashtag}>
            <span>#puppies</span>
            <span>#catlovers</span>
            <span>#kitten</span>
            <span>#doglovers</span>
            <span>#meow</span>
            <span>#puppylove</span>
          </div>
          <div className={styles.footerSocial}>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
        <div className={styles.footerDown}>
          <p>18,313,224 <span>pets</span> for you</p>
          <p>© 2022 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
