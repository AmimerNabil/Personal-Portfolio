import WelcomePage from "./../Components/FirstPage"
import Divider from "./../Components/Divider"
import SkillsPage from "./../Components/Skills"
import ExperiencePage from "../Components/ExperiencePage"
import Footer from "../Components/Footer"
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nabil Amimer | Personal Portfolio</title>
        <meta name="description" content="Devpro Media is a web design and web developing agency. We specialize in website design, website building, graphic design and SEO management." />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <WelcomePage />
        <Divider />
        <SkillsPage />
        <ExperiencePage />
        <Divider />
        <Footer />
      </div>
    </div>
  )
}
