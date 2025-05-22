import styles from './sandwichMenu.module.css';
import closeIcon from '../../../assets/closeIcon.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SandwichMenu ({setIsMenuOpen}) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.closeIcon} onClick={() => setIsMenuOpen(false)}>
                    <Image src={closeIcon} alt='Close Button' width={25} height={25} draggable={false}/>
                </div>
                <section className={styles.links}>
                    <h2 className={styles.link} onClick={() => {
                        router.replace('/');
                        setIsMenuOpen(false);
                    }}>Home</h2>
                </section>
            </div>
            <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}/>
        </div>
    )
}