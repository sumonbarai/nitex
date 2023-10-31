import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { AiOutlineClose } from "react-icons/ai";

const WishCartItem = ({ item, handleRemoveWishList }) => {
  const navigate = useNavigate();
  const { image, title, calories, price, _id } = item.food || {};

  return (
    <div className="card card-side  shadow-md ">
      <figure className="">
        <img src={image[0]} alt="photo" className="w-32 h-full object-cover" />
      </figure>
      <div className="card-body relative">
        <h2 className="card-title">{title}</h2>
        <div>
          <p className="text-[#C837AB]">
            Calories : <span>{calories} cal</span>
          </p>
          <p className="text-red-500">
            Price : <span>{price} $</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Button text="+ Add To Cart" variant="basic" size="small" />
          <Button
            text="Details"
            variant="outline"
            size="small"
            onClick={() => navigate(`/itemDetailsPage/${_id}`)}
          />
        </div>
        <div
          className="text-2xl absolute right-3 top-3 cursor-pointer text-red-500"
          onClick={() => handleRemoveWishList(_id)}
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default WishCartItem;
