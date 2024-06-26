
import styles from "./App.module.css"
import { About } from "./Components/About/About"
import { Experience } from "./Components/Experience/Experience"
import { Hero } from "./Components/Hero/Hero"
import { Navbar } from "./Components/Navbar/Navbar"

function App() {
  

  return (
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
      </div>
  )
}

export default App
