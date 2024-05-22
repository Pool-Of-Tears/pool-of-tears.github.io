import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';

export default function Root() {
  return (
    <div className="root-layout dark:bg-black/65">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
        <GoTop />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
