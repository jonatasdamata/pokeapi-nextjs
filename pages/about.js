import Image from "next/image";

import Styles from '../styles/About.module.css'


export default function About(){
    return (
        <div className={Styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto libero sint inventore quo, ratione aliquid facilis quod enim, veritatis ex dolorum maxime? Nisi voluptates itaque hic! Soluta quisquam beatae mollitia.</p>
            <Image 
            src="/images/charizard.png" 
            width="300"
            height="300"
            alt="Charizard" />
        </div>
    )
}