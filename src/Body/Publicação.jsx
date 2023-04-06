import pubStyle from './publicacao.module.css'
import { FiExternalLink } from "react-icons/fi";

export function Publicacao(props){
    return (
        <>
            <div className={pubStyle.container}>
                <img src={props.img}  className={pubStyle.perfil}/>
                <h2 className={pubStyle.Titulo}>{props.Titulo}</h2>
                <p className={pubStyle.Conteudo}>{props.Conteudo}</p>
                <a className={pubStyle.link} href={props.Link} target='_blank'>
                    <p>Acesse Aqui</p>
                   <FiExternalLink />
                </a>
            </div>
        </>
    )
}