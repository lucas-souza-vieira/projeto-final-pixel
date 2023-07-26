import Cabecalho from "./Cabecalho";
import Rodape from "./rodape";

export default function MainContainer({ children }){
    return(
        <>
        <Cabecalho />
        <div>{children}</div>
        <Rodape />
        </>
    )
}