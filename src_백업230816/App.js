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

// 모바일 감지하는거 -> isMobile ( 설치 해야함 )
import { isMobile } from "react-device-detect";
import MobileRoot from "./pages/mobile/MobileRoot";
import MobileHome from "./pages/mobile/MobileHome";
import { AuthContextProvider } from "./context/AuthContext";



export default function App() {

  let router = null 

  if(isMobile){//만약 모바일환경이라면(isMobile) 아래것을 보여줘라
    router = createBrowserRouter([
      {
        path:'/',
        element:<MobileRoot/>,
        children:[
          {
            index:true,
            element:<MobileHome/>
          }
          
        ]
      }
    ])
  }else{
    router = createBrowserRouter([
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
            path:'/product/:productId',
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
      }
    ])
  }

  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router}/>
      </AuthContextProvider>
    </div>
  );
}

// export default App;
