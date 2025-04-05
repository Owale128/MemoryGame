import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Difficulty from "./pages/Difficulty";
import GamePage from "./pages/GamePage";
import Category from "./pages/Category";
import NotFound from "./components/NotFound";
import Results from "./pages/Results";
import ScoreList from "./pages/ScoreList";

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
            path: '/categories',
            element: <Category />
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
            path: '/result',
            element: <Results />
        },
        {
            path: '/scoreList',
            element: <ScoreList />
        },
       ],
       errorElement: <NotFound errorTxt={""} />
    }
])