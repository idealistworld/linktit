import Header from "../components/header/header"
import Styles from "../styles/link_stats.module.css"
import Link_Display from "../components/link_display/link_display"
import { useRouter } from "next/router";


export default function Page() {
  const router = useRouter();

  return (
    <div className={Styles.landingContainer}>
      <Header></Header>
      <div className={Styles.centerContent}>
        <h1 className={Styles.landingTitle}>Link Stats:</h1>
        <p className={Styles.settingsContainerParagraph}>www.pornhub.com</p>
        <div className = {Styles.linkStats}><span className = {Styles.statTitle}>Clicks: </span>420 <span className = {Styles.statTitle}>Emails: </span>69</div>
        <div className = {Styles.statContainer}><span className = {Styles.statTitle}>Emails: </span><div className = {Styles.dataContainer}><span className = {Styles.statObservation}>cnakayama567@gmail.com</span> <span className = {Styles.statObservation}>This is an email</span><span className = {Styles.statObservation}>cnakayama567@gmail.com</span> <span className = {Styles.statObservation}>This is an email</span><span className = {Styles.statObservation}>This is an email</span></div></div>
        <button className = {Styles.continueButton} type="button" onClick={() => { router.push("linkCreated"); }}>Export Data</button>
        <button className = {Styles.deleteButton} type="button" onClick={() => { router.push("userViewLink"); }}>Delete Link</button>
      </div>
    </div>
  )
}