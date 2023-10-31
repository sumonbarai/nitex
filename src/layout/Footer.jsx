import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-neutral" id="footer-section">
      <footer className="footer p-10  container mx-auto">
        <div className="w-full h-full flex  items-center">
          <div>
            <p className="text-3xl uppercase">
              Kachchi <span className="text-secondary">Palace</span>
            </p>
          </div>
        </div>
        <nav>
          <header className="footer-title text-base opacity-90">
            Follow Us
          </header>
          <a className="link link-hover flex text-base">
            {" "}
            <span className="text-secondary text-xl mr-3">
              <BsFacebook />
            </span>{" "}
            Facebook
          </a>
          <a className="link link-hover flex text-base">
            {" "}
            <span className="text-secondary text-xl mr-3">
              <AiFillInstagram />
            </span>{" "}
            Instagram
          </a>
          <a className="link link-hover flex text-base">
            {" "}
            <span className="text-secondary text-xl mr-3">
              <BsTwitter />
            </span>{" "}
            Twitter
          </a>
        </nav>
        <nav>
          <header className="footer-title text-base opacity-90">
            Contact Us
          </header>
          <a
            className="link link-hover text-base"
            href="mailto:someone@example.com"
          >
            abc@gmail.com
          </a>
          <a className="link link-hover text-base" href="tel:+8801925252525">
            {" "}
            +8801925252525
          </a>
        </nav>
        <nav>
          <header className="footer-title text-base opacity-90">
            Open Hours
          </header>
          <p className="text-base">
            The Restaurant opening hours <br /> are 9 a.m. to 6 p.m
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
