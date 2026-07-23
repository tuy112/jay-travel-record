import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {
    
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <h3>Jay's Travel Platform</h3>

                <div className={styles.always}>
                    <p>
                        Made By Jae Hyeok
                    </p>
                </div>
            </div>
        </footer>
    );
}