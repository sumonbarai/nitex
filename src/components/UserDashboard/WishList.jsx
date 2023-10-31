import { useEffect, useState } from "react";
import WishCartItem from "./WishCartItem";
import {
  getAllWishListDetailsRequest,
  removeWishListRequest,
} from "../../ApiRequest/ApiRequest";
import LineLoader from "../ui/LineLoader";

const WishList = () => {
  const [loading, setLoading] = useState(false);
  const [wishList, setWishList] = useState([]);

  // handle remove wishlist and refresh the page
  const handleRemoveWishList = async (_id) => {
    setLoading(true);
    const { data, status } = await removeWishListRequest(_id);

    if (status === 200 && data.status === "success") {
      const remainingWishList = wishList.filter((item) => {
        return item?.food?._id !== _id;
      });
      setWishList(remainingWishList);
    }
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { status, data } = await getAllWishListDetailsRequest();

      if (status === 200 && data.data.length > 0) {
        setWishList(data.data);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Wish List</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <div className="grid grid-cols-2 gap-4">
          {wishList.map((item, index) => (
            <WishCartItem
              key={index}
              item={item}
              handleRemoveWishList={handleRemoveWishList}
            />
          ))}

          {wishList.length === 0 && <p>NO Wish list Found</p>}
        </div>
      </div>
      {loading && <LineLoader />}
    </div>
  );
};

export default WishList;
