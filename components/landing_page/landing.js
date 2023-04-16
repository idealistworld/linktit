import { useRouter } from "next/router";
import React from "react";
import Header from "../header/header";
import Styles from "./landing.module.css"
import LinkInput from "../linkInput/linkInput";
import miniBrowser from "./miniBrowser.svg"
import Image from "next/image";

function Landing() {
    const router = useRouter();
    return (
        <div className={Styles.landingContainer}>
            <Header></Header>
            <Image src={miniBrowser} className={Styles.miniBrowser}></Image>
            <div className={Styles.landingContent}>
                <h1 className={Styles.landingTitle}>Boost Your <br></br><span className={Styles.outlineText}>Conversions</span></h1>
                <LinkInput></LinkInput>
                <p className={Styles.landingParagraph}>Ye (/jeɪ/ YAY; born Kanye Omari West /ˈkɑːnjeɪ/ KAHN-yay; June 8, 1977) is an American rapper, singer, songwriter, record producer, and fashion designer.
                </p>
            </div>
        </div>
    );
}

export default Landing;