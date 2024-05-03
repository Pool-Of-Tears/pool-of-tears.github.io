import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ThemeProvider } from './components/ui/theme-provider';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';



function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
        {/* <Footer />  */}
      </Router>
    </ThemeProvider>
  )
}

export default App