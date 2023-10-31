import notFoundImg from "../assets/image/404.png";

const NoPage = () => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          src={notFoundImg}
          alt="no page"
          className="w-9/12 object-cover mt-2 mx-auto"
          style={{ height: "calc(100vh - 278px)" }}
        />
        <p className="text-6xl capitalize text-[#9ba9ae] text-center absolute  bottom-14 w-full translate-x-0 translate-y-0">
          Page not found
        </p>
      </div>
    </div>
  );
};

export default NoPage;
