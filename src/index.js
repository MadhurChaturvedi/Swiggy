import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./Components/Header.js";
import Body from "./Body.js";
import Footer from "./Components/Footer.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Error from "./pages/Error.js";

function AppLayout() {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
