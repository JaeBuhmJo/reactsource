import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
  const shoes = props.shoes;
  console.log("shoes", shoes);

  const [discount, setdiscount] = useState(
    <Col>
      <Alert variant="danger">해당 상품을 3초 이내에 구입 시 특별할인 10%</Alert>
    </Col>
  );

  // 특별할인 블럭 보여주기
  useEffect(() => {
    // 마운트 시 실행할 구문

    let timeout = setTimeout(() => {
      setdiscount(null);
    }, 3000);

    return () => {
      // 언마운트 시 실행 구문
      clearTimeout(timeout);
    };
  }, []);
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
                    <Form.Control placeholder="수량" name="amount" />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary" size="lg">
              구매하기
            </Button>
          </Col>
        </Row>
      </>
    );
  }

  return <Container>{result}</Container>;
}

export default Detail;
