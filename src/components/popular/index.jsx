import  './styles.scss'

export default function ItemPopular({key, img, text}) {
  return (
    <div className="item_popular_small" key={key}>
        <img src={img} alt="item popular" width={"100%"} height={"250px"}/>
        <div className='container_text_popular_item'>
          <div className="text_title_popular"><span>Technology</span> / Janauary 01,2045</div> 
          <div className="text_content_popular">Lorem ipsum dolor sit amet consec adipis elit</div> 
        </div>
    </div>
  );
}