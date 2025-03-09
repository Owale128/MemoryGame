import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Difficulty from "./pages/Difficulty";
import GamePage from "./pages/gamePage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        
       children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/difficulty',
            element: <Difficulty />
        }, 
        {
            path: '/gamePage',
            element: <GamePage />
        }
       ]
    }
])