import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const sumcart = (cart) => {
    let sum = 0;
    cart.forEach(value => {
      sum += value[1] * value[0];
    });
    return sum.toFixed(2);
  }
  const [cart, setCart] = useState(new Map());
  // const updateCart = (item, value, setcart) => {
  //   setcart(new Map(cart.set(item, value)));
  // }
  return (
    <div className="App flex flex-col items-center">
      <div className="flex w-full sm:max-w-[1280px]">
        <main className="flex flex-col w-2/3 p-8 gap-8">
          <h1 className="text-4xl font-medium">Blueno's Bakery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* TODO: personalize your bakery (if you want) */}
            {bakeryData.map(
              (
                item,
                index // TODO: map bakeryData to BakeryItem components
              ) => (
                <BakeryItem
                  item={item}
                  index={index}
                  setCart={setCart}
                  cart={cart}
                />
              )
            )}
          </div>
        </main>
        <aside className="flex flex-col w-1/3 shrink-0 p-8 sticky top-20 max-h-min">
          <div>
            <h2 className="text-2xl font-medium">My Cart</h2>
            {cart.size == 0 ? (
              <p className="text-gray-500 mt-4">Nothing here just yet!</p>
            ) : (
              <div>
                <ul className="mt-4 flex flex-col gap-4">
                  {[...cart.keys()].map((item) => {
                    return (
                      <li>
                        {cart.get(item)[0]}x {item}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-4 font-medium">
                  Total: $
                  { 
                    sumcart(cart)
                  }
                </p>
              </div>
            )}
            {/* TODO: render a list of items in the cart */}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
