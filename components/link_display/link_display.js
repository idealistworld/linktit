import React from "react";
import Styles from './link_display.module.css';

function Link_Display(props) {
  return (
    <div className={Styles.linkInputContainer}>
      <input type="checkbox"></input>
      <p className={Styles.linkSettingtype}>{props.linkSettingType}</p>
    </div>
  );
}

export default Link_Display;
