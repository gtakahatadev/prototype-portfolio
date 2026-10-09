import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <>
            <section className={styles.skills}>
                <div className={styles.skillsRow}>
                    <p className={styles.skillsInd}>02 / FERRAMENTAS & HABILIDADES</p>
                    <h2 className={styles.skillsTitle}>Meu kit de construção.</h2>
                    <p className={styles.skillsUnd}>Tecnologias que acompanham meus estudos e experimentos.</p>
                    <div className={styles.skillsContainer}>
                        <div className={styles.skillsLine}>
                            <p className={styles.lineNote}>Estrutura & estilo</p>
                            <h3 className={styles.lineTitle}>HTML / CSS</h3>
                            <p className={styles.lineParag}>Semântica, layouts responsivos e atenção à experiência em cada tamanho de tela.</p>
                        </div>
                        <div className={styles.skillsLine}>                                                    <p className={styles.lineNote}>Lógica & interação</p>
                            <h3 className={styles.lineTitle}>JavaScript</h3>
                            <p className={styles.lineParag}>Transformando páginas estáticas em experiências com comportamento e propósito.</p>                                                                                   </div>
                        <div className={styles.skillsLine}>                                                     <p className={styles.lineNote}>Interfaces & componentes</p>
                            <h3 className={styles.lineTitle}>React</h3>
                            <p className={styles.lineParag}>Interfaces organizadas em componentes, com estados e responsabilidades claras.</p></div>
                        <div className={styles.skillsLine}>                    <p className={styles.lineNote}>Processo & evolução</p>
                            <h3 className={styles.lineTitle}>Git / GitHub</h3>
                            <p className={styles.lineParag}>Versionamento e organização para construir, experimentar e evoluir o código.</p></div>
                    </div>
                </div>
            </section>
        </>
    )
}