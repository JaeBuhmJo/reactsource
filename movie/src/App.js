import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Menu";
import Error from "./Error";
import Home from "./Home";
import Movie from "./Movie";
import axios from "axios";
import { useState } from "react";

function App() {
  const [movies, setmovies] = useState(null);

  // 전일자 영화 순위 가져오기 - axios
  const getMovie = () => {
    let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230803";
    axios
      .get(url)
      .then((response) => {
        const dailyBoxOfficeList = response.data.boxOfficeResult.dailyBoxOfficeList;
        console.log(dailyBoxOfficeList);
        // movies 변수에 1~10위 데이터가 담기게 됨
        setmovies(dailyBoxOfficeList);
      })
      .catch(() => console.log("오류"));
  };

  // 경로 생성
  let router = createBrowserRouter(
    [
      { path: "/", element: <Home />, errorElement: <Error /> },
      { path: "/movie", element: <Movie getMovie={getMovie} movies={movies} /> },
      {
        path: "/theaters",
        element: (
          <div className="container mt-3">
            <h1>극장</h1>
          </div>
        ),
      },
      {
        path: "/ticket",
        element: (
          <div className="container mt-3">
            <h1>예매</h1>
          </div>
        ),
      },
      {
        path: "/store",
        element: (
          <div className="container mt-3">
            <h1>스토어</h1>
          </div>
        ),
      },
      {
        path: "/event",
        element: (
          <div className="container mt-3">
            <h1>이벤트</h1>
          </div>
        ),
      },
    ],
    { basename: "/" }
  );

  return (
    <div>
      <Menu />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
