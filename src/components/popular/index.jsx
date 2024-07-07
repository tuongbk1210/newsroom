import { useSelector } from 'react-redux';


import  './styles.scss'

export default function ItemPopular({key, img, text , type}) {
  const category = useSelector((state) => state.category.value)
  return (
    <div xs={24} sm={8} className={type === "right" ? "item_popular_right_page" : "item_popular_small"} key={key}>
        <img src={img} alt="item popular" width={"100px"} height={"110px"}/>
        <div className='container_text_popular_item'>
          <div className="text_title_popular"><span style={{color: "red"}}>{category}</span> / Janauary 01,2045</div> 
          <div className="text_content_popular">{text}</div> 
        </div>
    </div>
  );
}