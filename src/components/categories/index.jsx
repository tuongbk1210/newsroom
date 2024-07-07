import React, {useState} from "react";
import { Row, Col, Pagination } from 'antd';
import { Link } from 'react-router-dom';

import "./categories.scss"
import RightHomePage from "../rightHomePage";
import { DATA_PAGINATION ,DATA_HOME_MAIN } from "../../constants/common";
import ItemPopular from "../popular";

function Category() {

  const [current, setCurrent ] = useState(1);
  const pageSize = 10;
  const handleChange = (page) => {
    setCurrent(page)
  }

  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = DATA_PAGINATION.slice(startIndex, endIndex);

   const text = "Lorem ipsum dolor sit amet consec adipis elit"

  return (
    <div class="home">
      <Row>
          <Link className="link_current" to="page-home">Home</Link>&nbsp; /&nbsp; <Link className="link_current" to="category">Category</Link>&nbsp; /&nbsp; Technology
      </Row>
      <Row className="container-home" xs={24} lg={24}>
        <Col xs={24} sm={16}>
          <Row className="popular">
                <div className="text_popular">Technology</div>
                <Link to="category">View All</Link>
          </Row>
          <Row>
            {DATA_HOME_MAIN.map((item, key) => {
              return(
                <Row key={key} className="item_page_categories">
                <img src={item.img} alt="popular 1" width={"100%"} height={"200px"} />
                <div className="container_popular_text">
                  <div><span style={{color: "red"}}>Technology</span>/ January 01,2045</div>
                  <div className="text_popular_sub">Est set amet ipsum stet clita rebum duo</div>
                  <div>Rebum dolore duo et vẻo ipsum cilta, est ea sed duo diam ipsum, clita at justo, lorem amet
                    vero éo sed sit...
                  </div>
                </div>
            </Row>
              )
            })}
          </Row> 
          <Row className="container_pagination">
            {paginatedData.map((item, key)=>{
              return(
                <ItemPopular img={item.img} text={text} key={key} />
              )})}
            <Pagination
              current={current}
              pageSize={pageSize}
              total={DATA_PAGINATION.length}
              onChange={handleChange}
              className="pagination"
              showSizeChanger={false}
      />
          </Row>
        </Col>
        <Col xs={24} sm={8}>
          <RightHomePage />
        </Col>
      </Row>
    </div>
  );
}

export default Category;
