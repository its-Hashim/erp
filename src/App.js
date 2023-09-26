import React from 'react';
import NavBar from './Components/NavBar';
import Cart from './Page Component/Purchase/Cart';
import CheckoutForSales from './Page Component/Purchase/CheckoutForSales';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bill from './Page Component/Purchase/Bill/Bill';
import Sale from './Page Component/Sales/Sale/Sale';
import Clients from './Page Component/Clients/Clients';
import ClientHistory, {loader as clientsHistoryLoader} from './Page Component/Clients/CientsHistory';
import Products, {action as productAction} from './Page Component/Products/Products';
import AddClients,{ action as addClientAction, loader as addClientLoader} from "./Page Component/Clients/AddClients"
import AddProducts from './Page Component/Products/AddProducts';
import EditProduct, { action as editProductAction } from './Page Component/Products/EditProduct';
import Categories, {loader as categoriesLoader} from './Page Component/ProductCategory/Categories';
import AddCategory,{action as addCategoryAction} from './Page Component/ProductCategory/AddCategory/AddCategory';
import Category,{loader as categoryLoader} from './Page Component/ProductCategory/Category/Category';
import Distributors from './Page Component/Distributors/Distributors';
import AddDistributors from './Page Component/Distributors/AddDistributors';
import DistributorsHistory, {loader as distributorsHistoryLoader } from './Page Component/Distributors/DistributorsHistory';
import Login, {action as logInAction, loader as logInLoader} from './Page Component/Auth/Login';
import SignUp, {action as signUpAction} from './Page Component/Auth/SignUp';
import ErrorPage from './Page Component/ErrorPages/ErrorPage';
import { tokenLoader as rootLoader } from './Util/auth';
import { action as logoutAction} from './Page Component/Auth/Logout'

function App() {
  const router = createBrowserRouter([
    { 
      path:"/",
      element:(<NavBar />),
      errorElement:<ErrorPage />,
      loader:rootLoader,
      children:[
        {index: true,element:<Cart />},
        {path:"/sellCheckout", element:<CheckoutForSales />},
        {path:'/sales', element:<Sale />},
        {path:'/sales/bill/:id', element:<Bill />},
        {path:'/clients', element:<Clients />},
        // {path:'/clients/details/:id', element:<Clients />},
        {path:'/clients/transaction/:id', loader: clientsHistoryLoader,element:<ClientHistory />},
        {path:'/clients/add-client', action: addClientAction, element:<AddClients />},
        {path:'/products', element:<Products />},
        {path:'/products/:id', action: editProductAction, element:<EditProduct />},
        {path:'/products/addProducts', action: productAction, element:<AddProducts />},
        {path:'/productsCatagory', loader:categoriesLoader, element:<Categories />},
        {path:'/productsCatagory/add', loader:categoriesLoader, action:addCategoryAction, element:<AddCategory />},
        {path:'/productsCatagory/:name', loader:categoryLoader, element:<Category />},
        {path:'/distributors', element:<Distributors />},
        {path:'/distributors/add', element:<AddDistributors />},
        {path:'/distributors/transaction/:id', loader:distributorsHistoryLoader, element:<DistributorsHistory />},
        {path:'/signUp', action:signUpAction, element:<SignUp />},
      ]
    },
    {path:'/login', loader:logInLoader, action:logInAction, element:<Login />},
    {path: 'logout',action: logoutAction},
  ])

  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
