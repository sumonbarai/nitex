const SearchBar = ({ onChangeHandler, input, setInput }) => {
  return (
    <div>
      <form
        className="flex justify-center items-center mb-3"
        onSubmit={onChangeHandler}
      >
        <div className="join w-full max-w-2xl">
          <input
            className="input input-sm md:input-md input-bordered join-item w-full max-w-2xl focus:ring-1 focus:ring-primary ring-offset-3 "
            placeholder="Search here..."
            name="search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="btn btn-sm md:btn-md join-item rounded-r-full bg-primary hover:bg-secondary text-white ">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
