import React from "react";
import Styles from './header.module.css';
import SignButton from "./signButton/signButton"

function Header() {
  return (
    <div className={Styles.headerContainer}>
      <h1 className={Styles.headerTitle}>linktit</h1>
      <SignButton></SignButton>
    </div>
  );
}

export default Header;
