import  './styles.scss'

export default function ItemPopular({key, img, text , type}) {
  return (
    <div xl={8} xs={8} className={type === "right" ? "item_popular_right_page" : "item_popular_small"} key={key}>
        <img src={img} alt="item popular" width={"100px"} height={"120px"}/>
        <div className='container_text_popular_item'>
          <div className="text_title_popular"><span style={{color: "red"}}>Technology</span> / Janauary 01,2045</div> 
          <div className="text_content_popular">{text}</div> 
        </div>
    </div>
  );
}