import WelcomePage from "./../Components/FirstPage"
import Divider from "./../Components/Divider"
import SkillsPage from "./../Components/Skills"
import ExperiencePage from "../Components/ExperiencePage"
import Footer from "../Components/Footer"
export default function Home() {
  return (
    <div>
      <WelcomePage/>
      <Divider/>
      <SkillsPage/>
      <ExperiencePage/>
      <Divider/>
      <Footer/>
    </div>
  )
}
