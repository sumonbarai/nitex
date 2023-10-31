import restaurant from "../../assets/image/resturant.jpg";
import Button from "../ui/Button";

const AboutSection = () => {
  return (
    <div className="bg-neutral" id="about-section">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-3 md:gap-8 justify-center items-center w-10/12 mx-auto">
          <div className="w-full lg:w-2/4 ">
            <img
              src={restaurant}
              alt="restaurant photo"
              className="rounded-lg w-full h-auto object-cover "
            />
          </div>
          <div className="w-full lg:w-2/4  ">
            <div className="flex flex-col justify-between  h-full py-2">
              <h4 className="text-black font-medium text-2xl">About Us</h4>
              <p className="pt-5 text-justify">
                Lörem ipsum icke-binär beska autonat av vöhet, terabel.
                Prelalyde jenade ett etnocentrism. Hälsolitteracitet cisperson.
                Oss gigiment realara myhet. Nok lan. Tav kvasir att lade
                reprening. Biligen anade kens ade i metaism. Mar talig
                becknarväska huruvida teraras, prer. Trilylingar. Pseudokroskap
                intralig. Ultragäsm fixie i slöjböter. Askänka beska pevis i
                bysk.
              </p>
              <p className="pt-5">
                teraras, prer. Trilylingar. Pseudokroskap intrali
              </p>
              <div className="w-60 my-3">
                <Button text="More about Us" onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
