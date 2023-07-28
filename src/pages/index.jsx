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


    </>
    )
}
