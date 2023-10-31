import SingleComment from "./SingleComment";
import Button from "../ui/Button";

const Comments = () => {
  return (
    <div>
      <div className="mb-24">
        <form className="relative">
          <div className="w-full relative">
            <div>
              <textarea
                className="block mb-2 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md h-24"
                placeholder="Write your comment here..."
              ></textarea>
            </div>
            <div className="absolute right-0 items-center pr-2">
              <Button text="Comment" variant="basic" size="normal" />
            </div>
          </div>
        </form>
      </div>
      <div>
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
    </div>
  );
};

export default Comments;
