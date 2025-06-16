'use client'
import styles from "./page.module.scss";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import backArrow from '../../assets/backArrow.svg';
import glartGif1 from '../../assets/glartGif1.gif';
import glartGif2 from '../../assets/glartGif2.gif';
import glartHandTracking from '../../assets/glartHandTracking.gif';
import glartArchitecture from '../../assets/glartArchitecture.png';
import glartDataFlow from '../../assets/glartDataFlow.png';
import glartSensors from '../../assets/glartSensors.png';
import glartInstructions from '../../assets/glartHowToUse.png';
import glartFlower from '../../assets/glartFlower.png';
import glartKaleidoscope from '../../assets/glartKaleidoscope.png';
import glartLineBrush from '../../assets/glartLineBrush.png';
import glartPrototype1 from '../../assets/glartPrototype1.png';
import glartPrototype2 from '../../assets/glartPrototype2.png';
import glartPrototype3 from '../../assets/glartPrototype3.png';

export default function GLARTDemo() {
    const router = useRouter();

    return(
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.backButton} onClick={() => router.replace('/')}>
                    <Image src={backArrow} alt='Back Button' width={25} height={25} />
                </div>
                <h1 className={styles.mainTitle}>Gesture Based Digital Art</h1>
                <section className={styles.splitSection}  style={{paddingBottom: '2rem'}}>
                    <p className={styles.textblockL}>
                        For my final IGEN 430 capstone project, I worked with Kaylee Jung, Beatrice Tam, and Mika Nogami to
                        build a tool that would make digital art more accessible and fun.
                    </p>
                    <Image src={glartGif1} alt='Digital Art Glove Gif' layout='responsive' className={styles.image}/>
                </section>
                <section className={styles.splitSection}>
                    <Image src={glartGif2} alt='Digital Art Glove Gif' layout='responsive' className={styles.image}/>
                    <p className={styles.textblockR}>
                        We developed a glove that translated the user&apos;s movements and gestures into art on a 2D canvas.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.title}>The Sensors</h2>
                    <div className={styles.fullSection} style={{backgroundColor: 'lavender'}}>
                        <Image src={glartSensors} alt='Digital Art Glove Sensor Diagram' layout='responsive' className={styles.image}/>
                        <p className={styles.textblock} style={{padding: '2rem'}}>
                            The glove was composed of a 3 force sensors on the finger tips, 2 flex sensors along the middle and ring fingers, and an IMU on the
                            back of the hand. A wrist hub housed a battery to power the system and an ESP32 which communicated the sensor data via bluetooth.
                        </p>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.title}>Computer Vision</h2>
                    <div className={styles.splitSection}>
                        <p className={styles.textblockL}>
                            The sensors acted as our controls but the brush/cursor positioning was determined using computer vision. We leveraged Google&apos;s
                            ML powered MediaPipe Hands to track landmark positions on the user&apos;s hands and map this onto our 2D canvas.
                        </p>
                        <Image src={glartHandTracking} alt='Hand Trackign Demo Gif' layout='responsive' className={styles.image}/>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.title}>The Architecture</h2>
                    <div className={styles.splitSection} style={{paddingBottom: '2rem'}}>
                        <Image src={glartDataFlow} alt='Digital Art Glove Data Flow Diagram' layout='responsive' className={styles.image}/>
                        <p className={styles.textblockR}>
                            I took the sensor and computer vision data and processed it in a Python backend.
                            This included some line smoothing and data cleaning. Then our data could be passed to the frontend to be visualized on our
                            React based frontend.
                        </p>
                    </div>
                <div className={styles.splitSection}>
                    <p className={styles.textblockL}>
                        The frontend was a NextJS app written in JavScript and I used p5.js to create the digital canvas.
                        It was really fun to explore the realm of creative coding and learn how to use the p5 library.
                    </p>
                    <Image src={glartArchitecture} alt='Digital Art Glove Architecture Diagram' layout='responsive' className={styles.image}/>
                </div>
                </section>
                {/* <section className={styles.section}>
                    <h2 className={styles.title}>The Art</h2>
                    <div className={styles.fullSection}>
                        <div className={styles.photos}>
                            <Image src={glartFlower} alt='Flower drawn using the Digital Art Glove' layout='responsive' />
                            <Image src={glartKaleidoscope} alt='Kaleidoscope Drawing' layout='responsive' />
                            <Image src={glartLineBrush} alt='Line Brush Drawing' layout='responsive' />
                        </div>
                    </div>
                </section> */}
                <section className={styles.section}>
                    <h2 className={styles.title}>The Prototype</h2>
                    <div className={styles.fullSection} style={{backgroundColor: 'lavender'}}>
                        <p className={styles.textblock}  style={{padding: '2rem'}}>
                            The prototype went through many iterations. We ended up opting for a very minimal design because of limitations imposed by the
                            CV hand tracking. The final prototype was made of kinesiology tape and spandex/elastane fabric with a velcro strap to
                            fasten the device to the user&apos;s wrist.
                        </p>
                        <div className={styles.photos}>
                            <Image src={glartPrototype1} alt='Digital Art Glove Prototype Image' height={300} style={{padding: '0 1rem'}}/>
                            <Image src={glartPrototype2} alt='Digital Art Glove Prototype Image' height={300} style={{padding: '0 1rem'}}/>
                            {/* <Image src={glartPrototype3} alt='Digital Art Glove Prototype Image' layout='responsive' /> */}
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.title}>How to Use the Glove</h2>
                    <div className={styles.fullSection}>
                        <Image src={glartInstructions} alt='Digital Art Glove Instructions' layout='responsive' />
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.title}>Demo Video</h2>
                    <div className={styles.player}>
                        <iframe
                            width="720"
                            height="405"
                            style={{maxWidth: '100%', outline: 'solid 2px lavender'}}
                            src="https://www.youtube.com/embed/xtl84rtYhtc?si=6wXFkxONqOMxLAHR&rel=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>
            </main>
        </div>
    );
}