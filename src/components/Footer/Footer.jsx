import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={styles.footerInd}>
                <p>04 / PRÓXIMA CONEXÃO</p>
            </div>
            <p className={styles.FooterParag}>Uma boa ideia começa com uma</p>
            <p className={styles.FooterHigh}>conversa.</p>
            <div className={styles.FooterUnder}>
                <p>Projetos, oportunidades ou uma troca de ideias. <br /> Vamos construir algo interessante juntos.</p>
            </div>
            <div className={styles.contact}>
                <a className={styles.contactItem} href="">E-mail</a>
                <a className={styles.contactItem} href="">GitHub</a>
                <a className={styles.contactItem} href="">LinkedIn</a>
            </div>
            <a href=""></a>
            <p></p>
            <a href=""></a>
        </>
    )
}