import RelatedFood from "./RelatedFood";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
import Button from "../ui/Button";
import LineLoader from "../ui/LineLoader";

const ItemDetails = () => {
  const [foodData, setFoodData] = useState({});
  const [relatedFood, setRelatedFood] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/v2/food/id/${id}`)
      .then((response) => {
        setFoodData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (foodData.category) {
      axios
        .get(`/v2/food/category/${foodData.category}`)
        .then((response) => {
          const data = response.data.data;
          const filterData = data.filter((item) => item._id !== id);
          setRelatedFood(filterData);
        })
        .catch(() => {
          console.error("Error fetching data category api:");
        });
    }
  }, [foodData.category, id]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row m-10 mb-20">
        <div className="w-full sm:w-2/3">
          <h1 className="mb-8 text-center font-semibold text-3xl">
            {foodData.title}
          </h1>
          <div className="sm:h-[32rem] mb-6 sm:mb-10">
            <div className="mb-6 w-full h-[27rem]">
              <img
                className="rounded-xl w-full h-full object-cover"
                src={foodData.image}
                alt={foodData.title}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex">
                <p className="text-[#615851] mr-4 ml-0 sm:ml-10 text-sm sm:text-lg ">
                  Price: {foodData.price} BDT
                </p>
                <p className="text-[#C837AB] text-sm sm:text-lg">
                  {foodData.calories} calories
                </p>
              </div>

              <div className="ml-auto mr-8">
                <div className="flex mt-4 sm:mt-0">
                  <div className="mr-4">
                    <Button
                      text="+ ADD to wish list"
                      variant="outline"
                      size="normal"
                      onClick={() => navigate(`/itemDetailsPage/${_id}`)}
                    />
                  </div>
                  <div>
                    <Button
                      text="+ Add to Cart"
                      variant="basic"
                      size="normal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="sm:ml-10 sm:mr-10">{foodData.description}</p>
        </div>

        <div className="w-full sm:w-1/3">
          <h1 className="mb-4 sm:mb-8 mt-6 sm:mt-0 text-center font-normal text-xl">
            Related Foods
          </h1>
          <div className="sm:ml-4 sm:border-l sm:border-orange-500">
            {relatedFood.length === 0 ? (
              <p className="ml-10 mt-10">
                There is no related food for this item! Thanks.
              </p>
            ) : (
              relatedFood
                .slice(0, 5)
                .map((data) => <RelatedFood key={data._id} data={data} />)
            )}
          </div>
        </div>
      </div>
      <div className="m-10">
        <h1 className="mb-10 text-xl font-medium text-center text-gray-900 border-b sm:border-orange-500">
          Comments
        </h1>
        <Comments />
      </div>
      {loading && <LineLoader />}
    </div>
  );
};

export default ItemDetails;
