import React, { useContext } from 'react';
import styles from './style.module.scss'

import NavDropdown from 'react-bootstrap/NavDropdown';

import searchImg from '../../img/site/search.png';

function Search() {

  return (
    <div className={styles.searchBG}>
      <div className={styles.searchBox}>
        <button><img src={searchImg} alt={searchImg} /></button>
        <input type="text" />
        <NavDropdown
          className={styles.navDropdown}
          title="All Pets"
        >
          <NavDropdown.Item href="#action/3.1">Option1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Option2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Option3</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
}

export default Search;
