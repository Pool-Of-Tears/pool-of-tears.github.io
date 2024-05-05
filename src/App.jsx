import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ThemeProvider } from './components/ui/theme-provider';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';
import Root from './layouts/Root';



function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Router>
        <Routes>
          <Route path='/' element={ <Root /> }>
            <Route index element={ <Home /> }/>
          </Route>
          <Route path='*' element={ <NotFoundPage /> }/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App