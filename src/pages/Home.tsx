import Header from '../components/Header';
import Hero from '../components/Hero';
import Auth from '../container/Auth';

function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />

      <Auth />
    </div>
  );
}

export default Home;
