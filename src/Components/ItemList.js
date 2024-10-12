import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
const ItemList = ({ items, category }) => {
  
  const dispatch = useDispatch();

  const handleAddItem = (namer) => {
    {
      category
        ? dispatch(addItem(namer))
        : dispatch(removeItem(namer));
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="">{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div>
              <button
                className="p-2 bg-black text-white shadow-lg absolute  mx-10 rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                {category ? <p> Add+</p> : <p> delete </p>}
              </button>
            </div>
            <img
              className="w-full"
              src={CDN_URL + item.card.info.imageId}
              alt="card-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
