import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Head from "next/head";

export default function MainContainer({ children }){
    return(
        <>
        <Head>
            <link rel="icon" href="/icon.ico"/>
            <title>Jojos</title>
        </Head>
        <Cabecalho />
        <main className="espaçamento">{children}</main>
        <Rodape />
        </>
    )
}