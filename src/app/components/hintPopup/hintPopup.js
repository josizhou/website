import styles from './hintPopup.module.scss';
import closeIcon from '../../../assets/closeIcon.svg';
import Image from 'next/image';

export default function HintPopup({setIsHintOpen}) {
    return (
        <div className={styles.main}>
            <div className={styles.overlay} onClick={() => setIsHintOpen(false)}/>
            <div className={styles.container}>
                <div className={styles.closeButton} onClick={() => setIsHintOpen(false)}>
                    <Image src={closeIcon} alt="Close Button" width={15} height={15} draggable={false}/>
                </div>
                <p className={styles.title}>You&apos;ve discovered the hidden popup! <span className={styles.emoji}>&#127881;</span></p>
                <h3>Have a great day!</h3>
            </div>
        </div>
    )
}