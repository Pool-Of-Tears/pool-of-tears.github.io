import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { ThemeProvider } from './components/ui/theme-provider';

const HomePage =lazy(() => import('./pages/Home'));
const NotFoundPage =lazy(() => import('./pages/NotFound'));
const LoadingPage = lazy(() => import('./pages/Loading'));
const Root = lazy(() => import('./layouts/Root'));

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path='/' element={ <Root /> }>
              <Route index element={ <HomePage /> }/>
            </Route>
            <Route path='*' element={ <NotFoundPage /> }/>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App