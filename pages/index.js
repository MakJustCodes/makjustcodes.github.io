import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Makenson Noel | Software Engineer</title>
        <meta name="description" content="If you're looking for a motivated and dedicated software engineer, please don't hesitate to reach out." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Projects />
    <Contact />
    </div>
   
  )
}
