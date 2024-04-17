import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import { 
  CarouselGreenstash, 
  CarouselMyne, 
  CarouselFeatured 
} from './components/Carousel'


function App() {
  return (
    <Router>
      <header>
        hello
        <Navbar />
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
  )
}

export default App
