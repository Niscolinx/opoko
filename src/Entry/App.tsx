import {
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import 'animate.css/animate.css';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />}>
      <Route path="/about-us" element={<AboutUs />} />,
    </Route>,
    <Route path="*" element={<Navigate to="/" />} />,
  ])
);

const App = () => {
  return (
    <div className="text-[1.6rem]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
