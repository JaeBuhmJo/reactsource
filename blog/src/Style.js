// 컴포넌트 스타일 작성
// 1) 객체 선언 : begin-react project 의 Hello1.js 참조
// 2) 직접 부여
// 3) css 파일 따로 만든 후 적용
// 4) react-bootstrap 적용(설치 요)
// 5) Styled-components(설치 요)

import { Navbar, Button, Container, Nav, NavDropdown } from "react-bootstrap";

function Style() {
  return (
    <>
      <div>
        <Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button> <Button variant="success">Success</Button> <Button variant="warning">Warning</Button> <Button variant="danger">Danger</Button> <Button variant="info">Info</Button> <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Style;
