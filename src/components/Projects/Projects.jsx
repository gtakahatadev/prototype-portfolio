import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <>
            <section className={styles.projects}>
                <p className={styles.projectsInd}>03 / PROJETOS SELECIONADOS</p>
                <h2 className={styles.projectsTitle}>Ideias fora da caixa.</h2>
                <p className={styles.projectsUnd}>Conheça meus projetos e o que aprendi com cada um.</p>
                <div className={styles.projectsRow}>
                    <div className={styles.rowCard}>
                        <p className={styles.cardDetail}>PROJETO / 01</p>
                        <h3 className={styles.cardTitle}>Interface Lab</h3>
                        <p className={styles.cardParag}>Um espaço para explorar interfaces que equilibram forma, função e pequenos detalhes.</p>
                        <button className={styles.cardButton}>Mais sobre o projeto</button>
                    </div>
                    <div className={styles.rowCard}>
                        <p className={styles.cardDetail}>PROJETO / 02</p>
                        <h3 className={styles.cardTitle}>Organizador</h3>
                        <p className={styles.cardParag}>Uma ideia de aplicação para organizar tarefas do dia a dia.</p>
                        <button className={styles.cardButton}>Mais sobre o projeto</button>
                    </div>
                    <div className={styles.rowCard}>
                        <p className={styles.cardDetail}>PROJETO / 03</p>
                        <h3 className={styles.cardTitle}>Página de estudos</h3>
                        <p className={styles.cardParag}>Um projeto para praticar a construção de páginas no navegador.</p>
                        <button className={styles.cardButton}>Mais sobre o projeto</button>
                    </div>
                </div>
            </section>
        </>
    )
}