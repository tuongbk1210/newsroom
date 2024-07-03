import  './style.scss';
import { DATA_FEATURED } from "../../constants/common"
import ItemFeatured from "./item_featured_home/index"

import React,  {useRef} from 'react';
import { Carousel, Button } from 'antd';
import 'antd/dist/reset.css';

export default function FeauturedHome() {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

    return (
      <div className="main_featured">
        <div className="container_featured_btn">
          <Button onClick={()=>prev()} style={{ left: "30px"}}><i class="fa fa fa-angle-left"></i></Button>
          <Button onClick={()=>next()} style={{ left: "800px"}}><i class="fa fa-angle-right"></i></Button>
        </div>
        <Carousel
          ref={carouselRef}
          slidesToShow={4}
          slidesToScroll={1}
           dots={false}
          infinite={false}
        >
          {DATA_FEATURED.map((item, key) => (
            // console.log("item: ", item)
             <ItemFeatured key={key} img={item.img} text={item.text} textDate={item.text_date}/>
          ))}
        </Carousel>
      </div>
    );
}

