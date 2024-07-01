import React from "react";
import { Row, Col } from 'antd';

import Slideshow from  "../../components/main_header/index";
import "./style.scss";

function Home() {
  return (
    <div class="home">
      <Slideshow />
      <Row class="container-home" xs={12}>
          <Col class="bg-home" xs={9}></Col>
          <Col class="category" xs={3}></Col>
      </Row>
    </div>
  );
}

export default Home;
