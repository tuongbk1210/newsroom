import React, {useRef} from "react";
import { Row, Col,  Carousel, Button,Card } from 'antd';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Slideshow from  "../../components/main_header/index";
import "./home.scss";
import { DATA_BACKGROUND } from "../../constants/common";
import { DATA_CATEGORY } from "../../constants/common";


function Home() {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <div class="home">
      <Slideshow />
      <Row class="container-home" xs={24} lg={24} style={{padding: "20px 10px 0px 10px"}} >
          <Col class="bg-home" xs={16} lg={16}>
            <div class="container_btn">
              <Button onClick={()=>prev()} class="prev" style={{ top: "130px",
              left: "10px", zIndex: 99 }}><i class="fa fa fa-angle-left"></i></Button>
              <Button onClick={()=>next()} style={{ top: "130px",
              left: "355px", zIndex: 99 }}><i class="fa fa-angle-right"></i></Button>
            </div>
       
        <Carousel
          ref={carouselRef}
          slidesToShow={1}
          slidesToScroll={1}
           dots={false}
          infinite={false}
          style={{paddingRight: "10px"}}
        >
          {DATA_BACKGROUND.map((item, key) => (
                <Row style={{position: 'relative'}}>
                  <img src={item.img} alt="background_home" width={"100%"} height={'420px'}/>
                  <div class="text-bg">
                    <div class="text-date">Technology / January 01/2045</div>
                    <div class="text-info">{item.text}</div>
                  </div>
                </Row>
          ))}
        </Carousel>
            
          </Col>
          <Col className="category" xs={8} style={{ paddingLeft: "10px", borderRadius: "0px !important"}}>
            <Row>
              <Row className="container-categories">
                <div className="text-categories">Categories</div>
                <Link>View All</Link>
              </Row>
            </Row>
            {
            DATA_CATEGORY.map((item, key)=>{
              return (
              <Col key={key} className="card-category">
                <img className="img-category" src={item.img} width={"100%"} height={"100%"} alt="image-categories"/>
                <div className="categories-text">{item.text}</div>
              </Col>
              )})
            }
          </Col>
      </Row>
      <Row xs={24} lg={24} className="container-featured">
          <div className="text-categories">Featured</div>
          <Link>View All</Link>
      </Row>
    </div>
  );
}

export default Home;
