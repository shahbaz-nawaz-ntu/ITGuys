import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeThree from "./components/HomeThree/index.jsx";
import Layout from "./components/Helper/Layout.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
     
      {
        path: "/",
        element: <HomeThree />
      },
      
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
