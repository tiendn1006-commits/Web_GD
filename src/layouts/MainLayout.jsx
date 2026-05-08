import { Outlet } from 'react-router-dom';
import { Navbar } from '../features/Home/components/Navbar';
import { Footer } from '../features/Home/components/Footer';

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
