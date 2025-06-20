import styles from './sandwichMenu.module.scss';
import closeIcon from '../../../assets/closeIcon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function SandwichMenu ({setIsMenuOpen}) {
    const links = [
        {
            title: 'Home',
            address: '/',
        },
        {
            title: 'Digital Art Glove',
            address: '/digitalArtGlovePage',
        },
        {
            title: 'About Me',
            address: '/aboutMePage',
        },
        // {
        //     title: 'Art Page',
        //     address: '/artPage',
        // },
        {
            title: 'Technical Skills',
            address: '#technicalSkills',
        },
        {
            title: 'Work Experience',
            address: '#workExperience',
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
                        <Link
                            className={styles.link}
                            href={linkItem.address}
                            onClick={() => setIsMenuOpen(false)}
                            key={index}
                        >
                            {linkItem.title}
                        </Link>
                    ))}
                </section>
            </div>
            <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}/>
        </div>
    )
}