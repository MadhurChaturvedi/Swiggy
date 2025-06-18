import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./Components/Header.js";
import Body from "./Body.js";
import Footer from "./Components/Footer.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Error from "./pages/Error.js";
import Follow from "./pages/Follow.js";
import Restaurantmenu from "./Components/Restaurantmenu.js";
import { lazy, Suspense } from "react";
import "../index.css"
// import Grocoery from "./Components/Grocoery.js";

// chuncking - mean we have to make out code in to chunks 
// Code splitting
// dynamic bundeling

// Lazy Loading initially it will not load but when it go to link it will load the code for the pertiular 


//bloating when you app size is to big dynamic import 
const Grocoery = lazy(() => import("./Components/Grocoery.js"))

function AppLayout() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}


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
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/follow",
                element: <Follow />
            },
            {
                path: "/restaurant/:ID",
                element: <Restaurantmenu />
            },
            {
                path: "/Grocoery",
                element: <Suspense fallback={
                    <p>
                        Loading....
                    </p>
                }><Grocoery /></Suspense> // it will suspense the component while it 's take time to loading
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
