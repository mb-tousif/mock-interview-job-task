import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Edit from "../Pages/Edit";
import List from "../Pages/List";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/> ,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/edit',
                element: <Edit/>
            },
            {
                path: '/list',
                element: <List/>
            }
        ]
    }
])

export default router;