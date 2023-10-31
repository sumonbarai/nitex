import img1 from "../../assets/image/slider-1.jpg";
import img2 from "../../assets/image/slider-2.jpg";
import img3 from "../../assets/image/slider-3.jpg";

const data = [img1, img2, img3, img1];

const Item = ({ image }) => {
  return (
    <img
      src={image}
      alt="gallery images"
      className="w-full max-h-80  object-cover rounded-lg border-4 border-transparent cursor-pointer hover:border-4 hover:border-primary"
    />
  );
};

const GalleryItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
      {data.map((img, index) => (
        <Item key={index} image={img} />
      ))}
    </div>
  );
};

export default GalleryItems;
