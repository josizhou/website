import styles from "./GLARTDemo.module.scss";

export default function GLARTDemo() {
    return (
        <div className={styles.main}>
            <section className={styles.heading}>
                <h2>Digital Art Glove</h2>
                <h2 className={styles.subheading}> - Project Highlight</h2>
            </section>
            <div className={styles.player}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xtl84rtYhtc?si=6wXFkxONqOMxLAHR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    );
}