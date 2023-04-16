import Landing from "../components/landing_page/landing"
import Link_Settings from "./link_settings"
import Styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className = {Styles.homeContainer}>
        <Landing />
    </div>  
  )
}
