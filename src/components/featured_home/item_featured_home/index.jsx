import  './style.scss'

export default function ItemFeaturedHome({key, img, text}) {
  return (
    <div class="item-main" key={key}>
        <img src={img} alt="item header" width={"60px"} height={"60px"}/>
        <div class="item-text"><p>{text}</p></div> 
    </div>
  );
}