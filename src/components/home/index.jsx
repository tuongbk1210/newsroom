import React, { useRef } from 'react';
import { Row, Col, Carousel, Button } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useMediaQuery } from 'react-responsive';

import Slideshow from '../../components/main_header/index';
import FeauturedHome from '../../components/featured_home/index';
import DoubleCategories from '../../components/double_categories/index';
import ItemPopular from '../../components/popular/index';
import RightHomePage from '../../components/rightHomePage/index';
import './home.scss';
import {
  DATA_BACKGROUND,
  DATA_CATEGORY,
  DATA_DOUBLE_CATEGORIES,
  DATA_POPULAR,
  DATA_LATEST,
} from '../../constants/common';
import Popular_1 from '../../assets/images/background_home/thao-luan-nhom.jpg';
import Popular_2 from '../../assets/images/background_home/thao_luan_nhom_2.jpg';

function Home() {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <div className="home">
      <Slideshow />
      <Row className="container-home" xs={24} lg={24} style={{ padding: '20px 10px 0px 10px' }}>
        <Col xs={24} sm={16}>
          <div className="container_bg_btn">
            <Button onClick={() => prev()}>
              <i class="fa fa fa-angle-left"></i>
            </Button>
            <Button onClick={() => next()}>
              <i class="fa fa-angle-right"></i>
            </Button>
          </div>

          <Carousel
            ref={carouselRef}
            slidesToShow={1}
            slidesToScroll={1}
            dots={false}
            infinite={false}
            style={isMobile ? {paddingBottom: "10px"} : { paddingRight: '10px' }}
          >
            {DATA_BACKGROUND.map((item, key) => (
              <Row style={{ position: 'relative' }}>
                <img src={item.img} alt="background_home" width={'100%'} height={'405px'} />
                <div className="text-bg">
                  <div className="text-date">Technology / January 01/2045</div>
                  <div className="text-info">{item.text}</div>
                </div>
              </Row>
            ))}
          </Carousel>
        </Col>
        <Col className="category" xs={24} sm={8} style={ isMobile ? {borderRadius: '0px !important'} : { paddingLeft: '10px', borderRadius: '0px !important' }}>
          <Row>
            <Row className="container-categories">
              <div className="text-categories">Categories</div>
              <Link>View All</Link>
            </Row>
          </Row>
          {DATA_CATEGORY.map((item, key) => {
            return (
              <Col key={key} className="card-category">
                <img className="img-category" src={item.img} width={'100%'} height={'100%'} alt="image-categories" />
                <div className="categories-text">{item.text}</div>
              </Col>
            );
          })}
        </Col>
      </Row>
      <Row xs={24} sm={24} className="container-featured">
        <div className="text-categories">Featured</div>
        <Link>View All</Link>
      </Row>
      <FeauturedHome />
      <Row>
        {DATA_DOUBLE_CATEGORIES.map((item, key) => {
          return (
            <Row style={{ width: isMobile ? '100%': '50%', paddingTop: '20px' }}>
              <DoubleCategories
                key={key}
                img={item.img}
                title={item.title}
                text={item.text}
                style={{ width: '100%' }}
              />
            </Row>
          );
        })}
      </Row>
      <Row xs={24} lg={24}>
        <Col xs={24} sm={16} className="container_popular">
          <Row className="popular">
            <div className="text_popular">Popular</div>
            <Link>View All</Link>
          </Row>
          <Row xs={24} sm={16} style={{ padding: '0px 10px' }}>
            <Row className="item_popular_left">
              <img src={Popular_1} alt="popular 1" width={'100%'} height={'200px'} />
              <div className="container_popular_text">
                <div>
                  <span style={{ color: 'red' }}>Technology</span>/ January 01,2045
                </div>
                <div className="text_popular_sub">Est set amet ipsum stet clita rebum duo</div>
                <div>
                  Rebum dolore duo et vẻo ipsum cilta, est ea sed duo diam ipsum, clita at justo, lorem amet vero éo sed
                  sit...
                </div>
              </div>
            </Row>
            <Row className="item_popular_right">
              <img src={Popular_2} alt="popular 1" width={'100%'} height={'200px'} />
              <div className="container_popular_text">
                <div>
                  <span style={{ color: 'red' }}>Technology</span>/ January 01,2045
                </div>
                <div className="text_popular_sub">Est set amet ipsum stet clita rebum duo</div>
                <div>
                  Rebum dolore duo et vero ipsum cilta, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos
                  sed sit...
                </div>
              </div>
            </Row>
          </Row>
          <Row className="container_item_popular" xs={24} sm={16}>
            {DATA_POPULAR.map((item, key) => {
              return <ItemPopular img={item.img} text={item.text} key={key} />;
            })}
          </Row>

          <Row className="popular">
            <div className="text_popular">Latest</div>
            <Link>View All</Link>
          </Row>
          <Row xs={16} xl={16} style={{ padding: '0px 10px' }}>
            <Row className="item_popular_left">
              <img src={Popular_2} alt="popular 1" width={'100%'} height={'200px'} />
              <div className="container_popular_text">
                <div>
                  <span style={{ color: 'red' }}>Technology</span>/ January 01,2045
                </div>
                <div className="text_popular_sub">Est set amet ipsum stet clita rebum duo</div>
                <div>
                  Rebum dolore duo et vẻo ipsum cilta, est ea sed duo diam ipsum, clita at justo, lorem amet vero éo sed
                  sit...
                </div>
              </div>
            </Row>
            <Row className="item_popular_right">
              <img src={Popular_1} alt="popular 1" width={'100%'} height={'200px'} />
              <div className="container_popular_text">
                <div>
                  <span style={{ color: 'red' }}>Technology</span>/ January 01,2045
                </div>
                <div className="text_popular_sub">Est set amet ipsum stet clita rebum duo</div>
                <div>
                  Rebum dolore duo et vero ipsum cilta, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos
                  sed sit...
                </div>
              </div>
            </Row>
          </Row>
          <Row className="container_item_popular" xs={16} lg={16}>
            {DATA_LATEST.map((item, key) => {
              return <ItemPopular img={item.img} text={item.text} key={key} />;
            })}
          </Row>
        </Col>
        <Col xs={24} sm={8} className="container_popular">
          <RightHomePage />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
