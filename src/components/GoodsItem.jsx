function GoodsItem(props) {
  const {
    id,
    title,
    description,
    price,
    image,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title">
          {title.length > 20 ? title.substring(0, 20) + "..." : title}
        </span>
        <span>
          {description.length > 60
            ? description.substring(0, 60) + "..."
            : description}
        </span>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              title,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} $
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
