import React, { useContext } from 'react';
import './style.sass';

import HeaderBar from '../../components/HeadeBar';
import Search from '../../components/Search';
import MainBody from '../../components/MainBody';
import Footer from '../../components/Footer';

function Home() {

  return (
    <>
      <HeaderBar />
      <Search />
      <MainBody />
      <Footer />
    </>
  );
}

export default Home;
