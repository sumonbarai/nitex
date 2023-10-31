import chef1 from "../../assets/image/chef1.jpg";

const ChefCard = ({ name, title }) => {
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure className="overlay-parent">
        <img src={chef1} alt="Shoes" className="w-full" />
        <div className="overlay"></div>
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto font-bold text-xl">{name}</h2>
        <p className="text-center">{title}</p>
      </div>
    </div>
  );
};
const ChefSection = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <h4 className="text-black font-medium text-2xl">Meet the Chefs</h4>
        <hr className="mt-2 border-primary" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-8">
          <ChefCard name="Daniel Due" title="Head Chef" />
          <ChefCard name="Daniel Due" title="Head Chef" />
          <ChefCard name="Daniel Due" title="Head Chef" />
          <ChefCard name="Daniel Due" title="Head Chef" />
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
