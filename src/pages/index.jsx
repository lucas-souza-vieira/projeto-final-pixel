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
            <p>Bem_vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado. Junte_se a nós e embarque em uma viagem nostálgica repleta de aventuras.<br/></p>
            <p>Acreditamos que os jogos retrô têm o poder de unir gerações, despertar memórias afetivas e proporcionar momentos de pura diversão. Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.<br/></p>
            <p>Jojos, onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games, estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras. Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios. Junte_se a nós e compartilhe da nossa paixão pelos jogos retrô!</p>
            
        </div>
        <div className={styles.texto}>
          <Image src="/images/about.svg" width={566} height={662} alt="Foto space invader"/>
        </div>
      </div>
    </div>

    <div id="carreira">
      <h1 className={styles.carreirah1}>Carreira</h1>

      <div className={styles.carreira}>

        <div className={styles.grid}>

          <a href="/jogo1" className={styles.retangulo_maior}>
            <h2>Desenvolvedor C++ Júnior</h2>
              <div className={styles.retangulo_menores}>
                <div className={styles.retangulo_menor}>
                  <p>DEV</p>
                </div>
                <div className={styles.retangulo_menor}>
                  <p>Remoto</p>
                </div>
              </div>
          </a>

          <a href="/jogo1" className={styles.retangulo_maior}>
            <h2>Desenvolvedor C++ Pleno</h2>
              <div className={styles.retangulo_menores}>
                <div className={styles.retangulo_menor}>
                  <p>DEV</p>
          </div>
          <div className={styles.retangulo_menor}>
            <p>Remoto</p>
          </div>
        </div>
      </a>

      <a href="/jogo1" className={styles.retangulo_maior}>
        <h2>Engenheiro de Software</h2>
        <div className={styles.retangulo_menores}>
          <div className={styles.retangulo_menor}>
            <p>Engenheiro</p>
          </div>
          <div className={styles.retangulo_menor}>
            <p>Remoto</p>
          </div>
        </div>
      </a>

      <a href="/jogo1" className={styles.retangulo_maior}>
        <h2>Artista Técnico</h2>
        <div className={styles.retangulo_menores}>
          <div className={styles.retangulo_menor}>
            <p>Arte</p>
          </div>
          <div className={styles.retangulo_menor}>
            <p>Remoto</p>
          </div>
        </div>
      </a>

      <a href="/jogo1" className={styles.retangulo_maior}>
        <h2>Representante Comercial</h2>
        <div className={styles.retangulo_menores}>
          <div className={styles.retangulo_menor}>
            <p>Comercial</p>
          </div>
          <div className={styles.retangulo_menor}>
            <p>Presencial</p>
          </div>
        </div>
      </a>
    </div>

      </div>

    </div>


    </>
    )
}
