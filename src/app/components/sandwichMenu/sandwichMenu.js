import styles from './sandwichMenu.module.css';
import closeIcon from '../../../assets/closeIcon.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SandwichMenu ({setIsMenuOpen}) {
    const router = useRouter();
    const links = [
        {
            title: 'Home',
            address: '/'
        },
        {
            title: 'Art Page',
            address: '/artPage'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.closeIcon} onClick={() => setIsMenuOpen(false)}>
                    <Image src={closeIcon} alt='Close Button' width={20} height={20} draggable={false}/>
                </div>
                <section className={styles.links}>
                    {links.map((linkItem, index) => (
                        <h2
                            className={styles.link}
                            onClick={() => {
                                router.replace(linkItem.address);
                                setIsMenuOpen(false);
                            }}
                            key={index}
                        >
                            {linkItem.title}
                        </h2>
                    ))}
                </section>
            </div>
            <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}/>
        </div>
    )
}