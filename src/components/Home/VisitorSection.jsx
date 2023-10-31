import axios from "axios";
import { useEffect, useState } from "react";

const VisitorSection = () => {
  const [visitor, setVisitor] = useState();

  useEffect(() => {
    axios
      .get(`/v2/info/visitorCount`)
      .then((data) => {
        setVisitor(data?.data?.data?.visitorCount);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-12">
        <p className="text-3xl uppercase text-center text-white">
          Total Visitor : {visitor ?? "00"}
        </p>
      </div>
    </div>
  );
};

export default VisitorSection;
