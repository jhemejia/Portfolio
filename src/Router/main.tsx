import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/pages/Home.tsx"
import ErrorPage from '../Components/organisms/ErrorPage.tsx';
import LayoutTemplate from '../Components/organisms/Drawer.tsx';
import Login from '../Components/pages/Login.tsx';
import Signup from '../Components/pages/Signup.tsx';
import ProfilePage from '../Components/pages/ProfilePage.tsx';
import Store from '../Components/pages/Store.tsx';
import MyWorkPage from '../Components/pages/MyWorkPage.tsx';
import ContactPage from '../Components/pages/ContactPage.tsx';
import PrivateRoute from "./PrivateRoute.tsx";
import ResumePage from "../Components/pages/Resume.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<ResumePage />
      },
      {
        path:"my-work",
        element:<MyWorkPage />
      },
      {
        path:"contact",
        element:<ContactPage />
      },
      
    ]
  },
  {
    path: "/main",
    element: <PrivateRoute>
                <LayoutTemplate />
              </PrivateRoute>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "profile",
        element: <div className="py-6 flex">
          <ErrorPage /> ,
          </div>
      },
      {
        path: "store",
        element: <div className="py-6 flex">
        <ErrorPage /> ,
        </div> ,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

],{
  basename:"/Portfolio/",
});



