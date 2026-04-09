import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from './Home';
import Games from './Games';
import About from './About';
import News from './News';
import Contact from './Contact';
import Auth from './Auth';

type Page = 'home' | 'games' | 'about' | 'news' | 'contact' | 'login' | 'register';

export default function Index() {
  const [page, setPage] = useState<Page>('home');

  const handleNav = (p: string) => {
    setPage(p as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home onNav={handleNav} />;
      case 'games': return <Games />;
      case 'about': return <About onNav={handleNav} />;
      case 'news': return <News />;
      case 'contact': return <Contact />;
      case 'login': return <Auth initialMode="login" />;
      case 'register': return <Auth initialMode="register" />;
      default: return <Home onNav={handleNav} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-nunito">
      <Navbar current={page} onNav={handleNav} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNav={handleNav} />
    </div>
  );
}
