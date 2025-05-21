'use client'
import styles from './accordionElement.module.css';
import Image from "next/image";
import downArrow from '../../../assets/downArrow.svg';
import upArrow from '../../../assets/upArrow.svg';
import { useState } from 'react';

export function AccordionElement ({title, content = null, bulletPoints = null, imageSrc = null, imageAlt = null}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.main}>
            <section className={styles.title} onClick={() => {setIsOpen(!isOpen)}}>
                <h3>{title}</h3>
                <Image className={styles.icon} src={isOpen ? upArrow : downArrow} alt={isOpen ? 'upArrow' : 'downArrow'} height={25} width={25} draggable={false}/>
            </section>
            <section className={isOpen ? styles.content : styles.hidden}>
                <div className={styles.contentDiv}>
                    {content}
                    { bulletPoints && (
                        <ul className={styles.bullets}>
                            {bulletPoints.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
                { imageSrc &&
                    <Image className={styles.image} src={imageSrc} alt={imageAlt} height={100} width={100} draggable={false}/>
                }
            </section>
        </div>
    )
}