import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <>
            <section className={styles.heroAbout}>
                <div className={styles.aboutLeft}>
                    <h1 className={styles.leftName}>Gabriel Takahata</h1>
                    <h3 className={styles.leftJob}>Software Developer</h3>
                    <p className={styles.leftParag}>Web developer explorando a conexão entre design e tecnologia. Crio experiências digitais com atenção aos detalhes e curiosidade pelo que vem a seguir.</p>
                    <div className={styles.containerButton}>
                        <button className={styles.buttonCyan}>Explore meus projetos ↗</button>
                        <button className={styles.heroButton}>Minhas habilidades →</button>
                    </div>
                </div>
                <div className={styles.aboutRight}>
                    {/* add esfera */}
                    <img src="./hero.png" alt="imagem" />
                </div>
            </section>
        </>
    )
}