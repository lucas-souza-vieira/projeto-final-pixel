import Link from 'next/link'

export default function Cabecalho(){
    return (
        <>
          <Link href='/'>
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
        </>
      )

}