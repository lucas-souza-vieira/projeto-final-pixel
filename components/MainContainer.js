import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function MainContainer({ children }){
    return(
        <>
        <Cabecalho />
        <div>{children}</div>
        <Rodape />
        </>
    )
}