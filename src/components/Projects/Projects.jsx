import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <>
            <div className={styles.projectsInd}>
                <p>03 / PROJETOS SELECIONADOS</p>
            </div>
            <p className={styles.projectsTitle}>Ideias fora da caixa.</p>
            <p className={styles.projectsUnd}>Conheça meus projetos e o que aprendi com cada um.</p>
            <div className={styles.cardOne}></div>
            <div className={styles.cardTwo}></div>
            <div className={styles.cardThree}></div>
        </>
    )
}