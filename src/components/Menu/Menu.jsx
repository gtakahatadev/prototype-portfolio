import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.containerLogo}>
                    <p className={styles.menuLogo}>g.</p>
                    <p className={styles.navbarLogo}>Gabriel</p>
                    <p className={styles.navbarSuffix}>/ dev</p>
                </div>
                <div className={styles.navbarLinks}>
                    <a className={styles.linkItem} href="">Sobre</a>
                    <a className={styles.linkItem} href="">Habilidades</a>
                    <a className={styles.linkItem} href="">Projetos</a>
                    <a className={styles.linkButton} href="">Vamos conversar?</a>
                    <div className={styles.usability}>
                        <button className={styles.buttonTheme}>☀️ Modo Claro</button>
                        <button className={styles.buttonLang}>EN</button>
                    </div>
                </div>
            </nav>

        </>
    )
}