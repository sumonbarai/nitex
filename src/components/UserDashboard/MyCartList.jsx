import Button from "../ui/Button";
import MyCartItem from "./MyCartItem";

const MyCartList = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">My Cart</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <div className="grid grid-cols-1 gap-4">
          <MyCartItem />
          <MyCartItem />
          <MyCartItem />
          <MyCartItem />
          <MyCartItem />
          <MyCartItem />
          <MyCartItem />
          <MyCartItem />
          <MyCartItem />
        </div>
        <div className="flex justify-between items-center shadow-md p-6 mt-8">
          <p className="text-xl">
            Total price : <span>6000</span> BDT
          </p>
          <Button text="checkout" />
        </div>
      </div>
    </div>
  );
};

export default MyCartList;
