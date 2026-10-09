import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <section className={styles.footer}>
                <div className={styles.footerLine}>
                    <p className={styles.footerInd}>04 / PRÓXIMA CONEXÃO</p>
                    <h1 className={styles.FooterTitle}>Uma boa ideia começa com uma                         <span className={styles.FooterHigh}>conversa.</span></h1>
                    <p className={styles.FooterUnder}>Projetos, oportunidades ou uma troca de ideias. Vamos construir algo interessante juntos.</p>
                </div>
                <div className={styles.footerRow}>
                    <p>01 /</p>
                    <a className={styles.rowItem} href="">E-mail</a>
                    <p>02 /</p>
                    <a className={styles.rowItem} href="">GitHub</a>
                    <p>03 /</p>
                    <a className={styles.rowItem} href="">LinkedIn</a>
                </div>
                <div className={styles.footerRow}>
                    <a className={styles.rowName} href="">gabriel.takahata</a>
                    <p className={styles.rowCredits} href="">© 2026 · Feito com código e intenção.</p>
                    <a className={styles.rowCredits} href="">DE VOLTA AO TOPO ↑</a>
                </div>
            </section>
        </>
    )
}