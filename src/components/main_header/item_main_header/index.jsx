import './style.scss';

export default function ItemHeader({ key, img, text }) {
  return (
    <div className="item-main" key={key}>
      <img src={img} alt="item header" width={'60px'} height={'60px'} />
      <div className="item-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
