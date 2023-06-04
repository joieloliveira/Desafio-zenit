import React, { useContext, useState } from 'react';
import styles from './style.module.scss'

import { Modal, ModalBody } from 'reactstrap';

import CardsInnerPage from '../CardsInnerPage';

import userImg from '../../img/site/avatar2.png';
import petImg from '../../img/site/image1.png';
import heartSave from '../../img/site/heartSave.png';
import cross from '../../img/site/cross.png';

import { ContextMainBody } from '../../Context/MainBodyContext';

import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector;

type itensDadosSiteProps = {
  userDados: any
}

function InnerPage(props:any) {

  const dadosPet = useAppSelector((state: itensDadosSiteProps) => [state.userDados])

  const {
    modal, setModal
  } = useContext(ContextMainBody);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={toggle} fullscreen>
          <ModalBody>
            <div className={styles.InnerPageBox}>
              <div>
                <p>Baxter - French Bulldoog, 5-year-old, 12kgs</p>
                <button><img src={cross} alt="cross.png" onClick={toggle}/></button>
              </div>
              
              <div>
                <p><img src={userImg} alt="userImg" />Photography by John Wick</p>
                <img src={heartSave} alt="heartSave" />
              </div>

              <img src={petImg} alt="petImg" />
              <p>You may also like</p>

              <div>
                {dadosPet[0].petsSimilar.map((dado: any) => (
                  <CardsInnerPage like={dado.like} image={dado.image} petName={dado.petName} petDescription={dado.petDescription} key={dado.petName} />
                ))}
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default InnerPage;