import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Sounds from "./Pages/Sounds";
import Chat from "./Pages/Chat";
import Stream from "./Pages/Stream";
import Pictures from "./Pages/Pictures";
import { CodeReview } from "./Pages/CodeReview";
import PullRequest from "./Pages/PullRequest";
import SamlLogin from "./Pages/SamlLogin";
import Cookies from "./Pages/Cookies";
import PostAuth from "./Pages/PostAuth";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <SamlLogin /> },
      { path: "/register", element: <Register /> },
      { path: "/sounds", element: <Sounds /> },
      { path: "/chat", element: <Chat /> },
      { path: "/stream", element: <Stream /> },
      { path: "/images", element: <Pictures /> },
      { path: "/pullrequest", element: <PullRequest /> },
      { path: "/post-auth/:token", element: <PostAuth /> },
    ],
  },
]);

export default function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </RecoilRoot>
  );
}
