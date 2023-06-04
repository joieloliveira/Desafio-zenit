import React, { useContext } from 'react';
import styles from './style.module.scss'

import heartPink from '../../img/site/heartPink.png';
import heartGray from '../../img/site/heartGray.png';
import heartSave from '../../img/site/heartSave.png';
import image1 from '../../img/site/image1.png';
import image2 from '../../img/site/image2.png';
import image3 from '../../img/site/image3.png';
import image4 from '../../img/site/image4.png';
import image5 from '../../img/site/image5.png';
import image6 from '../../img/site/image6.png';
import image7 from '../../img/site/image7.png';
import image8 from '../../img/site/image8.png';
import image9 from '../../img/site/image9.png';
import image10 from '../../img/site/image10.png';
import image11 from '../../img/site/image11.png';
import image12 from '../../img/site/image12.png';
import image13 from '../../img/site/image13.png';
import image14 from '../../img/site/image14.png';
import image15 from '../../img/site/image15.png';

function CardsInnerPage(props: any) {

  return (
    <div className={styles.CardsInnerPage} {...props}>
      <img src={
        props.like == 'heartPink' && heartPink ||
        props.like == 'heartGray' && heartGray ||
        heartSave
      } alt={'imgHeart'} />
      <img src={
        props.image == 'image1' && image1 || props.image == 'image2' && image2 || props.image == 'image3' && image3 || props.image == 'image4' && image4 || props.image == 'image5' && image5 ||
        props.image == 'image6' && image6 || props.image == 'image7' && image7 || props.image == 'image8' && image8 || props.image == 'image9' && image9 || props.image == 'image10' && image10 ||
        props.image == 'image11' && image11 || props.image == 'image12' && image12 || props.image == 'image13' && image13 || props.image == 'image14' && image14 || image15
        } alt={"imgCATendDOG"} />
      <div className={styles.CardsInnerPageAtibut}>
        <p>{props.petName}</p>
        <span>{props.petDescription}</span>
      </div>
    </div>
  );
}

export default CardsInnerPage;
