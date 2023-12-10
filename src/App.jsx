import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import SectionsProvider from './SectionsProvider'
function App() {

  return (
    <SectionsProvider>
      <Header />
      <Hero />
      <About />
    </SectionsProvider>
  )
}

export default App
