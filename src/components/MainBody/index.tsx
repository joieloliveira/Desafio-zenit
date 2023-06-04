import React, { useContext } from 'react';
import styles from './style.module.scss'

import Cards from '../Cards';
import InnerPage from '../InnerPage';

import { useDispatch, useSelector } from "react-redux";
import { log } from 'console';

type itensDadosSiteProps = {
  userDados: any
}

export const useAppSelector = useSelector;

function MainBody() {

  const dadosPet = useAppSelector((state: itensDadosSiteProps) => [state.userDados])

  return (
    <>
      <InnerPage />
      <div className={styles.mainbodyBG}>
        <div className={styles.mainbodyBox}>
          <h3>Cute cat and dog</h3>
          <p>25,846 <span>results found for this search</span></p>
          <div className={styles.mainbodyCards}>
            {dadosPet[0].pets.map((dado: any) => (
              <Cards like={dado.like} image={dado.image} petName={dado.petName} petDescription={dado.petDescription} key={dado.petName}/>
            ))}
          </div>
          <div className={styles.mainbodyButton}>
            <button>Show more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBody;
