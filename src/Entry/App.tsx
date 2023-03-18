import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import 'animate.css/animate.css';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../container/Layout';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import Billing from '../pages/billing/Billing';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />,
      <Route path="about-us" element={<AboutUs />} />,
      <Route path="pricing" element={<Pricing />} />,
    </Route>,

    <Route path="/billing" element={<Billing/>} />,
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
