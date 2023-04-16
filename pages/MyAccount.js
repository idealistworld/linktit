import React from "react";
import { useRouter } from "next/router";
import Styles from "../styles/MyAccount.module.css"
import Header from "../components/header/header"
import AccountLink from "../components/accountLink/accountLink";

function MyAccount() {
  const router = useRouter();

  return (
    <div className={Styles.landingContainer}>
      <Header></Header>
      <div className={Styles.centerContent}>
        <h1 className={Styles.landingTitle}>My Account</h1>
        <p className={Styles.landingParagraph}>These are the links that I’ve created in the past.</p>
        <div className={Styles.linksCreatedContainer}>
          <AccountLink></AccountLink>
          <AccountLink></AccountLink>
          <AccountLink></AccountLink>
        </div>
        <button className={Styles.continueButton} type="button" onClick={() => { router.push("link_settings"); }}>Create New</button>
      </div>
    </div>
  );
}

export default MyAccount;
