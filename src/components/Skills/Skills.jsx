import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <>
            <div className={styles.skills}>
                <p className={styles.skillsInd}>02 / FERRAMENTAS & HABILIDADES</p>
                <h2 className={styles.skillsTitle}>Meu kit de construção.</h2>
                <p className={styles.skillsUnd}>Tecnologias que acompanham meus estudos e experimentos.</p>
                <div className={styles.skillsCont}></div>
                <div className={styles.skillsCont}></div>
                <div className={styles.skillsCont}></div>
                <div className={styles.skillsCont}></div>
            </div>
        </>
    )
}