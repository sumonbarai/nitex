import { useNavigate } from "react-router";
import Button from "../ui/Button";

const RelatedFood = ({ data }) => {
  const { description, price, title, calories, image, _id } = data || {};
  const navigate = useNavigate();

  return (
    <div>
      <div className="sm:flex h-auto mb-6 sm:mb-2 sm:h-24 m-2">
        <div className="w-full sm:w-1/2 sm:ml-4">
          <div className="mb-4 h-52 sm:h-24 sm:w-40">
            <img
              className="rounded-xl w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="flex flex-col ml-3 w-full sm:w-1/2">
          <h2 className="font-medium text-md">{title}</h2>
          <p className="text-gray-800 mt-2 text-sm">
            {description.slice(0, 20)}...
          </p>
          <div className="flex mb-6 items-center">
            <div>
              <p className=" text-gray-400 mt-1 text-sm">Price: {price}$</p>
              <p className=" text-gray-400 text-sm">Cal: {calories} cal</p>
            </div>
            <div className=" ml-36 sm:ml-3">
              <Button
                size="extra-small"
                text="Details"
                variant="outline"
                onClick={() => {
                  navigate(`/itemDetailsPage/${_id}`);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedFood;
