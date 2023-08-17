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

  //let router = null 

  //if(isMobile){//만약 모바일환경이라면(isMobile) 아래것을 보여줘라
    const router = createBrowserRouter([
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
  // 


  return (
    // 모든페이지들에 로그인 로그아웃을 적용시켜줘야하기때문에 AuthContextProvider 로 RouterProvider 을 감싸줌
    
      <AuthContextProvider>
        <RouterProvider router={router}/>
      </AuthContextProvider>
   
  );
}

// export default App;
