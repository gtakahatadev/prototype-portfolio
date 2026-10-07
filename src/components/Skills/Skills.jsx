import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <>
            <div className={styles.about}>
                <p className={styles.aboutInd}>01 / SOBRE MIM</p>
                <p className={styles.aboutTitle}>Curioso por natureza. <br />Developer por escolha.</p>
                <p className={styles.aboutUnd}>Sou Gabriel, um desenvolvedor web em formação que gosta de entender como as coisas <br /> funcionam — e de descobrir como fazê-las funcionar melhor.</p>
                <p className={styles.aboutUnd}>Entre uma ideia e uma experiência real, encontro espaço para experimentar, aprender e <br /> cuidar dos detalhes. Este portfólio é parte desse processo: um lugar onde design e código <br /> se encontram.</p>
                <img src="" alt="" />
                <p className={styles.aboutPhrase}>Aprender. Construir. Refinar.</p>
                <p className={styles.aboutDetail}>E então, fazer de novo.</p>
            </div>
            <div className={styles.skills}>
                <p className={styles.skillsInd}>02 / FERRAMENTAS & HABILIDADES</p>
                <p className={styles.skillsTitle}>Meu kit de construção.</p>
                <p className={styles.skillsUnd}>Tecnologias que acompanham meus estudos e experimentos.</p>
                <div className={styles.skillsCont}></div>
                <div className={styles.skillsCont}></div>
                <div className={styles.skillsCont}></div>
                <div className={styles.skillsCont}></div>
            </div>
        </>
    )
}