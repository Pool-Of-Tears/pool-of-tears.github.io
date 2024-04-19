import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import { ThemeProvider } from './components/ui/theme-provider';
import Navbar from './components/Navbar'
import NavMenu from './components/NavMenu'
import { 
  CarouselGreenstash, 
  CarouselMyne, 
  CarouselFeatured 
} from './components/Carousel'


function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Router>
        <header>
          <Navbar />
          {/* <NavMenu /> */}
        </header>
        <main>
          <h1>Pool of tears</h1>
            <div className="card">
              <h2 className='align-middle text-center' >Greenstash</h2>
              <CarouselGreenstash />
              <h2 className='align-middle text-center' >Myne</h2>
              <CarouselMyne />
              <h2>Featured in</h2>
              <CarouselFeatured />
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
