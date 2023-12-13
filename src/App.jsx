import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Coaches from './components/Coaches/Coaches'
import Photos from './components/Photos/Photos'
import SectionsProvider from './SectionsProvider'
function App() {

  return (
    <SectionsProvider>
      <Header />
      <Hero />
      <About />
      <Coaches />
      <Photos />
    </SectionsProvider>
  )
}

export default App
