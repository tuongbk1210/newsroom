import React, { useRef } from 'react';
import { Carousel, Button, Row } from 'antd';
import 'antd/dist/reset.css';
import { useMediaQuery } from 'react-responsive';

import './style.scss';
import { DATA_FEATURED } from '../../constants/common';
import ItemFeatured from './item_featured_home/index';

export default function FeauturedHome() {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <Row className="main_featured" xs={24} lg={24}>
      <div className="container_featured_btn">
        <Button onClick={() => prev()}>
          <i className="fa fa fa-angle-left"></i>
        </Button>
        <Button onClick={() => next()}>
          <i className="fa fa-angle-right"></i>
        </Button>
      </div>
      <Carousel ref={carouselRef} slidesToShow={isMobile ? 1 : 4} slidesToScroll={1} dots={false} infinite={false}>
        {DATA_FEATURED.map((item, key) => (
          <ItemFeatured key={item.id} img={item.img} text={item.text} textDate={item.text_date} />
        ))}
      </Carousel>
    </Row>
  );
}
