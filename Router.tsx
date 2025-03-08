import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/pages/Layout";
import Home from "./src/pages/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        
       children: [
        {
            path: '/home',
            element: <Home />
        }
       ]
    }
])