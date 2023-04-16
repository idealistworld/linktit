import Header from "../components/header/header"
import Styles from "../styles/link_settings.module.css"
import Link_Display from "../components/link_display/link_display"
import { useRouter } from "next/router";


export default function Page() {
  const router = useRouter();

  return (
    <div className={Styles.landingContainer}>
      <Header></Header>
      <div className={Styles.centerContent}>
        <h1 className={Styles.landingTitle}>Add Settings<br></br><span className={Styles.outlineText}>for your link</span></h1>
        <div className={Styles.linkInputContainer}>
          <p className={Styles.linkContainer}>www.pornhub.com</p>
          <div className={Styles.settingsContainer}>
            <h1 className={Styles.settingsContainerTitle}>Requirements</h1>
            <p className={Styles.settingsContainerParagraph}>Select options to require when a user is visiting the site.</p>
            <Link_Display linkSettingType = "Email Address"></Link_Display>
            <Link_Display linkSettingType = "Phone Number"></Link_Display>
          </div>
        </div>
        <br></br>
        <br></br>
        <button className = {Styles.continueButton} type="button" onClick={() => { router.push("linkCreated"); }}>Continue</button>
      </div>
    </div>
  )
}