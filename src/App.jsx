import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Components//Pages/Login/Login";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import BrandDetails from "./Components/Pages/BrandDetails/BrandDetails";  
import CarDetails from "./Components/Pages/CarDetails/CarDetails";
import CarUpdate from "./Components/Pages/CarUpdate/CarUpdate";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Home from "./Components/Pages/Home/Home";
import MainLayout from "./Components/Pages/Home/MainLayout";
import MyCart from "./Components/Pages/MyCart/MyCart";
import Register from "./Components/Pages/Register/Register";
import PrivateRoute from "./Components/Provider/PrivateRoute";
import AddCart from "./Components/Pages/MyCart/AddCart";
const CarRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path:"/myCart",
        loader:()=>fetch('https://assignment-no-10-server-three.vercel.app/myCart'),
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        
      },
      
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path: "/brandName/:brandName", 
        loader:()=>fetch('https://assignment-no-10-server-three.vercel.app/allcar'),
        element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
      },
      {
        path:"carDetails/:id",
        loader:()=>fetch('https://assignment-no-10-server-three.vercel.app/allcar'),
        element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>
      },
      {
        path:"/updateCar/:id",
        loader:({params})=>fetch(`https://assignment-no-10-server-three.vercel.app/allcar/${params.id}`),
        element:<PrivateRoute><CarUpdate></CarUpdate></PrivateRoute>,
      },
    ]

  },
]);
export default CarRoutes
