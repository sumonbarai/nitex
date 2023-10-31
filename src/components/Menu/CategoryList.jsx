function CategoryList({ onChangeHandler }) {
  return (
    <div className="category shadow-md p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          type="radio"
          onClick={() => onChangeHandler("")}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          All
        </button>
        <button
          type="radio"
          onClick={() => onChangeHandler("meat")}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Meat
        </button>
        <button
          type="radio"
          onClick={() => onChangeHandler("vegetarian")}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Vegetarian
        </button>
        <button
          type="radio"
          onClick={() => onChangeHandler("beverage")}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Beverage
        </button>
        <button
          type="radio"
          onClick={() => onChangeHandler("daily-special")}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Daily Special
        </button>
        <button
          type="radio"
          onClick={() => onChangeHandler("deals")}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Deals
        </button>
      </div>
    </div>
  );
}

export default CategoryList;
