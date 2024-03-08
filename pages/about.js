import Image from "next/image";

import Styles from '../styles/About.module.css'


export default function About(){
    return (
        <div className={Styles.about}>
            <h1>Sobre o projeto</h1>
            <p>A PokeNext fornece dados essenciais sobre Pokémon, como peso, altura, identificação única e habilidades especiais. Com essa API, você pode criar aplicativos ou ferramentas que explorem essas informações, seja para calcular estatísticas de batalha ou simplesmente aprender mais sobre os Pokémon.</p>
            <Image 
            src="/images/charizard.png" 
            width="300"
            height="300"
            alt="Charizard" />
        </div>
    )
}