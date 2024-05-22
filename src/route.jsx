import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import News from "./pages/News";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";
import Document from "./pages/Document";
import Information from "./pages/Information";
import Profile from "./pages/Profile";
import Financial from "./pages/Financial";
import Movie from "./pages/Movie";
import Support from "./pages/Support";
import Password from "./pages/Password";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/login/page";
import Chart from "./pages/Chart";
import Ticket from "./pages/Ticket";
import Send from "./pages/Send";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/document",
        element: <Document />,
      },
      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/picture-movie",
        element: <Movie />,
      },

      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },

      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/financial",
        element: <Financial />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/ticket-list",
        element: <Ticket />,
      },
      {
        path: "/ticket-send",
        element: <Send />,
      },
      {
        path: "/password",
        element: <Password />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
