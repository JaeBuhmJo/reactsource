import "./App.css";
import { Row, Col, Navbar, Container, NavDropdown, Nav, Form, Button } from "react-bootstrap";
import data from "./data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";
import Error from "./Error";
import Detail from "./pages/Detail";
import One from "./pages/One";
import Two from "./Two";
import Event from "./pages/Event";

function App() {
  // 가장 처음에 보여줄 신발 데이터
  const [shoes, setshoes] = useState(data);

  // 경로 설정
  let router = createBrowserRouter(
    [
      { path: "/", element: <Main shoes={shoes} />, errorElement: <Error /> },
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
    ],
    { basename: "/" }
  );

  return (
    <div className="App">
      <Top />
      <Menu />
      <RouterProvider router={router} />
      <Footer />
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

function Top() {
  return (
    <Container className="my-2" fluid>
      <Row className="text-center">
        <Col>
          <Navbar.Brand href="/">
            <img src="/logo-no-background.png" alt="" className="d-inline-block" width="200" height="124"></img>
          </Navbar.Brand>
        </Col>
      </Row>
    </Container>
  );
}

function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="전체카테고리" id="basic-nav-dropdown">
              <NavDropdown.Item href="/runningshoes">운동화</NavDropdown.Item>
              <NavDropdown.Item href="">구두</NavDropdown.Item>
              <NavDropdown.Item href="">부츠/워커</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">SPECIAL</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/runningshoes">운동화</Nav.Link>
            <Nav.Link href="">구두</Nav.Link>
            <Nav.Link href="/event/one">이벤트</Nav.Link>
            <Nav.Link href="">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button variant="success">Search</Button>
          </Form>
          <div className="mx-3 text-white">님 반갑습니다</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
