import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Auth from '../container/Auth';

function Home() {
  return (
    <div className="px-16">
      <Header />

      <div>
        <Outlet />
      </div>
      <Auth />
    </div>
  );
}

export default Home;
