/* eslint-disable @next/next/no-img-element */
'use client'
import styles from "./page.module.scss";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import backArrow from '../../assets/backArrow.svg';
import smiskiThumbsUp from '../../assets/smiski-thumbsup.png';
import smiskiCry from '../../assets/smiski-cry.png';
import smiskiWork from '../../assets/smiski-work.png';

export default function FunFactsPage() {
    const router = useRouter();

    return(
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.backButton} onClick={() => router.replace('/')}>
                    <Image src={backArrow} alt='Back Button' width={25} height={25} />
                </div>
                <h2 className={styles.mainTitle}>Some fun facts about me!</h2>
                <section className={styles.section}>
                    <p><span className={styles.bold}>Fact #1: </span>I really enjoy custom slack emojis, here are a few I&apos;ve made:</p>
                    <div className={styles.emojiContainer}>
                        <div className={styles.emoji}>
                            <Image src={smiskiThumbsUp} alt='Smiski Thumbs Up Emoji' width={75} />
                            <p>:smiski-thumbs-up:</p>
                        </div>
                        <div className={styles.emoji}>
                            <Image src={smiskiWork} alt='Smiski Work Emoji' width={75} />
                            <p>:smiski-work:</p>
                        </div>
                        <div className={styles.emoji}>
                            <Image src={smiskiCry} alt='Smiski Cry Emoji' width={75} />
                            <p>:smiski-cry:</p>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <p><span className={styles.bold}>Fact #2: </span>I did Taekwondo for 10 years! I got my black belt at 10 years old and won 2 gold and 1 silver medal 
                    at Nationals.</p>
                    <div className={styles.images}>
                        <img src={'/tkd-sidekick.JPG'} alt='TKD Side Kick'  className={styles.image}/>
                        <img src={'/tkdheadshot.jpg'} alt='TKD Profile'  className={styles.image}/>
                        <img src={'/tkd-poomsae.JPG'} alt='TKD Poomsae' className={styles.image}/>
                    </div>
                    <p>
                        I learned a lot of discipline and determination from my Taekwondo training. The pride
                        I felt after winning at Nationals and seeing the months of training pay off is a feeling I will remember for the rest of my life.
                        It&apos;s a moment that really solidified the value of hard work and perseverance for me.
                    </p>
                </section>
                <section className={styles.section}>
                    <p><span className={styles.bold}>Fact #3: </span>
                        I graduated from UBC&apos;s Integrated Engineering program with a Major in Computer Engineering and Minor in Electrical Engineering.
                    </p>
                    <div className={styles.video}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/OI2zG-1EUQc?si=gBWv6eqquFFRRFJA&rel=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <p>
                        The program allowed me to develop a really broad understanding of engineering fundamentals across disciplines and gave me the ability to
                        zoom out and take a wider perspective when working on complex projects with a lot of moving parts.
                    </p>
                </section>
                <section className={styles.section}>
                    <p><span className={styles.bold}>Fact #4: </span>
                        I speak 4 languages. My family is Chinese Peruvian so I grew up speaking Spanish and Cantonese and later learned English and French in school.
                    </p>
                    <div className={styles.singleImageContainer}>
                        <img src={'/josie-in-peru.JPG'} alt='Josie in Peru'  className={styles.largeImage}/>
                    </div>
                    <p>
                        Keeping up with my languages and practicing so I don&apos;t lose them is a challenging and continuous pursuit but one I really enjoy. 
                        I want to learn more and am currently trying to improve my Mandarin!
                    </p>
                </section>
            </main>
        </div>
    );
}