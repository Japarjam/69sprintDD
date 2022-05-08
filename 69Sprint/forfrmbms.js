BMoon-frontend/components/BMS/bms.js 

import React from 'react';
import {Button} from '../../components/button/index';
import styles from './bms.module.css';
import Image from 'next/image';
import Logo from '../../public/images/bmslogo.png';
const appLink = '/app/new-game';
import {Element} from 'react-scroll';

export function 69Sprint(){
    return(
        <Element className={styles.sprint}>
                <div className="card text-center bg-transparent">
            <div className="card-body">
                <div className={`${styles.header}`}>
                <Image alt="logo" src={Logo}/>		NEED LOGO FOR 69 SPRINT
                <h5 className="text-white">69Sprint</h5>
                </div>
                
                <p className="card-text text-white">69Sprint allows users to predict the Marketcap rankings of the 6th through 9th top tokens at the close of a three day range, again with the winner voting for the recipient charity.</p>
                <Button href={appLink}
                                        btnClassName={styles.btnWrapper}
                                        linkClassName={styles.btnText}
                                    >Play Game</Button>
  </div>
</div>
        </Element>
        
    )
}






