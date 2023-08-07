import { Button, Col, Container, Row } from "react-bootstrap";
import "./Product.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 컴포넌트에서 이미지 삽입하기
// 1) public 폴더에 이미지 넣기
// 2) css 파일 따로 작성 후 url() => src 폴더에 이미지가 존재하는 경우

// 페이지 이동
// 1) a 태그
// 2) react 방법 - <Link to='이동경로'/>, useNavigate() : state 설정된 값 유지 위해서는 이 방법으로 이동

function Product({ shoes, setshoes }) {
  // 넘어온 신발 데이터 가져오기

  const [count, setcount] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="main-bg"></div>
      </div>
      <Container fluid>
        <Row className="mx-3">
          {shoes.map((item, idx) => {
            return (
              <Col className="mt-3" md={3} key={item.id}>
                <div>
                  <img src={item.src} alt={item.alt} className="img-fluid d-block" />
                  <div className="px-3 h6">
                    <p className="small">
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/detail/" + item.id);
                        }}
                      >
                        {item.pname}
                      </a>
                    </p>
                    <p className="small">색상 : {item.color}</p>
                    <p className="small">가격 : {item.price}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="mt-3 mx-3">
          <Button
            disabled={isLoading}
            variant="outline-secondary"
            onClick={() => {
              setisLoading(true);
              let url = "";
              if (count === 0) {
                url = "https://JaeBuhmJo.github.io/product.json";
                setcount(count + 1);
              } else if (count === 1) {
                url = "https://JaeBuhmJo.github.io/product2.json";
                setcount(count + 1);
              } else {
                alert("더 이상 가져올 데이터가 없습니다.");
                setisLoading(false);
                return;
              }
              axios
                .get(url)
                .then((response) => {
                  console.log(response.data);
                  if (response.data) {
                    let newArr = [...shoes, ...response.data];
                    setshoes(newArr);
                  }
                  setisLoading(false);
                })
                .catch(() => {
                  console.log("오류 발생");
                  setisLoading(false);
                });
            }}
          >
            {isLoading ? "로딩중..." : "더보기....."}
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Product;
