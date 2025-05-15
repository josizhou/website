'use client';
import Image from "next/image";
import headshot from "../assets/headshot.png"
import smiskiThumbsUp from '../assets/smiski-thumbsup.png'
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'
// import GLARTDemo from "./components/GLARTDemo/GLARTDemo";

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* implement a sandwich menu sidebar */}
        {/* implement popup - for when smiski is clicked - with hint to next clue */}
        <Image
          className={styles.headshot}
          src={headshot}
          alt="Josiann Zhou Headshot"
          height={200}
          priority
        />
        <section className={styles.intro}>
          <h1>Hello! </h1>
          <text>
            My name is Josiann Zhou and I&apos;m a software developer. Welcome to my portfolio website! {<br />}
            A bit about me: I love music, art, and technology. Most of my experience has been in web development but I love any challenge. {<br />}
            I&apos;m fluent in Spanish, Cantonese, English, and French and really enjoy learning new languages. {<br />}
            I&apos;m also a huge fan of puzzles and riddles. In case you are too I&apos;ve created a little bit of a scavenger hunt, should you choose to take part. {<br />}
            The first hint is as follows:
            <p className={"styles.hint"}>A little positive feedback never hurt anybody. Click on the positive vibes for your next clue.</p>
            If you aren&apos;t into scavenger hunts then please feel free to explore and I hope you enjoy.
            <p>You can download my resume <a>here</a> or see a summary of my experience below.</p>
          </text>
        </section>
        
        <section className={styles.technicalSkills}>
          <h2>
            Technical Skills
          </h2>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Jest</li>
            <li>Selenium</li>
            <li>ExpressJS</li>
            <li>Tailwind CSS</li>
            <li>p5 JS</li>
          </ul>
        </section>
        
        {/* <GLARTDemo /> */}
        
        <section>
          {/* make this section dropdowns? accordion style? */}
          <h2>Work Experience</h2>
          <h3>Associate Software Developer at Konrad Group</h3>
          <h3>Web Developer Co-op at Invoke Media</h3>
          <h3>Clients Frontend Technologies Co-op Developer</h3>
        </section>

        <section>
          <button onClick={() => router.push('/artPage')}>
            Explore Art Page
          </button>
        </section>

      </main>
      <footer className={styles.footer}>
        <text> thanks for visiting! </text>
        <a>
          <Image
              aria-hidden
              src={smiskiThumbsUp}
              alt="Smiski Thumbs Up"
              width={16}
              height={16}
            />
        </a>
      </footer>
    </div>
  );
}
