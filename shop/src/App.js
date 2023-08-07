import "./App.css";
import data from "./data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Product from "./Product";
import Main from "./Main";
import Error from "./Error";
import Detail from "./pages/Detail";
import One from "./pages/One";
import Two from "./pages/Two";
import Event from "./pages/Event";
import Redux from "./Redux";
import Cart from "./pages/Cart";

function App() {
  // 가장 처음에 보여줄 신발 데이터
  const [shoes, setshoes] = useState(data);

  // 경로 설정
  let router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
          { path: "/", element: <Product shoes={shoes} setshoes={setshoes} /> },
          { path: "/detail/:id", element: <Detail shoes={shoes} /> },
          { path: "/runningshoes", element: <Runningshoes /> },
          {
            path: "/event",
            element: <Event />,
            children: [
              { path: "one", element: <One /> },
              { path: "two", element: <Two /> },
            ],
          },
          { path: "/cart", element: <Cart /> },
        ],
      },
    ],
    { basename: "/" }
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Runningshoes() {
  return (
    <div>
      <h1>운동화</h1>
    </div>
  );
}

export default App;
