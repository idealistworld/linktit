import React from "react";
import { useRouter } from "next/router";
import Styles from "../styles/userViewLink.module.css"
import Header from "../components/header/header"
import Image from "next/image"
import CompanyLogo from "../components/partiful.png"


function userViewLink() {
  const router = useRouter();

  return (
    <div className={Styles.landingContainer}>
      <Header></Header>
      <div className={Styles.centerContent}>
        <h1 className={Styles.landingTitle}>Hey There.<br></br><span className={Styles.outlineText}>Just One Sec.</span></h1>
        <div className = {Styles.companyInfo}><Image src = {CompanyLogo}></Image><p className={Styles.landingParagraph}>Redirecting to
www.site.com.<br></br>Complete the form to continue to the site.</p>
        </div> 
        <input className={Styles.inputSection} placeholder="Email"></input>
        <input className={Styles.inputSection} placeholder="Phone Number"></input>
        <button className={Styles.continueButton} type="button" onClick={() => { router.push("MyAccount"); }}>Continue</button>
        <div className={Styles.signUpSection}> 
          <p className={Styles.landingParagraph}>Start boosting your retention and customer data with linktit.  Join now.</p>
          <button className={Styles.signUpButton}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default userViewLink;
