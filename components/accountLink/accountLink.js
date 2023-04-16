import React from "react";
import Styles from './accountLink.module.css';
import { useRouter } from "next/router";

function AccountLink() {
  const router = useRouter();

  return (
    <div className = {Styles.linkInputContainer}>
      <p>pornhub.com</p>
      <div><span className = {Styles.statTitle}>Clicks: </span>420 <span className = {Styles.statTitle}>Emails: </span>69</div>
      <button className = {Styles.linkButton} type="button" onClick={() => { router.push("link_stats"); }}>Go</button>
    </div>
  );
}

export default AccountLink;
