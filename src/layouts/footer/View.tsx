import React from "react";
import { Container, Row } from "reactstrap";

const View = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row>
          <div className="items">
            <div className="item">会員登録</div>
            <div className="item">運営会社</div>
            <div className="item">利用規約</div>
            <div className="item">個人情報の取扱について</div>
            <div className="item">特定商取引法に基づく表記</div>
            <div className="item">お問い合わせ</div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default View;
