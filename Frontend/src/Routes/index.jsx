
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SearchPage from "../Pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:(<App></App>),
    children:[
      {
        path: "",
        element:(<Home></Home>)
      },{
        path:"search",
        element:(<SearchPage></SearchPage>)
      }
    ]
  },

  
    
]);
export default router;


