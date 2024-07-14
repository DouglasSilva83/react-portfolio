import styles from "./App.module.css"
import { About } from "./Components/About/About"
import { Contact } from "./Components/Contact/Contact"
import { Experience } from "./Components/Experience/Experience"
import { Hero } from "./Components/Hero/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import { Projects } from "./Components/Projects/Projects"

function App() {
  return (
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
  )
}

export default App