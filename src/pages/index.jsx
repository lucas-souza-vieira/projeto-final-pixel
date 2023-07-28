import Head from "next/head"
import Image from "next/image"
import styles from '../styles/index.module.css'


export default function Index() {
  return (
    <>
    <div className={styles.container}>
      <a href="/jogo1">
        <Image src="/images/q1.svg"  width={1240} height={490} alt="Foto pacman"/>
      </a>
      <div className={styles.container2}>
        <a href="/jogo1">
         <Image src="/images/q2.svg" width={400} height={300} alt="Foto pacman"/>
        </a>

        <a href="/jogo2">
          <Image src="/images/q3.svg" width={400} height={300} alt="Foto tetris"/>
        </a>

        <a href="/jogo3">
          <Image src="/images/q4.svg" width={400} height={300} alt="Foto space invader"/>
        </a>
      </div>  
    </div>

    <div id="about" className={styles.about}>
      <h1>Sobre Nós</h1>
      <div className={styles.it}>
        <div className={styles.texto}>
            <p>Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado. Junte-se a nós e embarque em uma viagem nostálgica repleta de aventuras.<br/></p>
            <p>Acreditamos que os jogos retrô têm o poder de unir gerações, despertar memórias afetivas e proporcionar momentos de pura diversão. Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.<br/></p>
            <p>Jojos, onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games, estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras. Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!</p>
            
        </div>
        <div className={styles.texto}>
          <Image src="/images/about.svg" width={566} height={662} alt="Foto space invader"/>
        </div>
      </div>

    </div>


    </>
    )
}
