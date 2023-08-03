import Image from "next/image"
import styles from '../styles/jogos.module.css'

export default function jogo3(){
    return(
        <>
            <div className={styles.jogo}>
                <h1>Space Invader</h1>

                <div className={styles.imagem}>
                    <Image src="/images/q44.svg" layout="responsive" width={1240} height={490} alt="Foto Space Invader" /><br/>
                </div>

                <div className={styles.containeir}>
                    <div className={styles.comprar}>
                        <h2>Valor: R$ 20,00</h2>
                        <button>Comprar</button>
                    </div>
                </div>

                    <p>Invaders from Space é um clássico jogo de arcade lançado em 1978, que desafia os jogadores a defender a Terra de invasores alienígenas em uma batalha frenética. Através do controle de uma nave espacial, você deve eliminar as formações de invasores em movimento, usando habilidade de mira e reflexos rápidos. A trilha sonora eletrônica e a atmosfera futurista tornam essa experiência imersiva e emocionante.<br/></p>
                    <p>Este marco na história dos videogames inspirou gerações de jogadores e desenvolvedores, mantendo sua jogabilidade viciante e ação implacável ao longo dos anos. Invaders from Space continua a desafiar e entusiasmar jogadores de todas as idades, tornando-se um clássico intemporal que resiste ao teste do tempo. Prepare-se para defender a Terra e mergulhar nesta batalha intergaláctica pela sobrevivência da humanidade!<br/></p>
                    <p>Prepare-se para a contagem regressiva e enfrente a invasão extraterrestre em Invaders from Space! Sua missão é crucial: deter o avanço dos invasores e proteger nosso planeta. Com reflexos rápidos e habilidades estratégicas, você enfrentará a ação implacável do jogo enquanto a tensão aumenta a cada onda de invasores. Desafie-se nesta experiência clássica e descubra por que Invaders from Space é tão memorável e apaixonante. A aventura espacial espera por você!</p>
            </div>
            
        </>
    )
}