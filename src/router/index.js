import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../page/home'
import Search from '../page/search'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
    path: "/home",
    element: <Home/>,
    },
    {
    path: "/search/:keyword",
    element: <Search/>,
    },
  ]);

export default router