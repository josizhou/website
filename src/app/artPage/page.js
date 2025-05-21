'use client'
import * as React from "react";
import { AccordionElement } from "../components/accordionElement/accordionElement";
import smiskiThumbsUp from '../../assets/smiski-thumbsup.png';
import backArrow from '../../assets/backArrow.svg';
import Image from "next/image";
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
// import { ReactP5Wrapper } from "@p5-wrapper/react";

// function sketch(p5) {
//     p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

//     p5.draw = () => {
//         p5.background(250);
//         p5.normalMaterial();
//         p5.push();
//         p5.rotateZ(p5.frameCount * 0.01);
//         p5.rotateX(p5.frameCount * 0.01);
//         p5.rotateY(p5.frameCount * 0.01);
//         p5.plane(100);
//         p5.pop();
//     };
// }

// export function App() {
//     return <ReactP5Wrapper sketch={sketch} />;
// }

export default function ArtPage() {
    const router = useRouter();
    const testAccordionData = [
        {
            title: "Test Accordion Heading 1",
            content: "This is my test accordion content. I'm going to make it a bit longer so I can see how it wraps. I also want to check how it handles bullet points but I think that may have to be in an array of strings.",
            imageSrc: smiskiThumbsUp,
            imageAlt: 'smiski thumbs up',
            bulletPoints: [
                'point one test test test test test test test test test test test test',
                'point two test test test test test test test test test test test test',
                'point three test test test test test test test test test test test test',
                'point four test test test test test test test test test test test test',
            ]
        }, 
        {
            title: "Test Accordion Heading 2",
            content: "This is my test accordion content. I'm going to make it a bit longer so I can see how it wraps. I also want to check how it handles bullet points but I think that may have to be in an array of strings.",
            imageSrc: smiskiThumbsUp,
            imageAlt: 'smiski thumbs up',
            bulletPoints: [
                'point one test test test test test test test test test test test test',
                'point two test test test test test test test test test test test test',
                'point three test test test test test test test test test test test test',
                'point four test test test test test test test test test test test test',
            ]
        }, 
        {
            title: "Test Accordion Heading 3",
            imageSrc: smiskiThumbsUp,
            imageAlt: 'smiski thumbs up',
            bulletPoints: [
                'point one test test test test test test test test test test test test',
                'point two test test test test test test test test test test test test',
                'point three test test test test test test test test test test test test',
                'point four test test test test test test test test test test test test',
            ]
        }, 
    ]

    return(
        <div className={styles.main}>
            <div className={styles.backButton} onClick={() => router.back()}>
                <Image src={backArrow} alt='Back Button' width={25} height={25} />
                Back
            </div>
            <div>
                HELLO ART PAGE
                {testAccordionData.map((testData, index) => (
                    <AccordionElement {...testData} key={index}/>
                ))}
            </div>
        </div>
    )
}