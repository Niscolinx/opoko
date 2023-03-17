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

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,

    <Route path="*" element={<Navigate to="/" />} />,
  ])
);

const App = () => {
  return (
    <div className="text-[1.6rem] bg-blue-600">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
