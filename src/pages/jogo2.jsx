import Image from "next/image"
import styles from '../styles/jogos.module.css'

export default function jogo2(){
    return(
        <>
            <div className={styles.jogo}>
                <h1>Tetris</h1>

                <div className={styles.imagem}>
                    <Image src="/images/q33.svg" layout="responsive" width={1240} height={490} alt="Foto Tetris" /><br/>
                </div>

                <div className={styles.containeir}>
                    <div className={styles.comprar}>
                        <h2>Valor: R$ 15,00</h2>
                        <button>Comprar</button>
                    </div>
                </div>

                    <p>Tetris é um dos jogos mais icônicos e envolventes de todos os tempos. Lançado em 1984, o jogo conquistou milhões de corações ao redor do mundo com sua jogabilidade simples e viciante. O objetivo é claro: organizar blocos em diferentes formas e tamanhos que caem do topo da tela para formar linhas horizontais completas.<br/><br/>A simplicidade do Tetris o torna acessível para jogadores de todas as idades. A mecânica de jogo intuitiva permitiu que se tornasse um clássico instantâneo e tenha sido portado para inúmeras plataformas e dispositivos ao longo dos anos. Sua popularidade transcende gerações, com uma base de fãs apaixonada que ainda joga o jogo com entusiasmo até hoje.<br/><br/>Tetris vai além do entretenimento, também desenvolvendo habilidades cognitivas. Os jogadores precisam aprimorar suas habilidades de tomada de decisão, planejamento e coordenação para alcançar o sucesso. Mesmo após tantos anos, o Tetris continua sendo um dos jogos mais desafiadores e recompensadores para aqueles que buscam um desafio intelectual. Prepare-se para empilhar blocos e mergulhar em uma incrível jornada de estratégia e diversão com Tetris!</p>
            </div>
            
        </>
    )
}