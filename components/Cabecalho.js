import Link from 'next/link'
import styles from '../src/styles/Cabecalho.module.css'

export default function Cabecalho(){
    return (
        <>
          <Link  href='/'>
            Home
          </Link>
          <br/>

          <Link href='/blog'>
            Blog
          </Link>
          <br/>
    
          <Link href='/forms'>
            Forms
          </Link>

          <h1 className={styles.Cabecalho}> Teste styles</h1>
        </>
      )

}