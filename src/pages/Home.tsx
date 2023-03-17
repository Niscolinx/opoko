import Header from '../components/Header';
import Auth from '../container/Auth';

function Home() {
  return (
    <div className="px-16">
      <Header />

      <Auth />
    </div>
  );
}

export default Home;
