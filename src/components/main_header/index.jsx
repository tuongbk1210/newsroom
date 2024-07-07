import React, { useRef } from 'react';
import { Carousel, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

import './style.scss';
import ItemHeader from './item_main_header';
import { DATA_HOME_MAIN } from '../../constants/common';

// import 'antd/dist/reset.css';
export default function ItemMainHeader() {
  const carouselRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="main">
      <div className="container_btn">
        <Button onClick={() => prev()}>
          <i className="fa fa fa-angle-left"></i>
        </Button>
        <Button onClick={() => next()}>
          <i className="fa fa-angle-right"></i>
        </Button>
      </div>
      <Carousel ref={carouselRef} slidesToShow={isMobile ? 1 : 3} slidesToScroll={1} dots={false} infinite={false}>
        {DATA_HOME_MAIN.map((item, key) => (
          <ItemHeader key={item.id} img={item.img} text={item.text} />
        ))}
      </Carousel>
    </div>
  );
}
