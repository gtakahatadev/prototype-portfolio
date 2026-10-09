import styles from "./About.module.css";

export default function About() {
    return (
        <>
            <section className={styles.about}>
                <div className={styles.aboutLeft}>
                    <p className={styles.aboutInd}>01 / SOBRE MIM</p>
                    <h2 className={styles.aboutTitle}>Curioso por natureza. <br /> <span className={styles.titleHighlight}>Developer por escolha.</span></h2>
                </div>
                <div className={styles.aboutRight}>
                    <p className={styles.aboutUnd}>Sou Gabriel, um desenvolvedor web em formação que gosta de entender como as coisas funcionam — e de descobrir como fazê-las funcionar melhor.</p>
                    <p className={styles.aboutUnd}>Entre uma ideia e uma experiência real, encontro espaço para experimentar, aprender e cuidar dos detalhes. Este portfólio é parte desse processo: um lugar onde design e código se encontram.</p>
                    <div className={styles.rightRow}>
                        <p className={styles.aboutIcon}>↗</p>
                        <div className={styles.rightline}>
                            <p className={styles.aboutPhrase}>Aprender. Construir. Refinar.</p>
                            <p className={styles.aboutDetail}>E então, fazer de novo.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}