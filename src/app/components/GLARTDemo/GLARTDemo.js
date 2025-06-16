import styles from "./GLARTDemo.module.scss";
import { useRouter } from 'next/navigation';
import backArrow from '../../../assets/backArrow.svg';
import Image from "next/image";

export default function GLARTDemo() {
    const router = useRouter();

    return (
        <div className={styles.main} onClick={() => router.push('/digitalArtGlovePage')}>
            <section className={styles.heading}>
                <div className={styles.title}>
                    <h2>Digital Art Glove</h2>
                    <h2 className={styles.subheading}> - Project Highlight</h2>
                </div>
                <Image src={backArrow} alt='Back Button' width={25} height={25} className={styles.arrow} />
            </section>
            <div className={styles.player}>
                <iframe
                    width="560"
                    height="315"
                    style={{maxWidth: '100%'}}
                    src="https://www.youtube.com/embed/xtl84rtYhtc?si=6wXFkxONqOMxLAHR&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}