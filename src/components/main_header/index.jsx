import  './style.scss';
import ItemHeader from "./item_main_header";
import DATA_HOME_MAIN from "../../constants/common"

// export default function ItemMainHeader() {
//   return (
//     <>
//         {
//             // eslint-disable-next-line array-callback-return
//             DATA_HOME_MAIN.map((item, key)=>{
//                 <ItemHeader key={key} img={item.img} text={item.text} />
//             })
//         }
//     </>
//   );
// }


import React,  {useRef} from 'react';
import { Carousel, Button, Image } from 'antd';
// import 'antd/dist/reset.css';

export default function ItemMainHeader() {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

    return (
      <div class="main">
         <Button onClick={()=>prev()} class="prev"><i class="fa fa fa-angle-left"></i></Button>
        <Carousel
          ref={carouselRef}
          slidesToShow={3}
          slidesToScroll={1}
           dots={false}
          infinite={false}
        >
          {DATA_HOME_MAIN.map((item, key) => (
            <ItemHeader key={key} img={item.img} text={item.text}/>
          ))}
        </Carousel>
        <Button onClick={()=>next()} class="next"><i class="fa fa-angle-right"></i></Button>
        {/* <div class="container_btn">
         
         
        </div> */}
      </div>
    );
}

