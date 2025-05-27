'use client';
import Image from "next/image";
import headshot from "../assets/headshot.png"
import smiskiThumbsUp from '../assets/smiski-thumbsup.png'
import styles from "./page.module.scss";
import { useRouter } from 'next/navigation';
import GLARTDemo from "./components/GLARTDemo/GLARTDemo";
import workExperienceContent from "@/assets/workExperienceContent";
import { AccordionElement } from "./components/accordionElement/accordionElement";
import sandwichMenu from '../assets/sandwichMenu.svg';
import { useState } from "react";
import SandwichMenu from "./components/sandwichMenu/sandwichMenu";
import HintPopup from "./components/hintPopup/hintPopup";
import { DownloadLink } from "./components/downloadLink/downloadLink";
import confetti from "canvas-confetti";
import smiskiWork from '../assets/smiski-work.png';

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);

  const handleClick = () => {
    setIsHintOpen(true);
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2 };

    const randomInRange = (min, max) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.sandwichButton} onClick={() => setIsMenuOpen(true)}>
          <Image src={sandwichMenu} alt="Sandwich Menu Icon" height={25} width={25} draggable={false}/>
        </div>
        {isMenuOpen && <SandwichMenu setIsMenuOpen={setIsMenuOpen} />}
        {isHintOpen && <HintPopup setIsHintOpen={setIsHintOpen} />}
        <Image
          className={styles.headshot}
          src={headshot}
          alt="Josiann Zhou Headshot"
          height={200}
          draggable={false}
          priority
        />
        <section className={styles.intro}>
          <h1>Hello! </h1>
          <div>
            <p className={styles.introLine}>My name is Josiann Zhou and I&apos;m a software developer. Welcome to my portfolio website!</p>
            <p className={styles.introLine}>A bit about me: I love music, art, and technology. Most of my experience has been in web development but I love any challenge.</p>
            <p className={styles.introLine}>I&apos;m fluent in Spanish, Cantonese, English, and French and really enjoy learning new languages.</p>
            <p className={styles.introLine}>You can download my resume
              <DownloadLink
                url='../assets/Josiann_Zhou___Resume.pdf'
                filename='Josiann Zhou Resume'
              />
              or see a summary of my experience below.</p>
          </div>
        </section>
        
        <section className={styles.technicalSkills} id="technicalSkills">
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
        
        <GLARTDemo id="glartDemo"/>
        
        <section id="workExperience">
          <h2 className={styles.heading}>
            Work Experience 
            <Image
              className={styles.smiskiWork}
              src={smiskiWork}
              alt='Smiski Going to Work'
              height={40}
              width={40}
            />
          </h2>
          {workExperienceContent.map((workExperience, index) => (
            <AccordionElement {... workExperience} key={index} />
          ))}
        </section>

        {/* <section>
          <button onClick={() => router.push('/artPage')}>
            Explore Art Page
          </button>
        </section> */}

      </main>
      <footer className={styles.footer}>
        <p> thanks for visiting! </p>
        <a onClick={handleClick}>
          <Image
              aria-hidden
              src={smiskiThumbsUp}
              alt="Smiski Thumbs Up"
              width={50}
              height={50}
              draggable={false}
            />
        </a>
      </footer>
    </div>
  );
}
