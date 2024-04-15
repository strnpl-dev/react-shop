function BasketItem(props) {
  const { id, image, title, price, quantity } = props;

  return (
    <li className="collection-item">
      {title} x{quantity} = {price}{" "}
      <span className="secondary-content">
        <i className="material-icons">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
