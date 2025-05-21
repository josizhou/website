import styles from './sandwichMenu.module.css';
import closeIcon from '../../../assets/closeIcon.svg';
import Image from 'next/image';

export default function SandwichMenu ({setIsMenuOpen}) {
    return (
        <div className={styles.main}>
            <div className={styles.closeIcon} onClick={() => setIsMenuOpen(false)}>
                <Image src={closeIcon} alt='Close Button' width={25} height={25} draggable={false}/>
            </div>
        </div>
    )
}