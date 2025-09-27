import './App.scss'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import Presence from './components/Presence/Presence'

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Map/>
      <Presence/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
