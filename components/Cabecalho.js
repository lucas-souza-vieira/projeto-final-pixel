import Link from 'next/link'
import Image from 'next/image'
import styles from '../src/styles/Cabecalho.module.css'

export default function Cabecalho(){
    return (
        <nav className={styles.Cabecalho}>
          <div className={styles.logo} >
            <Image src="/images/logo.svg" width={263} height={40} alt='jojos' />
          </div>
          <ul className={styles.link_itens}>
            <li>
              <Link href="/">Jogos</Link>
            </li>
            <li>
              <Link href="/">Sobre</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/"><span className={styles.carreira}>Carreira</span></Link>
            </li>
          </ul>
        </nav> 
      )
}