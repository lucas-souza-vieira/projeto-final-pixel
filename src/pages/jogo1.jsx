import Image from "next/image"
import styles from '../styles/jogos.module.css'

export default function jogo1(){
    return(
        <>
            <div className={styles.jogo}>
                <h1>Pacman</h1>

                <div className={styles.imagem}>
                    <Image src="/images/q1.svg" layout="responsive" width={1240} height={490} alt="Foto Pacman" /><br/>
                </div>

                <div className={styles.containeir}>
                    <div className={styles.comprar}>
                        <h2>Valor: R$ 10,00</h2>
                        <button>Comprar</button>
                    </div>
                </div>

                    <p>Pac-Man é um clássico jogo de arcade lançado em 1980. Os jogadores assumem o controle de Pac-Man, um personagem amarelo redondo, e seu objetivo é comer todos os pontos em um labirinto enquanto evita os fantasmas coloridos que o perseguem. Ao comer pontos especiais, os fantasmas se tornam vulneráveis e podem ser engolidos por Pac-Man para ganhar pontos extras. Com sua jogabilidade simples e viciante, Pac-Man conquistou milhões de jogadores e se tornou um fenômeno cultural, com seu personagem e design visual se tornando ícones da cultura pop.<br/><br/>Em Pac-Man, os jogadores precisam mostrar habilidades rápidas de raciocínio e estratégia para evitar os fantasmas enquanto procuram o caminho ideal pelo labirinto. Além dos pontos regulares, bônus e frutas especiais aparecem em momentos-chave, adicionando uma dose extra de emoção e recompensa ao jogo. Com seu design cativante e desafios envolventes, Pac-Man oferece uma experiência divertida e nostálgica, capaz de entreter jogadores de todas as idades.<br/><br/>Desde seu lançamento, Pac-Man transcendeu os arcades e se tornou um verdadeiro ícone da cultura pop. Sua popularidade perdura até hoje, com referências em várias formas de mídia e uma base de fãs apaixonada. Se você está em busca de uma aventura eletrizante e viciante, não perca a chance de jogar Pac-Man e experimentar a diversão atemporal que conquistou o mundo dos videogames. Prepare-se para embarcar em uma jornada emocionante enquanto come pontos, evita fantasmas e mergulha em um dos jogos mais adorados de todos os tempos.</p>
            </div>
            
        </>
    )
}