import Rating from "./Rating";

const SingleComment = () => {
  return (
    <div className="mb-10 border-b sm:border-orange-500">
      <div className="mb-10 flex">
        <div className="w-1/3 sm:w-1/6">
          <img
            className="w-32 h-32 mb-3 rounded-full shadow-lg object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt="customer profile pic"
          />
        </div>
        <div className="w-2/3 ml-4 sm:w-5/6">
          <div className="flex mb-2">
            <h1 className="mr-20 text-xl text-gray-900">Jhon doe</h1>
            <Rating />
          </div>
          <div>
            <h1 className="mb-2 text-gray-500">10/12/23</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              reprehenderit placeat vero assumenda, nam mollitia itaque
              cupiditate alias! Sint, reiciendis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
