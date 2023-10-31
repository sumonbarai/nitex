import { AiOutlineClose } from "react-icons/ai";

import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const MyCartItem = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-3/5">
        <div className="card card-side  shadow-md ">
          <figure className="">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="photo"
              className="w-20 h-full object-cover"
            />
          </figure>
          <div className="card-body relative py-2">
            <h2 className="card-title">food 1</h2>
            <div>
              <p className="text-[#C837AB]">
                Calories : <span>400 cal</span>
              </p>
              <p className="text-red-500">
                Price : <span>400 $</span>
              </p>
            </div>
            <div className="text-2xl absolute right-3 top-3 cursor-pointer text-red-500">
              <AiOutlineClose />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col shadow-md px-10 py-4">
        <div className="text-primary cursor-pointer text-xl">
          <BiUpArrow />
        </div>
        <p className="text-xl">
          x<span>3</span>
        </p>
        <div className="text-primary cursor-pointer text-xl">
          <BiDownArrow />
        </div>
      </div>
      <div className=" text-xl shadow-md px-10 py-4">
        <p>600</p>
        <p>BDT</p>
      </div>
    </div>
  );
};

export default MyCartItem;
