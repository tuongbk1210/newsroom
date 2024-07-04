import  './styles.scss';

import React,  {useRef} from 'react';
import { Carousel, Button, Row} from 'antd';
import 'antd/dist/reset.css';

export default function DoubleCategories({img, title, text}) {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

    return (
      <Row xl={12} xs={12} className="main_double_categories">
        <div className='container_double_categories'>
            <div className='title_double_categories'>{title}</div>
            <div className="container_double_categories_btn">
                <Button onClick={()=>prev()}><i class="fa fa fa-angle-left"></i></Button>
                <Button onClick={()=>next()}><i class="fa fa-angle-right"></i></Button>
            </div>
        </div>
       {/* <Row>

       </Row> */}
        <Carousel
          ref={carouselRef}
          slidesToShow={2}
          slidesToScroll={1}
           dots={false}
          infinite={false}
        >
          {
            img.map((item, key)=>{
              return(
                <Row key={key} className="item_categories_double">
                    <img src={item} alt="item category" width={"100%"} height="150px"/>
                    <div className="container_double_categories_text">
                        <div className="text_small_double_categories"><span className="title_double">{title}</span> / January 01,2045</div>
                        <div className="text_sub_double_categories">{text}</div>
                    </div>
                </Row>
              )})
          }
        </Carousel>
      </Row>
    );
}

