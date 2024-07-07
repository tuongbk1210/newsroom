import './styles.scss';

export default function ItemFeaturedHome({ key, img, textDate, text }) {
  return (
    <div className="item-featured" key={key}>
      <img src={img} alt="item featured" width={'100%'} height={'300px'} />
      <div className="text_featured">
        <div className="text-date-featured">{textDate}</div>
        <div className="text-featured">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
