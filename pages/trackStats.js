import React from "react";
import { useRouter } from "next/router";
import Styles from "../styles/trackStats.module.css"
import Header from "../components/header/header"

function TrackStats() {
  const router = useRouter();

  return (
    <div className={Styles.landingContainer}>
      <Header></Header>
      <div className={Styles.centerContent}>
        <h1 className={Styles.landingTitle}>Track Stats.<br></br><span className={Styles.outlineText}>Sign In.</span></h1>
        <p className={Styles.landingParagraph}>Sign in with Google to track the stats on your link.</p>
        <button className={Styles.continueButton} type="button" onClick={() => { router.push("MyAccount"); }}>Sign in With Google</button>
        <p className={Styles.linkContainer}>www.pornhub.com</p>
        <button className={Styles.copyLinkButton}>Copy Link</button>
      </div>
    </div>
  );
}

export default TrackStats;
