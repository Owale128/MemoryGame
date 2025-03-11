import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Difficulty from "./pages/Difficulty";
import GamePage from "./pages/GamePage";
import ScorePage from "./pages/ScorePage";

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
        },
        {
            path: '/scorePage',
            element: <ScorePage />
        }
       ]
    }
])