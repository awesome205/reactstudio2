// TODO: create a component that displays a single bakery item
import "../index.css";

export default function BakeryItem(props) {
  return (
    <div className="bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex flex-col">
      <div className="flex-[2] md:flex-[1.5] w-full h-60 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={props.item.image}
          alt={props.item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex-grow p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{props.item.name}</h2>
          <p>{props.item.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>${props.item.price}</p>
          <button onClick={() => { puttingcartinmap(props.cart, props.item, props.setCart)
}} className="px-4 py-2 rounded-md">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function puttingcartinmap(cart, item, setcart) {
    if(cart.has(item.name)){
        setcart(new Map(cart.set(item.name, [cart.get(item.name)[0] + 1, item.price])))
    } else {
        setcart(new Map(cart.set(item.name, [1, item.price])))
    }
}