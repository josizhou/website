import React from "react";
import styles from './downloadLink.module.css';

export const DownloadLink = ({ url, fileName }) => {
    const onButtonClick = () => {
        const pdfUrl = "./Josiann_Zhou___Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Josiann Zhou Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <a className={styles.main} onClick={onButtonClick}>
            here
        </a>
    );
};