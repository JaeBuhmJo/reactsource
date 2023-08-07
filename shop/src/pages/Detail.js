import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Nav, Row, Table } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { addCart } from "./../store";
import { useDispatch } from "react-redux";

function Detail(props) {
  const shoes = props.shoes;
  console.log("shoes", shoes);

  const [discount, setdiscount] = useState(
    <Col>
      <Alert variant="danger">해당 상품을 3초 이내에 구입 시 특별할인 10%</Alert>
    </Col>
  );

  const [amount, setamount] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // 특별할인 블럭 보여주기
  useEffect(() => {
    // 마운트 시 실행할 구문

    let timeout = setTimeout(() => {
      setdiscount(null);
    }, 3000);

    if (isNaN(amount)) {
      alert("수량을 확인해 주세요");
      setamount(0);
    }

    return () => {
      // 언마운트 시 실행 구문
      clearTimeout(timeout);
    };
  }, [amount]);
  // 추가 대괄호는 마운트/언마운트 구분용

  // 주소줄에 넘어오는 아이디 가져오기
  const { id } = useParams();
  console.log("id", id);

  let product = shoes.find((shoe) => shoe.id === parseInt(id));
  let result = undefined;
  if (!product) {
    result = <Row>잘못된 요청입니다</Row>;
  } else {
    result = (
      <>
        <Row>{discount}</Row>
        <Row className="mt-3">
          <Col>
            <img src={product.src} alt={product.alt} />
          </Col>
          <Col className="align-self-center">
            <Table>
              <tbody>
                <tr>
                  <td>제품명</td>
                  <td>
                    <b>{product.pname}</b>
                  </td>
                </tr>
                <tr>
                  <td>색상</td>
                  <td>
                    <b>{product.color}</b>
                  </td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td>
                    <b>{product.price}</b>
                  </td>
                </tr>
                <tr>
                  <td>구매수량</td>
                  <td>
                    <Form.Control placeholder="수량" name="amount" value={amount} onChange={(e) => setamount(e.target.value)} />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                if (window.confirm("장바구니로 이동하시겠습니까?")) {
                  dispatch(addCart({ product, amount }));
                  navigate("/cart");
                }
              }}
            >
              구매하기
            </Button>
          </Col>
        </Row>
      </>
    );
  }

  return (
    <Container>
      {result}
      <ProductNav />
    </Container>
  );
}

function ProductNav() {
  const [tabs, settabs] = useState(0);

  const onClick = (e) => {
    let id = e.target.id;
    // let tabs = 0;
    if (id == 0) {
      settabs(0);
    } else if (id == 1) {
      settabs(1);
    } else {
      settabs(2);
    }
  };

  return (
    <div className="mt-3">
      <Nav defaultActiveKey="/review" variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="/review" onClick={onClick} id={0}>
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/qna" onClick={onClick} id={1}>
            Q&A
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/product" onClick={onClick} id={2}>
            상품정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContents tabs={tabs} />
    </div>
  );
}

function TabContents(props) {
  if (props.tabs === 0) {
    return <div>첫번째 탭에 보여줄 내용</div>;
  } else if (props.tabs === 1) {
    return <div>두번째 탭에 보여줄 내용</div>;
  } else {
    return <div>세번째 탭에 보여줄 내용</div>;
  }
}

export default Detail;
