import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Cart from './components/Cart';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/userContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';



// react.createlement is actually a js object its not h1 tag yet
// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'reactinjs' }, //props
//   'React in js!'
// );

//this will print object
//console.log(heading);

const Grocery = lazy(() => import('./components/Grocery'));
 
const AppLayout = () => {
  const [userName, setUserName] = useState("Manju");
  //wrap the header and outlet with context provider
  //any component inside this provider can access the context value
  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedinUser: userName, setUserName }} >
        <Header />
        <Outlet />
      </UserContext.Provider>
      </Provider>
    </>
  )
}

//creating routee
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1 className='flex flex-col items-center justify-center align-middle h-screen bg-red-400 text-white text-3xl'>Loading.......</h1>}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
// render takes the object and convert to tag
//root.render(<AppLayout />);

//After router don
root.render(<RouterProvider router={appRouter}></RouterProvider>)

