import { useNavigate } from "react-router-dom";

import GalleryItems from "./GalleryItem";
import Button from "../ui/Button";

const GallerySection = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-9">
      <div className="gallery-header flex justify-between items-center">
        <h4 className="text-black font-medium text-2xl">Deals</h4>

        <Button text="view all deals" onClick={() => navigate("/menu")} />
      </div>
      <hr className="mt-2 border-primary" />
      <GalleryItems />
    </div>
  );
};

export default GallerySection;
