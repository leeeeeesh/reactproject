import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Clinic from "./pages/Clinic";
import './App.css'
import ProductDetail from "./pages/ProductDetail";


export default function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/info',
          element:<Info/>
        },
        {
          path:'/clinic',
          element:<Clinic/>
        },
        {
          path:'/product',
          element:<Product/>
        },
        {
          path:'/productdetail',
          element:<ProductDetail/>
        },
        {
          path:'/event',
          element:<Event/>
        },
        {
          path:'/login',
          element:<Login/>
        },
      ]
    },
    // {
    //   path:'/home',
    //   element:<Home/>
    // },
    // {
    //   path:'/info',
    //   element:<Info/>
    // },
    // {
    //   path:'/search',
    //   element:<Search/>
    // },
    // {
    //   path:'/product',
    //   element:<Product/>
    // },
    // {
    //   path:'/event',
    //   element:<Event/>
    // },
    // {
    //   path:'/login',
    //   element:<Login/>
    // }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

// export default App;
