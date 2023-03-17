import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Auth from './Auth';

function Layout() {
  return (
    <div className="px-[10rem]">
      <Header />

      <div className='mt-[5rem]'>
        <Outlet />
      </div>
      <Auth />
    </div>
  );
}

export default Layout;
