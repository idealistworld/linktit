import React from "react";
import Styles from './linkInput.module.css';
import { useRouter } from "next/router";

function LinkInput() {
  const router = useRouter();

  return (
    <div className = {Styles.linkInputContainer}>
      <input className = {Styles.inputSection} placeholder="Site URL"></input>
      <button className = {Styles.linkButton} type="button" onClick={() => { router.push("link_settings"); }}>Go</button>

    </div>
  );
}

export default LinkInput;
