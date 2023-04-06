import CorpoStyle from './corpo.module.css'
import logoUfpa from '../assets/UFPA-LOGO.png'
import { Publicacao } from './Publicação'
import imgtest from  "../assets/imgTest.jpg";
import Coordenacao from  "../assets/CoorAcade.jpeg";


export function Corpo(){
    return (
        <>
            <div className={CorpoStyle.Header}>
                <img className={CorpoStyle.logo} src={logoUfpa} alt="Logo Geral da UFPA" />
                <h3 className={CorpoStyle.nameHeader}>Coordenação Acadêmica</h3>
            </div>

            <main className={CorpoStyle.Corpo}> 
                <Publicacao 
                    img={Coordenacao} 
                    Titulo="EDITAL UNIFICADO PIBEX - 2023" 
                    Conteudo="Seleção de bolsista para programas/projetos PIBEX: GETI e LOGOS. Os interessados devem encaminhar histórico e documentos indicados no endereço de email especificado no edital." 
                    Link="https://drive.google.com/file/d/1y1mNjzbinRlxmBIyZz7lwiDDvlvsTMxM/view?usp=sharing"
                />
            </main>

            <footer >
                <p>Castanhal - 2023</p>
                <p className={CorpoStyle.autor}>Criado por @Akaz Marinho</p>
            </footer>
        </>
    )
}