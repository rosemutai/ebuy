import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {

  const [cart, setCart] = useState({});
  const { id  } = useParams();

  useEffect(() => {
    const displayACart = async () => {
      const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
      const data = await response.json();
      console.log(data)
      setCart(data);
    }

    displayACart();
  }, [id])
  return (
    <div className="shopping-cart flex px-36 pt-40 text-black">
      <div className="left-section w-3/4">
        <div className="top-section flex justify-between">
          <h4 className="font-bold text-lg">Shopping Cart</h4>
          <p className="font-semibold text-lg">3 items</p>
        </div>
        <hr className="mt-8" />
        <table className="table-auto w-full mt-4 text-brownish/70 font-semibold text-sm">
          <thead>
            <tr>
              <th>PRODUCT DETAILS</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>TOTAL</th>
            </tr>
            {console.log(typeof cart)}
            <tr>
              <td>{cart.products.title}</td>
              <td>
                <img src={cart.products.image} alt={cart.products.title} />
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <div className="right w-1/4"></div>
    </div>
  );
}

export default Cart