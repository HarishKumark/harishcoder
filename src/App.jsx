import { BrowserRouter as Router, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Main from "./pages/Main/Main";
// import ScrollToTop from "./utils/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
