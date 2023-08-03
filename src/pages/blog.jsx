import Image from "next/image"
import styles from '../styles/blog.module.css'

export default function Blog() {
    return(
        <>
        <div className={styles.blog}>
            <h1>BLOG</h1>
            <div className={styles.post}>
                <Image src="/images/blog.svg" width={610} height={339} alt="Foto blog"/>
                <div className={styles.text}>
                    <div className={styles.h}>
                        <h2>O impacto dos jogos retrô na indústria de desenvolvimento de jogos</h2>
                        <h6>Por Guilherme Santos, 23/04/2023</h6>
                    </div>
                    <p>Os jogos retrô têm tido um impacto significativo na indústria de desenvolvimento de jogos, tanto do ponto de vista comercial quanto cultural. Com o ressurgimento do interesse em jogos retrô, impulsionado pela nostalgia e a busca por experiências de jogo mais simples, muitas empresas estão explorando esse gênero e desenvolvendo jogos que lembram os clássicos do passado.</p>
                </div>
            </div>

            <div className={styles.menores}>
                <div>
                    <Image src="/images/blog2.svg" width={390} height={220} alt="Foto blog"/> 
                    <p>O impacto dos jogos retrô na indústria de desenvolvimento de jogos</p>
                </div>

                <div>
                    <Image src="/images/blog2.svg" width={390} height={220} alt="Foto blog"/> 
                    <p>Como desenvolver jogos retrô com um toque moderno</p>
                </div>

                <div>
                    <Image src="/images/blog2.svg" width={390} height={220} alt="Foto blog"/> 
                    <p>Criação de arte pixelada</p>
                </div>

                <div>
                    <Image src="/images/blog2.svg" width={390} height={220} alt="Foto blog"/> 
                    <p>Trilha sonora em jogos retrô</p>
                </div>

                <div>
                    <Image src="/images/blog2.svg" width={390} height={220} alt="Foto blog"/> 
                    <p>As influências históricas dos jogos retrô na cultura pop</p>
                </div>
            </div>   
        </div>
        </>
    )
}