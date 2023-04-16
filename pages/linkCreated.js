import React from "react";
import { useRouter } from "next/router";
import Styles from "../styles/linkCreated.module.css"
import Header from "../components/header/header"

function linkCreated() {
  const router = useRouter();

  return (
    <div className={Styles.landingContainer}>
      <Header></Header>
      <div className={Styles.centerContent}>
        <h1 className={Styles.landingTitle}>Link Created<br></br><span className={Styles.outlineText}>Use it below.</span></h1>
        <p className={Styles.linkContainer}>www.pornhub.com</p>
        <button className={Styles.continueButton} type="button" onClick={() => { router.push("trackStats"); }}>Copy Link</button>
      </div>
    </div>
  );
}

export default linkCreated;
