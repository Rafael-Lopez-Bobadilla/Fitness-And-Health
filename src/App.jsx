import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Coaches from './components/Coaches/Coaches'
import Photos from './components/Photos/Photos'
import Pricing from './components/Pricing/Pricing'
import Faq from './components/Faq/Faq'
import SectionsProvider from './SectionsProvider'
function App() {

  return (
    <SectionsProvider>
      <Header />
      <Hero />
      <About />
      <Coaches />
      <Photos />
      <Pricing />
      <Faq />
    </SectionsProvider>
  )
}

export default App
