import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const { order = [], handleBasketShow = Function.prototype } = props;

  const totalSum = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Cart</li>{" "}
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li>Корзина пуста</li>
      )}
      <li className="collection-item active">Total: {totalSum}$</li>
    </ul>
  );
}

export { BasketList };
