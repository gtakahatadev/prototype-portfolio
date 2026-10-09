import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <>
            <p className={styles.projectsInd}>03 / PROJETOS SELECIONADOS</p>
            <h2 className={styles.projectsTitle}>Ideias fora da caixa.</h2>
            <p className={styles.projectsUnd}>Conheça meus projetos e o que aprendi com cada um.</p>
            <div className={styles.cardOne}></div>
            <div className={styles.cardTwo}></div>
            <div className={styles.cardThree}></div>
        </>
    )
}